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
            <div className="editorial-page editorial-news4 news4-textured">
                <div className="news4-topbar">
                    <span>Issue 041 · Vol. 7</span>
                    <span>International Edition</span>
                    <span>UZS 12 000</span>
                    <span>Tashkent · 20 March 2026</span>
                </div>

                <header className="news4-header">
                    <div className="news4-kicker">22 January 2026 · LATE EDITION</div>
                    <h1 className="news4-title">The Daily Chronicle</h1>
                    <div className="news4-rule" />
                    <div className="news4-subline">
                        "We report. You decide. Or don't. We're not your boss."
                    </div>
                </header>

                <section className="news4-main">
                    <aside className="news4-briefs">
                        <h3 className="news4-section-title">Briefs</h3>
                        <div className="news4-brief">
                            <h4>Work & Boundaries</h4>
                            <p>When approval becomes currency, people trade long-term goals for short-term comfort. One employee was seen saying "no" and surviving. Scientists baffled.</p>
                        </div>
                        <div className="news4-brief">
                            <h4>City Pulse</h4>
                            <p>In Tashkent, cafés are full, but conversations sound different: fewer promises, more plans. "It's like everyone took a vow of silence," said one confused tourist.</p>
                        </div>
                        <div className="news4-brief">
                            <h4>Weather</h4>
                            <p>Sunny. Again. Meteorologists running out of adjectives. "We've used 'pleasant' 47 times this week," admits forecaster.</p>
                        </div>
                        <div className="news4-quote">
                            <p>"A person who needs nothing can't be controlled. Dependence creates leverage. Also, we're out of coffee."</p>
                            <span>— Today's theme · Break room, 10:47 AM</span>
                        </div>
                    </aside>

                    <div className="news4-hero">
                        <div className="editorial-portrait-frame news4-portrait">
                            <CameraBlock onPhotoCapture={handlePhotoCapture} />
                            <div className="portrait-caption">Cover · "I did not consent to this" · Tashkent 2026</div>
                        </div>
                        <div className="news4-hero-head">
                            <h2>Power, <em>Silence</em> &amp; Control</h2>
                            <p>
                                Not all strength looks like aggression. Sometimes it looks like a person
                                who stops explaining. When you're not begging for approval, you stop
                                giving other people the steering wheel. Or so we're told. We're still
                                waiting for our turn.
                            </p>
                        </div>
                    </div>

                    <aside className="news4-sidebar">
                        <h3 className="news4-section-title">Editor's Column</h3>
                        <div className="news4-box">
                            <h4>The approval trap</h4>
                            <p>Many people don't fear failure — they fear being disliked. That fear turns into people-pleasing, extra emojis, and saying "sorry" when someone bumps into you. It's a whole thing.</p>
                        </div>
                        <div className="news4-box">
                            <h4>How control works</h4>
                            <p>Control is rarely a punch; it's usually a promise. "If you behave, you'll be accepted." The strongest antidote? Self-contained identity. Or a good nap. We're still testing.</p>
                        </div>
                        <div className="news4-box news4-box-funny">
                            <h4>Today's Horoscope</h4>
                            <p>You will receive unexpected news. It might be this newspaper. The stars are vague like that.</p>
                        </div>
                        <div className="news4-mini-list">
                            <span className="news4-mini-title">INSIDE</span>
                            <span>A2: Man says "no" — survives</span>
                            <span>B1: Cafés report quieter customers</span>
                            <span>C3: Opinion: Try not explaining</span>
                        </div>
                    </aside>
                </section>

                <div className="news4-bottom">
                    <div className="news4-bottom-col">
                        <p>
                            The moment you can walk away, the negotiation changes. Calm is not weakness —
                            it's the luxury of self-contained identity. Or it's exhaustion. Hard to tell sometimes.
                            Psychologists point to three signals: plans get written, excuses fade, and "yes"/"no"
                            are said clearly. We're still working on the "no" part.
                        </p>
                        <p>
                            In offices, the loudest conflict isn't anger — it's attention. When approval becomes
                            currency, people trade goals for comfort. The strongest employees don't chase attention;
                            they build trust. They also take longer lunch breaks. Correlation? We report, you decide.
                        </p>
                        <p>
                            <em>Editor's note:</em> This article was written in a café. The person next to us
                            said nothing for two hours. We're calling it research. The coffee was good. Three stars.
                        </p>
                        <p>
                            <strong>WHAT WE LEARNED:</strong> Saying "no" to one meeting freed up 47 minutes.
                            Saying "no" to explaining yourself freed up your entire afternoon. Your mileage may vary.
                            We're not your life coach. We're a newspaper.
                        </p>
                    </div>
                    <div className="news4-bottom-col">
                        <p>
                            A simple habit is spreading: speak less, decide more. Some call it "coldness."
                            Others call it discipline. We call it "finally, some peace and quiet." Need creates
                            anxiety. Anxiety creates compliance. Compliance creates very long meetings.
                        </p>
                        <p>
                            Control is rarely a punch; it's usually a promise. The strongest antidote is
                            self-contained identity. Or leaving the group chat. Both work.
                        </p>
                        <p>
                            <strong>Correction:</strong> Yesterday we wrote "fewer promises." A reader wrote in
                            to say they preferred "less promises." We're not changing it. Grammar wins. Continued on page 13A.
                        </p>
                        <p>
                            <strong>CLASSIFIED:</strong> Lost: one ability to care what people think. Last seen near
                            Amir Temur Square. Reward: peace of mind. Contact: your local boundaries workshop.
                        </p>
                    </div>
                    <div className="news4-bottom-col news4-bottom-extra">
                        <div className="news4-textured-note">
                            <span className="news4-note-label">FROM THE ARCHIVES</span>
                            <p>"The quietest person in the room is either the smartest or the one who forgot their coffee." — 2024</p>
                        </div>
                        <div className="news4-textured-note">
                            <span className="news4-note-label">LETTERS</span>
                            <p>Re: "Quiet Power" — "I tried saying less. My mother called to check if I was dead." — Reader, Tashkent</p>
                        </div>
                        <div className="news4-textured-note">
                            <span className="news4-note-label">FINAL THOUGHT</span>
                            <p>If you've read this far, you either care deeply or have nothing better to do. Either way, thanks. We needed the engagement.</p>
                        </div>
                    </div>
                </div>

                <footer className="editorial-footer news4-footer">
                    <div className="footer-contact">
                        <span>© 2026 The Daily Chronicle · Tashkent · No refunds. We tried.</span>
                        <span>Contact: editor@dailychronicle.uz · +998 71 234 56 78 · Navoi St. 15 · dailychronicle.uz</span>
                    </div>
                </footer>
            </div>
        </NewspaperPage>
    );
}
