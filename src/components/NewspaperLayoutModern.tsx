import NewspaperPage from './NewspaperPage';
import CameraBlock from './CameraBlock';

export default function NewspaperLayoutModern() {
    const handlePhotoCapture = (data?: string) => {
        console.log('Photo captured (modern)', data?.slice(0, 64));
    };

    return (
        <NewspaperPage>
            <header className="modern-header">
                <h1>DAILY MODERN</h1>
                <p className="tagline">Global insights & culture</p>
            </header>

            <section className="hero">
                <CameraBlock onPhotoCapture={handlePhotoCapture} />
                <h2>Innovation & Society</h2>
            </section>

            <section className="modern-grid">
                <article>
                    <h3>FEATURE</h3>
                    <p>Журнальный текст и визуальная подача — более свободный порядок блоков.</p>
                </article>

                <article>
                    <h3>TECH</h3>
                    <p>Короткие заметки про технологии и культуру, другой порядок блоков.</p>
                </article>
            </section>



            <footer className="modern-footer">MODERN TIMES — 2026</footer>
        </NewspaperPage>
    );
}
