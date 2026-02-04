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

    const handlePrint = () => {
        // Берем текущий слайд
        const slide = document.getElementById(`slide-${index}`);
        if (!slide) return;

        const printWindow = window.open('', '', 'width=800,height=600');
        if (!printWindow) return;

        printWindow.document.write('<html><head><title>Print</title>');


        document.querySelectorAll('link[rel="stylesheet"], style').forEach(el => {
            printWindow!.document.write(el.outerHTML);
        });

        printWindow.document.write('</head><body>');
        printWindow.document.write(slide.innerHTML); // только активный слайд
        printWindow.document.write('</body></html>');

        printWindow.document.close();
        printWindow.focus();
        printWindow.onafterprint = () => {
            window.location.reload(); // перезагружаем текущую страницу
        };
        printWindow.print();
        printWindow.close();
    };

    return (
        <div className="viewer-wrapper">
            {/* Навигация + кнопка печати */}
            <div className="viewer-controls">
                <button onClick={prev} disabled={index === 0} aria-label="Previous">←</button>
                <span className="viewer-counter">{index + 1} / {total}</span>
                <button onClick={next} disabled={index === total - 1} aria-label="Next">→</button>

                {/* кнопка печати рядом с контролами */}
                <button onClick={handlePrint} className="btn-print">🖨 Печатлаш</button>
            </div>

            {/* Слайды */}
            <div className="viewer-viewport">
                <div
                    className="viewer-track"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {children.map((child, i) => (
                        <div className="viewer-slide" key={i} id={`slide-${i}`}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
