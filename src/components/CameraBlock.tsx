import { useRef, useState } from 'react';
import { applyNewspaperFilter } from '../utils/canvasFilters';
import './CameraBlock.css';

interface CameraBlockProps {
    onPhotoCapture?: (photoData: string) => void;
}

export default function CameraBlock({ onPhotoCapture }: CameraBlockProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const hiddenCanvasRef = useRef<HTMLCanvasElement>(null);
    const [cameraActive, setCameraActive] = useState(false);
    const [photoData, setPhotoData] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const startCamera = async () => {
        try {
            setError(null);
            setLoading(true);
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
                audio: false,
            });

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                setCameraActive(true);
                setLoading(false);
            }
        } catch (err) {
            setError('Камера қўй берилмади. Рухсат текширинг.');
            console.error('Camera access error:', err);
            setLoading(false);
        }
    };

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach((track) => track.stop());
            setCameraActive(false);
        }
    };

    const takePhoto = () => {
        if (!videoRef.current || !canvasRef.current || !hiddenCanvasRef.current) {
            setError('Canvas یا Video element ไม่พบ');
            return;
        }

        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) {
            setError('Canvas context ัรรม नई');
            return;
        }


        const videoWidth = videoRef.current.videoWidth;
        const videoHeight = videoRef.current.videoHeight;

        if (videoWidth === 0 || videoHeight === 0) {
            setError('Video ҳозир йўқланди');
            return;
        }

        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        // Draw the video frame to canvas
        ctx.drawImage(videoRef.current, 0, 0);

        // Stop the camera stream
        stopCamera();

        // Convert canvas to image and apply filters
        const imageData = canvasRef.current.toDataURL('image/jpeg', 0.9);
        const tempImg = new Image();

        tempImg.onload = () => {
            try {
                const filteredData = applyNewspaperFilter(hiddenCanvasRef.current!, tempImg);
                setPhotoData(filteredData);
                onPhotoCapture?.(filteredData);
            } catch (err) {
                setError('Сурат қўлланилмади');
                console.error('Photo filter error:', err);
            }
        };

        tempImg.onerror = () => {
            setError('Image loading ўтказилмади');
        };

        tempImg.src = imageData;
    };

    const resetPhoto = () => {
        setPhotoData(null);
        setError(null);
    };

    const retakePhoto = () => {
        resetPhoto();
        startCamera();
    };

    return (
        <div className="camera-block">
            {error && <div className="camera-error">{error}</div>}

            {!cameraActive && !photoData && (
                <div className="camera-placeholder">
                    <div className="placeholder-icon">📷</div>
                    <p>Ready to capture newspaper photo</p>
                </div>
            )}

            {cameraActive && (
                <div className="camera-container">
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="camera-video"
                    />
                    <div className="camera-frame-border" />
                </div>
            )}

            {photoData && (
                <div className="photo-container">
                    <img src={photoData} alt="Captured newspaper photo" className="newspaper-photo" />
                    <div className="photo-border" />
                </div>
            )}

            <canvas ref={canvasRef} style={{ display: 'none' }} />
            <canvas ref={hiddenCanvasRef} style={{ display: 'none' }} />

            <div className="camera-controls">
                {!cameraActive && !photoData && (
                    <button
                        onClick={startCamera}
                        disabled={loading}
                        className="btn-primary"
                    >
                        {loading ? 'Бошланмоқда...' : 'суратга олиш'}
                    </button>
                )}

                {cameraActive && (
                    <>
                        <button onClick={takePhoto} className="btn-primary">
                            📸 Сурат Олиш
                        </button>
                        <button onClick={stopCamera} className="btn-secondary">
                            ✕ Бекор Қилиш
                        </button>
                    </>
                )}

                {photoData && (
                    <>
                        <button onClick={retakePhoto} className="btn-primary">
                            🔄 Қайта Олиш
                        </button>
                        <button onClick={resetPhoto} className="btn-secondary">
                            🗑 Ўчириш
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
