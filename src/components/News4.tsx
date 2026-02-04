import NewspaperPage from './NewspaperPage';
import CameraBlock from './CameraBlock';
import './News4.css';

export default function NewspaperLayoutAlt() {
    const handlePhotoCapture = (data?: string) => {
        console.log('Photo captured (alt v3)', data?.slice(0, 64));
    };

    return (
        <NewspaperPage>
            <div className="newspage-alt2">
                {/* TOP BAR */}
                <div className="alt2-topbar">
                    <span>Issue 041 • Vol. 7</span>
                    <span>International Edition</span>
                    <span>UZS 12 000</span>
                    <span>Tashkent • Clear • 18°C</span>
                </div>

                {/* HEADER */}
                <header className="alt2-header">
                    <div className="alt2-kicker">22 January 2026</div>
                    <h1 className="alt2-title">The Daily Chronicle</h1>
                    <div className="alt2-rule" />
                    <div className="alt2-subline">
                        Independent reporting • Society • Culture • Work • Psychology
                    </div>
                </header>

                {/* MAIN GRID */}
                <section className="alt2-main">
                    {/* BRIEFS */}
                    <aside className="alt2-briefs">
                        <h3 className="alt2-section-title">Briefs</h3>

                        <div className="alt2-brief">
                            <h4>Work & Boundaries</h4>
                            <p>
                                In offices and classrooms, the loudest conflict isn’t always anger — it’s
                                attention. When approval becomes currency, people trade long-term goals
                                for short-term comfort.
                            </p>
                        </div>

                        <div className="alt2-brief">
                            <h4>Social Signals</h4>
                            <p>
                                A simple habit is spreading: speak less, decide more. Some call it
                                “coldness.” Others call it discipline — a refusal to negotiate your
                                self-respect.
                            </p>
                        </div>

                        <div className="alt2-brief">
                            <h4>City Pulse</h4>
                            <p>
                                In Tashkent, cafés are full, but conversations sound different: fewer
                                promises, more plans. People are learning that calmness can be a form of
                                strength.
                            </p>
                        </div>

                        <div className="alt2-brief-divider" />

                        <div className="alt2-quote">
                            <p>
                                “A person who needs nothing can’t be controlled. Dependence creates leverage.”
                            </p>
                            <span>— Today’s theme</span>
                        </div>
                    </aside>

                    {/* HERO */}
                    <div className="alt2-hero">
                        <div className="alt2-hero-media">
                            <CameraBlock onPhotoCapture={handlePhotoCapture} />
                        </div>

                        <div className="alt2-hero-head">
                            <h2>
                                Power, <span>Silence</span> <br /> &amp; Control
                            </h2>
                            <p>
                                Not all strength looks like aggression. Sometimes it looks like a person
                                who stops explaining. When you’re not begging for approval, you stop
                                giving other people the steering wheel.
                            </p>
                        </div>

                        <div className="alt2-hero-bottom">
                            <div className="alt2-stats">
                                <div>
                                    <strong>3</strong>
                                    <span>moves</span>
                                </div>
                                <div>
                                    <strong>2</strong>
                                    <span>habits</span>
                                </div>
                                <div>
                                    <strong>1</strong>
                                    <span>rule</span>
                                </div>
                            </div>

                            <div className="alt2-pull">
                                <h4>Key idea</h4>
                                <p>
                                    The moment you “need” someone’s validation, you become easy to manage.
                                    The moment you can walk away, the negotiation changes. Calm is not
                                    weakness — it’s independence.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <aside className="alt2-sidebar">
                        <h3 className="alt2-section-title">Editor’s Column</h3>

                        <div className="alt2-box">
                            <h4>The approval trap</h4>
                            <p>
                                Many people don’t fear failure — they fear being disliked. That fear
                                turns into people-pleasing: extra messages, extra explanations, extra
                                apologies. It feels “kind,” but it slowly replaces dignity with comfort.
                            </p>
                        </div>

                        <div className="alt2-box">
                            <h4>How control works</h4>
                            <p>
                                Control is rarely a punch; it’s usually a promise. “If you behave, you’ll
                                be accepted.” The strongest antidote is self-contained identity: you know
                                your values, you move accordingly, and you stop negotiating your core.
                            </p>
                        </div>

                        <div className="alt2-minihead">Today’s sections</div>
                        <ul className="alt2-list">
                            <li>Society — independence &amp; respect</li>
                            <li>Work — boundaries &amp; attention</li>
                            <li>Culture — calm as style</li>
                            <li>Psychology — why we chase approval</li>
                        </ul>
                    </aside>
                </section>

                {/* LOWER COLUMNS */}
                <section className="alt2-columns">
                    <article className="alt2-col">
                        <h3>Society</h3>
                        <p>
                            Respect becomes unstable when it depends on mood. A person who changes
                            their plan because they fear rejection hands their power away. Over time,
                            this creates
                        </p>
                        <p className="alt2-paragraph">
                            Independence doesn’t mean loneliness. It means you’re not for sale: you
                            can cooperate without begging, and you can say “no” without drama.
                        </p>
                    </article>

                    <article className="alt2-col">
                        <h3>Work</h3>
                        <p>
                            In teams, approval-seeking shows up as over-communication: constant
                            checking,
                        </p>
                        <p className="alt2-paragraph">
                            The strongest employees don’t chase attention — they build trust through
                            competence. They don’t “prove” themselves daily; they perform reliably.
                        </p>
                    </article>

                    <article className="alt2-col">
                        <h3>Psychology</h3>
                        <p>
                            Need creates anxiety. Anxiety creates compliance. Compliance becomes a
                            tool others can use. That’s why your first discipline is internal: learn
                            to tolerate
                        </p>
                        <p className="alt2-paragraph">
                            Calm isn’t a personality — it’s practice. You don’t become unshakeable by
                            winning arguments
                        </p>
                    </article>
                </section>

                {/* FOOTER */}

            </div>
        </NewspaperPage>
    );
}
