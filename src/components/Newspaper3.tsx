import NewspaperPage from './NewspaperPage';
import CameraBlock from './CameraBlock';
import './NewspaperLayout.css';
import './Newspaper3.css';

export default function Newspaper3() {
    const handlePhotoCapture = (data?: string) => {
        console.log('Photo captured (page3)', data?.slice(0, 64));
    };

    return (
        <NewspaperPage>
            <div className="editorial-page editorial-page3">
                <div className="editorial-meta">
                    <span>Friday, 20 March 2026</span>
                    <span className="editorial-meta-divider">·</span>
                    <span>Tashkent</span>
                    <span className="editorial-meta-divider">·</span>
                    <span>Issue 127</span>
                </div>

                <header className="editorial-masthead editorial-page3-masthead">
                    <div className="page3-rule page3-rule-left" />
                    <h1 className="editorial-title editorial-page3-title">Absolutely Nothing Happened Today</h1>
                    <div className="page3-rule page3-rule-right" />
                </header>

                <div className="page3-divider" />

                <section className="editorial-page3-main">
                    <div className="page3-left">
                        <div className="editorial-page3-hero">
                            <div className="editorial-portrait-frame editorial-page3-portrait">
                                <CameraBlock onPhotoCapture={handlePhotoCapture} />
                                <div className="portrait-caption">Featured · Tashkent 2026</div>
                            </div>
                            <div className="editorial-page3-hero-text-block">
                                <span className="editorial-page3-hero-kicker">PORTRAIT</span>
                                <h3 className="editorial-page3-hero-headline">
                                    When presence speaks louder than words
                                </h3>
                                <p className="editorial-page3-hero-text">
                                    A portrait of quiet power in the heart of the city. In Tashkent's cafés and streets,
                                    a new rhythm emerges: fewer promises, more plans.
                                </p>
                                <ul className="editorial-page3-hero-bullets">
                                    <li>The strongest voices don't chase attention — they perform reliably</li>
                                    <li>Calm isn't weakness; it's independence</li>
                                    <li>Self-contained identity builds trust</li>
                                </ul>
                                <p className="editorial-page3-hero-text">
                                    The city breathes differently now. Editors note the shift — from seeking approval
                                    to building competence. Control is rarely a punch; it's usually a promise kept.
                                </p>
                                <div className="editorial-page3-hero-quote">
                                    "A person who needs nothing can't be controlled."
                                </div>
                            </div>
                        </div>

                        <div className="page3-content-block">
                            <h3 className="page3-subhead">The Idea</h3>
                            <p>
                                Erkaklar ayolning sevgisiga muhtoj emaslar. Bu g'oya ularni zaiflashtirish,
                                doimiy ravishda e'tibor, ma'qullash va tasdiqlashni izlashga majburlash uchun
                                yaratilgan. Ehtiyoj qaramlikni keltirib chiqaradi. Qaramlik nazoratni keltirib chiqaradi.
                            </p>
                            <p>
                                Ma'qullashga muhtoj bo'lgan erkak qadr-qimmatni qulaylik uchun almashtiradi.
                                Kuch tanlanishni so'ramaydi. U o'z ichida to'liq turadi. Hech narsaga muhtoj
                                bo'lmagan odam — hech kim tomonidan boshqarilmaydigan odam.
                            </p>
                            <div className="page3-pullquote">
                                "Sevgi kuchga ergashishi mumkin, lekin u hech qachon uni yengib o'tmasligi kerak."
                            </div>
                            <h3 className="page3-subhead">What Experts Say</h3>
                            <p>
                                Kerakli narsani tortib olish mumkin. Keraksiz narsani qurol sifatida ishlatib bo'lmaydi.
                                The moment you can walk away, the negotiation changes. Calm is not weakness —
                                it's independence. A person who needs nothing can't be controlled.
                            </p>
                        </div>
                    </div>

                    <div className="page3-right">
                        <div className="page3-sidebar-box">
                            <div className="page3-sidebar-title">KEY POINTS</div>
                            <ul>
                                <li>Need creates anxiety; anxiety creates compliance</li>
                                <li>Self-contained identity is the strongest antidote</li>
                                <li>Boundaries, not explanations, build respect</li>
                            </ul>
                        </div>

                        <div className="page3-briefs">
                            <div className="page3-brief">
                                <span className="page3-brief-label">WEATHER</span>
                                <span>Clear, 18°C · Sunny weekend</span>
                            </div>
                            <div className="page3-brief">
                                <span className="page3-brief-label">MARKETS</span>
                                <span>USD steady · Local indices up</span>
                            </div>
                            <div className="page3-brief">
                                <span className="page3-brief-label">TODAY</span>
                                <span>Sunrise 6:42 · Sunset 18:55</span>
                            </div>
                        </div>

                        <div className="page3-teasers">
                            <div className="page3-teaser">
                                <span className="page3-teaser-num">A2</span>
                                <span>City Council approves new metro line</span>
                            </div>
                            <div className="page3-teaser">
                                <span className="page3-teaser-num">B1</span>
                                <span>Culture: The rise of quiet luxury</span>
                            </div>
                            <div className="page3-teaser">
                                <span className="page3-teaser-num">C3</span>
                                <span>Opinion: Why boundaries matter</span>
                            </div>
                        </div>

                        <div className="page3-stats">
                            <div className="page3-stat"><span className="page3-stat-num">3</span><span>signals</span></div>
                            <div className="page3-stat"><span className="page3-stat-num">1</span><span>rule</span></div>
                            <div className="page3-stat"><span className="page3-stat-num">∞</span><span>impact</span></div>
                        </div>

                        <div className="page3-related">
                            <div className="page3-related-title">RELATED</div>
                            <span>Quiet Power series · p.A4</span>
                            <span>Portrait gallery · p.B2</span>
                        </div>

                        <div className="page3-sidebar-fill">
                            <div className="page3-sidebar-title">FROM THE ARCHIVES</div>
                            <p>"The quietest person in the room is either the smartest or forgot their coffee." — 2024</p>
                            <div className="page3-sidebar-title">LETTERS</div>
                            <p>Re: Quiet Power — "I tried saying less. My mother called to check if I was dead." — Reader, Tashkent</p>
                            <div className="page3-sidebar-title">FINAL THOUGHT</div>
                            <p>Calm isn't a personality. It's practice. Or exhaustion. We're still running tests.</p>
                        </div>
                    </div>
                </section>

                <div className="page3-bottom-text">
                    <p>
                        In Tashkent's cafés, a new rhythm emerges: fewer promises, more plans. People are learning
                        that calmness can be a form of strength. The city breathes differently now. Editors note the
                        shift — from seeking approval to building trust through competence. The strongest voices
                        don't chase attention; they perform reliably.
                    </p>
                    <p>
                        Control is rarely a punch; it's usually a promise. "If you behave, you'll be accepted." The
                        strongest antidote is self-contained identity: you know your values, you move accordingly,
                        and you stop negotiating your core. Independence doesn't mean loneliness. It means you're
                        not for sale. Continued on page 13A.
                    </p>
                </div>

                <footer className="editorial-footer editorial-page3-footer">
                    <div className="footer-contact">
                        <span>© 2026 · Tashkent · UZS 12 000</span>
                        <span>Contact: editor@chronicle.uz · +998 71 123 45 67 · Amir Temur St. 1</span>
                    </div>
                </footer>
            </div>
        </NewspaperPage>
    );
}
