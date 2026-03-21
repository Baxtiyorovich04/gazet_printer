import CameraBlock from './CameraBlock';
import NewspaperPage from './NewspaperPage';
import './NewspaperLayout.css';
import './ClassicLayout.css';

export default function NewspaperLayoutClassic() {
    const handlePhotoCapture = (data?: string) => {
        console.log('Photo captured (classic)', data?.slice(0, 64));
    };

    return (
        <NewspaperPage>
            <div className="classic-page">
                {/* Top bar — real newspaper style */}
                <div className="classic-topbar">
                    <span className="classic-date">Friday, March 20, 2026</span>
                    <span className="classic-edition">TASHKENT EDITION</span>
                    <span className="classic-price">UZS 12,000</span>
                </div>

                {/* Masthead */}
                <header className="classic-masthead">
                    <h1 className="classic-masthead-title">The Chronicle</h1>
                    <div className="classic-masthead-rule" />
                    <p className="classic-masthead-tagline">Est. 1924 · Society · Culture · Politics</p>
                </header>

                {/* Main layout: left columns + right portrait */}
                <section className="classic-main">
                    <div className="classic-left">
                        <div className="classic-kicker">COVER STORY</div>
                        <h2 className="classic-headline">The Face of Tomorrow</h2>
                        <p className="classic-subhead">
                            When presence speaks louder than words — a portrait of quiet power in the heart of the city.
                        </p>

                        <div className="classic-byline">By Staff Writer · Tashkent</div>

                        <div className="classic-body">
                            <p>
                                In cafés along Amir Temur Square, a new rhythm emerges: fewer promises, more plans.
                                People are learning that calmness can be a form of strength. The city breathes differently now.
                            </p>
                            <h3 className="classic-subheadline">The Shift</h3>
                            <p>
                                Editors note the change — from seeking approval to building trust through competence.
                                The strongest voices don't chase attention; they perform reliably. Over-communication
                                gives way to clarity.
                            </p>
                            <p>
                                "A person who needs nothing can't be controlled," one observer remarked. Dependence
                                creates leverage; independence creates respect. The moment you can walk away, the
                                negotiation changes.
                            </p>
                            <h3 className="classic-subheadline">What Experts Say</h3>
                            <p>
                                Psychologists point to three signals: rejalar yoziladi, bahonalar kamayadi; "ha" va "yo'q"
                                aniq aytiladi; vaqt eng qimmat resurs sifatida ko'riladi. The trend has a name:
                                "boundaries culture."
                            </p>
                        </div>

                        <div className="classic-pullquote">
                            "Calm is not weakness — it's the luxury of self-contained identity."
                        </div>

                        <div className="classic-factbox">
                            <div className="classic-factbox-title">KEY POINTS</div>
                            <ul>
                                <li>Need creates anxiety; anxiety creates compliance</li>
                                <li>Self-contained identity is the strongest antidote</li>
                                <li>Boundaries, not explanations, build respect</li>
                            </ul>
                        </div>

                        <div className="classic-stats">
                            <div className="classic-stat">
                                <span className="classic-stat-num">3</span>
                                <span className="classic-stat-label">signals of quiet power</span>
                            </div>
                            <div className="classic-stat">
                                <span className="classic-stat-num">12</span>
                                <span className="classic-stat-label">min read</span>
                            </div>
                            <div className="classic-stat">
                                <span className="classic-stat-num">1</span>
                                <span className="classic-stat-label">rule that changes everything</span>
                            </div>
                        </div>

                        <div className="classic-ataglance">
                            <div className="classic-ataglance-title">AT A GLANCE</div>
                            <p>Fewer promises, more plans. Speak less, decide more. The strongest don't chase attention — they perform.</p>
                        </div>

                        <div className="classic-timeline">
                            <span className="classic-timeline-title">THE NUMBERS</span>
                            <span>Approval-seeking ↓ 23% · Boundary-setting ↑ 41% · "Quiet" workplaces: 67% report less stress</span>
                        </div>

                        <div className="classic-briefs">
                            <div className="classic-brief-item">
                                <span className="classic-brief-label">WEATHER</span>
                                <span>Clear, 18°C · Weekend outlook sunny</span>
                            </div>
                            <div className="classic-brief-item">
                                <span className="classic-brief-label">MARKETS</span>
                                <span>USD steady · Local indices up 0.3%</span>
                            </div>
                            <div className="classic-brief-item">
                                <span className="classic-brief-label">TODAY</span>
                                <span>Sunrise 6:42 · Sunset 18:55</span>
                            </div>
                            <div className="classic-brief-item">
                                <span className="classic-brief-label">TRAFFIC</span>
                                <span>Central routes clear · Metro on time</span>
                            </div>
                            <div className="classic-brief-item">
                                <span className="classic-brief-label">CURRENCY</span>
                                <span>USD 12,450 · EUR 13,200</span>
                            </div>
                        </div>
                    </div>

                    <div className="classic-right">
                        <div className="classic-portrait-wrap">
                            <CameraBlock onPhotoCapture={handlePhotoCapture} />
                            <div className="classic-photo-meta">
                                <div className="classic-photo-caption">Portrait · Tashkent 2026</div>
                                <div className="classic-photo-credit">Photo: Staff</div>
                            </div>
                            <div className="classic-photo-extras">
                                <div className="classic-photo-quote">
                                    "The face tells the story — no caption needed."
                                </div>
                                <div className="classic-photo-facts">
                                    <span className="classic-photo-fact-label">IN FOCUS</span>
                                    <span>3:4 · Editorial · B&W</span>
                                </div>
                                <div className="classic-photo-stats">
                                    <span>72 × 100 mm</span>
                                    <span>·</span>
                                    <span>300 DPI</span>
                                </div>
                                <div className="classic-photo-related">
                                    <span className="classic-photo-related-title">RELATED</span>
                                    <span>Quiet Power series · p.A4</span>
                                    <span>Portrait gallery · p.B2</span>
                                    <span>Interview: The photographer · p.C1</span>
                                </div>
                                <div className="classic-photo-tip">
                                    <span className="classic-photo-tip-label">TIP</span>
                                    <span>Best in natural light · Face the window</span>
                                </div>
                                <div className="classic-photo-quote classic-photo-quote-2">
                                    "A portrait that needs no explanation."
                                </div>
                                <div className="classic-photo-note">
                                    This portrait is part of our "Quiet Power" series. See more inside.
                                </div>
                            </div>
                        </div>
                        <div className="classic-right-bottom">
                            <div className="classic-right-fill-title">BEHIND THE LENS</div>
                            <p>Our photographers were instructed to capture "quiet confidence." Three asked what that meant. One still hasn't returned our calls.</p>
                            <p>Natural light preferred. Artificial light acceptable. Existential dread optional.</p>
                            <div className="classic-right-fill-title">READER TIP</div>
                            <p>"I stood by a window. My face looked less tired. Would recommend." — Subscriber, Tashkent</p>
                        </div>
                    </div>
                </section>

                <div className="classic-divider" />

                {/* Bottom teasers */}
                <div className="classic-teasers">
                    <div className="classic-teaser">
                        <span className="classic-teaser-num">A2</span>
                        <span>City Council approves new metro line</span>
                    </div>
                    <div className="classic-teaser">
                        <span className="classic-teaser-num">B1</span>
                        <span>Culture: The rise of "quiet luxury"</span>
                    </div>
                    <div className="classic-teaser">
                        <span className="classic-teaser-num">C3</span>
                        <span>Opinion: Why boundaries matter</span>
                    </div>
                    <div className="classic-teaser">
                        <span className="classic-teaser-num">D4</span>
                        <span>Sports: Local team advances to finals</span>
                    </div>
                    <div className="classic-teaser">
                        <span className="classic-teaser-num">E1</span>
                        <span>Arts: New gallery opens downtown</span>
                    </div>
                    <div className="classic-teaser">
                        <span className="classic-teaser-num">F2</span>
                        <span>Food: Best cafés for quiet work</span>
                    </div>
                </div>

                <footer className="classic-footer">
                    <div className="footer-contact">
                        <span>© 2026 The Chronicle · Printed in Tashkent</span>
                        <span>Contact: editor@chronicle.uz · +998 71 123 45 67 · Amir Temur St. 1, Tashkent</span>
                    </div>
                    <span>Continued on page A2</span>
                </footer>
            </div>
        </NewspaperPage>
    );
}
