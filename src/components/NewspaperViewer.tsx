import { useState, type ReactNode } from 'react';
import './NewspaperViewer.css';

interface NewspaperViewerProps {
    children: ReactNode[];
}

export default function NewspaperViewer({ children }: NewspaperViewerProps) {
    const [index, setIndex] = useState(0);
    const total = children.length;

    const prev = () => setIndex(i => Math.max(i - 1, 0));
    const next = () => setIndex(i => Math.min(i + 1, total - 1));

    return (
        <div className="viewer-wrapper">
            <div className="viewer-controls">
                <button onClick={prev} disabled={index === 0} aria-label="Previous">←</button>
                <span className="viewer-counter">{index + 1} / {total}</span>
                <button onClick={next} disabled={index === total - 1} aria-label="Next">→</button>
            </div>

            <div className="viewer-viewport">
                <div
                    className="viewer-track"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {children.map((child, i) => (
                        <div className="viewer-slide" key={i}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
