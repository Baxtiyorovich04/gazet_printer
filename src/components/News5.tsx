import NewspaperPage from './NewspaperPage';
import CameraBlock from './CameraBlock';
import './NewspaperLayout.css';
import './News5.css';

export default function News5() {
    const handlePhotoCapture = (data?: string) => {
        console.log('Photo captured (news5)', data?.slice(0, 64));
    };

    return (
        <NewspaperPage>
            <div className="editorial-page editorial-news5">
                <div className="news5-topstrip">
                    <div className="news5-top-left">
                        <span className="news5-badge">COLLECTOR'S EDITION</span>
                        <span>Tashkent · 20 March 2026</span>
                    </div>
                    <div className="news5-top-right">
                        <span>USD: 12 4xx</span>
                        <span>Ob-havo: +18°C</span>
                    </div>
                </div>

                <header className="news5-header">
                    <div className="news5-brand">
                        <h1 className="news5-logo">KUN<span>.UZ</span></h1>
                        <p className="news5-tagline">O'zbekiston va jahon yangiliklari · tezkor · ishonchli</p>
                    </div>
                </header>

                <main className="news5-main">
                    <section className="news5-lead">
                        <div className="news5-lead-top">
                            <span className="news5-lead-kicker">KUN MAVZUSI</span>
                            <h2 className="news5-lead-title">
                                Toshkentda "tinch kuch" trendi: odamlar kam gapirib, ko'proq natija ko'rsata boshladi
                            </h2>
                            <p className="news5-lead-sub">
                                Mutaxassislar buni "chegaralar madaniyati" deya atamoqda: ma'qullash izlash kamayadi,
                                aniq rejalar va tartib esa ko'payadi.
                            </p>
                        </div>

                        <div className="news5-lead-media">
                            <div className="news5-media-frame">
                                <div className="editorial-portrait-frame news5-portrait">
                                    <CameraBlock onPhotoCapture={handlePhotoCapture} />
                                    <div className="portrait-caption">Surat: shahar ritmi — Tashkent 2026</div>
                                </div>
                            </div>

                            <div className="news5-lead-bullets">
                                <div className="news5-mini-card">
                                    <div className="news5-mini-title">Tezkor izoh</div>
                                    <p>
                                        "O'zini isbotlash" uchun kun bo'yi yozishmalarda qolish — charchatadi.
                                        Qisqa, aniq, natijaga yo'naltirilgan muloqot esa ishonchni oshiradi.
                                    </p>
                                </div>
                                <div className="news5-mini-card">
                                    <div className="news5-mini-title">3 ta belgi</div>
                                    <ul>
                                        <li>rejalar yoziladi, bahonalar kamayadi</li>
                                        <li>"ha" va "yo'q" aniq aytiladi</li>
                                        <li>vaqt — eng qimmat resurs sifatida ko'riladi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="news5-lead-text">
                            <p>
                                Shahar muhitida eng katta kurash shovqin bilan bo'lmaydi — e'tibor bilan bo'ladi.
                                Kimdir doimiy tasdiq izlaganda, u o'z qadriyatini "qulaylik" evaziga sotib yuboradi.
                            </p>
                            <p>
                                "Tinch kuch" degani sovuqqonlik emas. Bu — o'zingni boshqarish. Biror narsani
                                isbotlash uchun emas, o'zing belgilagan standartlar uchun ishlash.
                            </p>
                        </div>
                    </section>

                    <aside className="news5-side">
                        <div className="news5-side-block">
                            <div className="news5-side-title">So'nggi yangiliklar</div>
                            <div className="news5-item">
                                <span className="news5-time">09:40</span>
                                <span className="news5-head">Transport oqimi: markazda yangi tartiblar</span>
                            </div>
                            <div className="news5-item">
                                <span className="news5-time">10:05</span>
                                <span className="news5-head">Elektr energiyasi: tejamkor texnologiyalar</span>
                            </div>
                            <div className="news5-item">
                                <span className="news5-time">10:30</span>
                                <span className="news5-head">Ta'lim: amaliy ko'nikmalarni baholash</span>
                            </div>
                        </div>

                        <div className="news5-side-block news5-opinion">
                            <div className="news5-side-title">Tahlil</div>
                            <h4>Ma'qullashga qaramlik — nazoratga eshik</h4>
                            <p>
                                Ehtiyoj qaramlikni keltirib chiqaradi. O'zingizni kimningdir "bahosi" bilan
                                o'lchashni kamaytirsangiz, bosim ham kamayadi.
                            </p>
                            <div className="news5-quote">
                                "Hech narsaga muhtoj bo'lmagan odam — hech kim tomonidan boshqarilmaydigan odam."
                            </div>
                        </div>
                    </aside>
                </main>

                <footer className="editorial-footer news5-footer">
                    <div className="editorial-footer-left">
                        <span>kun.uz</span>
                        <span>·</span>
                        <span>Axborot xizmat</span>
                        <span>·</span>
                        <span>Tashkent</span>
                    </div>
                    <div className="editorial-footer-right">© 2026</div>
                </footer>
            </div>
        </NewspaperPage>
    );
}
