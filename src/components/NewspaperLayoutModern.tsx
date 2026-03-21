import NewspaperPage from './NewspaperPage';
import CameraBlock from './CameraBlock';
import './NewspaperLayout.css';
import './Modern.css';

export default function NewspaperLayoutModern() {
    const handlePhotoCapture1 = (data?: string) => {
        console.log('Photo captured (modern main)', data?.slice(0, 64));
    };

    const handlePhotoCapture2 = (data?: string) => {
        console.log('Photo captured (modern secondary)', data?.slice(0, 64));
    };

    return (
        <NewspaperPage>
            <div className="modern-page modern-onion-style">
                {/* Header: date left, tagline center, edition+price right */}
                <div className="modern-header-bar">
                    <span className="modern-header-date">Monday, March 20, 2026</span>
                    <div className="modern-header-center">
                        <div className="modern-header-line" />
                        <span className="modern-header-tagline">FINEST NEWS SOURCE</span>
                        <div className="modern-header-line" />
                    </div>
                    <span className="modern-header-right">LATE EDITION ★★★ 12,000 UZS</span>
                </div>

                {/* Masthead */}
                <header className="modern-masthead">
                    <h1 className="modern-logo">THE CHRONICLE</h1>
                </header>

                {/* Hero: massive headline + subheadline */}
                <div className="modern-hero">
                    <h2 className="modern-hero-headline">HOLY SHIT</h2>
                    <h3 className="modern-hero-subhead">MAN WALKS ON THE MOON</h3>
                </div>

                {/* Main body: 2fr left, 1fr right */}
                <section className="modern-main">
                    <div className="modern-left-col">
                        {/* Main image */}
                        <div className="modern-main-image">
                            <div className="modern-portrait-wrap modern-portrait-main">
                                <CameraBlock onPhotoCapture={handlePhotoCapture1} />
                            </div>
                            <p className="modern-caption">Above: Portrait on the surface of Tashkent. March 2026.</p>
                        </div>

                        {/* Transcript-style text in two columns */}
                        <div className="modern-transcript">
                            <div className="modern-transcript-col">
                                <p><strong>EDITOR:</strong> The image speaks for itself. No caption needed.</p>
                                <p><strong>READER:</strong> I just stared for five minutes. What does it mean?</p>
                                <p><strong>PHOTOGRAPHER:</strong> That's the point. No explanation required.</p>
                            </div>
                            <div className="modern-transcript-col">
                                <p><strong>PHOTOGRAPHER:</strong> Natural light. One take. That's it.</p>
                                <p><strong>EDITOR:</strong> Mission accomplished. Print it.</p>
                                <p><strong>READER:</strong> I'm buying three copies. One for the wall.</p>
                            </div>
                        </div>

                        {/* Inline factbox + briefs */}
                        <div className="modern-inline-extras">
                            <div className="modern-fact-inline">
                                <span className="modern-fact-inline-label">AT A GLANCE</span>
                                <span>3 signals · 12 min read · 1 rule that changes everything</span>
                            </div>
                            <div className="modern-briefs-row">
                                <span><strong>WEATHER:</strong> Clear 18°C</span>
                                <span><strong>MARKETS:</strong> USD steady</span>
                                <span><strong>TODAY:</strong> Sunrise 6:42</span>
                            </div>
                        </div>
                    </div>

                    <div className="modern-right-col">
                        {/* Second camera — right column */}
                        <div className="modern-right-camera">
                            <div className="modern-portrait-wrap modern-portrait-right">
                                <CameraBlock onPhotoCapture={handlePhotoCapture2} />
                            </div>
                            <p className="modern-caption">Alternate angle · Same subject · B&W</p>
                        </div>
                        <h4 className="modern-side-headline">HISTORIC FIRST WORDS: "THE FACE TELLS THE STORY"</h4>
                        <div className="modern-article-cols">
                            <p>
                                The wall has never felt this confident before. An ordinary surface became
                                "intellectual" after receiving this morning's edition. Visitors nodded silently.
                            </p>
                            <p>
                                No one actually read the text, but everyone respected it. The central image
                                adds mystery. Editors confirmed it "means something." Readers spent more time
                                staring than reading.
                            </p>
                            <p>
                                In Tashkent's cafés, a new visual language emerges: fewer filters, more presence.
                                The trend has a name — "quiet luxury" — and it starts with the face.
                            </p>
                            <p>
                                "A person who needs nothing can't be controlled," one observer remarked.
                                Dependence creates leverage; independence creates respect.
                            </p>
                        </div>
                        {/* Editorial callout box — bottom right */}
                        <div className="modern-editorial-box">
                            <p className="modern-editorial-quote">"WE CAN PUT A MAN ON THE MOON, BUT WE CAN'T STOP SEEKING APPROVAL?"</p>
                            <span className="modern-editorial-ref">Editorial, page 13A</span>
                        </div>
                    </div>
                </section>

                {/* Bottom: full-width text filling the page */}
                <div className="modern-bottom-text">
                    <div className="modern-bottom-col">
                        <p>
                            The moment you can walk away, the negotiation changes. Calm is not weakness —
                            it's the luxury of self-contained identity. Psychologists point to three signals:
                            plans get written down, excuses fade; "yes" and "no" are said clearly; time is
                            treated as the most valuable resource.
                        </p>
                        <p>
                            In offices and classrooms, the loudest conflict isn't always anger — it's attention.
                            When approval becomes currency, people trade long-term goals for short-term comfort.
                            The strongest employees don't chase attention; they build trust through competence.
                        </p>
                        <p>
                            They don't "prove" themselves daily; they perform reliably. In Tashkent, cafés are
                            full but conversations sound different: fewer promises, more plans. People are
                            learning that calmness can be a form of strength.
                        </p>
                    </div>
                    <div className="modern-bottom-col">
                        <p>
                            A simple habit is spreading: speak less, decide more. Some call it "coldness."
                            Others call it discipline — a refusal to negotiate your self-respect. Need creates
                            anxiety. Anxiety creates compliance. Compliance becomes a tool others can use.
                        </p>
                        <p>
                            Control is rarely a punch; it's usually a promise. "If you behave, you'll be
                            accepted." The strongest antidote is self-contained identity: you know your values,
                            you move accordingly, and you stop negotiating your core.
                        </p>
                        <p>
                            Independence doesn't mean loneliness. It means you're not for sale: you can cooperate
                            without begging, and you can say "no" without drama. Continued on page 13A.
                        </p>
                    </div>
                    <div className="modern-bottom-sidebar">
                        <div className="modern-bottom-sidebar-title">INSIDE TODAY</div>
                        <ul>
                            <li>A2: City Council approves metro line</li>
                            <li>B1: Quiet luxury — the new power move</li>
                            <li>C3: Opinion: Why boundaries matter</li>
                            <li>D4: Portrait gallery · p.12</li>
                        </ul>
                        <div className="modern-bottom-sidebar-quote">"Hech narsaga muhtoj bo'lmagan odam — hech kim tomonidan boshqarilmaydigan odam."</div>
                    </div>
                </div>

                <footer className="modern-footer">
                    <div className="footer-contact">
                        <span>© 2026 The Chronicle · Printed in Tashkent</span>
                        <span>Contact: editor@chronicle.uz · +998 71 123 45 67 · chronicle.uz</span>
                    </div>
                </footer>
            </div>
        </NewspaperPage>
    );
}
