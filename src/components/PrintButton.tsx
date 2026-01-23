export default function PrintButton() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="print-button-container">
            <button onClick={handlePrint} className="btn-print">
                🖨 Печатлаш
            </button>
        </div>
    );
}