import NewspaperPage from './NewspaperPage';
import CameraBlock from './CameraBlock';
import './NewspaperLayout.css';
import './News4.css';

export default function News4() {
    const handlePhotoCapture = (data?: string) => {
        console.log('Photo captured (news4)', data?.slice(0, 64));
    };

    return (
        <NewspaperPage>
            <div className="editorial-page editorial-news4">
                <div className="news4-topbar">
                    <span>Issue 041 · Vol. 7</span>
                    <span>International Edition</span>
                    <span>UZS 12 000</span>
                    <span>Tashkent · 20 March 2026</span>
                </div>

                <header className="news4-header">
                    <div className="news4-kicker">22 January 2026</div>
                    <h1 className="news4-title">The Daily Chronicle</h1>
                    <div className="news4-rule" />
                    <div className="news4-subline">
                        Independent reporting · Society · Culture · Tashkent
                    </div>
                </header>

                <section className="news4-main">
                    <aside className="news4-briefs">
                        <h3 className="news4-section-title">Briefs</h3>
                        <div className="news4-brief">
                            <h4>Work & Boundaries</h4>
                            <p>When approval becomes currency, people trade long-term goals for short-term comfort.</p>
                        </div>
                        <div className="news4-brief">
                            <h4>City Pulse</h4>
                            <p>In Tashkent, cafés are full, but conversations sound different: fewer promises, more plans.</p>
                        </div>
                        <div className="news4-quote">
                            <p>"A person who needs nothing can't be controlled. Dependence creates leverage."</p>
                            <span>— Today's theme</span>
                        </div>
                    </aside>

                    <div className="news4-hero">
                        <div className="editorial-portrait-frame news4-portrait">
                            <CameraBlock onPhotoCapture={handlePhotoCapture} />
                            <div className="portrait-caption">Cover · Tashkent 2026</div>
                        </div>
                        <div className="news4-hero-head">
                            <h2>Power, <em>Silence</em> &amp; Control</h2>
                            <p>
                                Not all strength looks like aggression. Sometimes it looks like a person
                                who stops explaining. When you're not begging for approval, you stop
                                giving other people the steering wheel.
                            </p>
                        </div>
                    </div>

                    <aside className="news4-sidebar">
                        <h3 className="news4-section-title">Editor's Column</h3>
                        <div className="news4-box">
                            <h4>The approval trap</h4>
                            <p>Many people don't fear failure — they fear being disliked. That fear turns into people-pleasing.</p>
                        </div>
                        <div className="news4-box">
                            <h4>How control works</h4>
                            <p>Control is rarely a punch; it's usually a promise. The strongest antidote is self-contained identity.</p>
                        </div>
                    </aside>
                </section>

                <footer className="editorial-footer">
                    <div className="editorial-footer-left">
                        <span>© 2026 The Daily Chronicle</span>
                        <span>·</span>
                        <span>Tashkent</span>
                    </div>
                </footer>
            </div>
        </NewspaperPage>
    );
}
