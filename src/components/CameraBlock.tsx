import { useRef, useState, useEffect } from 'react';
import { applyNewspaperFilter } from '../utils/canvasFilters';
import './CameraBlock.css';

interface CameraBlockProps {
    onPhotoCapture?: (photoData: string) => void;
}

export default function CameraBlock({ onPhotoCapture }: CameraBlockProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const hiddenCanvasRef = useRef<HTMLCanvasElement>(null);

    const [stream, setStream] = useState<MediaStream | null>(null);
    const [photoData, setPhotoData] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    /* ======================
       CAMERA LIFECYCLE
    ====================== */

    useEffect(() => {
        return () => {
            stopCamera();
        };
    }, []);

    const startCamera = async () => {
        try {
            setError(null);

            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'user' },
                audio: false
            });

            setStream(mediaStream);

            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
            }
        } catch (err) {
            console.error(err);
            setError('Камерага рухсат берилмади');
        }
    };

    const stopCamera = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
        }
    };

    /* ======================
       PHOTO CAPTURE
    ====================== */

    const takePhoto = () => {
        if (!videoRef.current || !canvasRef.current || !hiddenCanvasRef.current) return;

        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        if (!ctx) return;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        stopCamera();

        const img = new Image();
        img.onload = () => {
            const filtered = applyNewspaperFilter(hiddenCanvasRef.current!, img);
            setPhotoData(filtered);
            onPhotoCapture?.(filtered);
        };

        img.src = canvas.toDataURL('image/jpeg', 0.95);
    };

    const retakePhoto = () => {
        setPhotoData(null);
        startCamera();
    };

    /* ======================
       RENDER
    ====================== */

    return (
        <div className="camera-block">
            {error && <div className="camera-error">{error}</div>}

            <div className="camera-view">
                {!photoData ? (
                    <div className="camera-video-wrapper">
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="camera-video"
                        />
                    </div>
                ) : (
                    <div className="photo-container">
                        <img
                            src={photoData}
                            alt="Captured"
                            className="newspaper-photo"
                        />
                        <div className="photo-border" />
                    </div>
                )}
            </div>

            <div className="camera-controls">
                {!photoData && (
                    <button
                        className="btn-primary"
                        onClick={stream ? takePhoto : startCamera}
                    >
                        {stream ? '📸 Сурат олиш' : 'Камерани очиш'}
                    </button>
                )}

                {photoData && (
                    <button className="btn-secondary" onClick={retakePhoto}>
                        🔄 Қайта олиш
                    </button>
                )}
            </div>

            <canvas ref={canvasRef} style={{ display: 'none' }} />
            <canvas ref={hiddenCanvasRef} style={{ display: 'none' }} />
        </div>
    );
}
