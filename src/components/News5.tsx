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
                                <div className="news5-mini-card">
                                    <div className="news5-mini-title">Tahlil</div>
                                    <p>
                                        Ma'qullashga qaramlik — nazoratga eshik. O'zingizni kimningdir "bahosi" bilan
                                        o'lchashni kamaytirsangiz, bosim ham kamayadi. "Hech narsaga muhtoj bo'lmagan odam — hech kim tomonidan boshqarilmaydigan odam."
                                    </p>
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
                            <h4 className="news5-lead-subhead">Mutaxassislar nima deyadi</h4>
                            <p>
                                Rejalar yoziladi, bahonalar kamayadi. "Ha" va "yo'q" aniq aytiladi. Vaqt eng qimmat
                                resurs sifatida ko'riladi. Bu tendensiya "chegaralar madaniyati" deb ataladi.
                            </p>
                            <div className="news5-lead-quote">
                                "Hech narsaga muhtoj bo'lmagan odam — hech kim tomonidan boshqarilmaydigan odam."
                            </div>
                            <p>
                                Tinch kuch — bu amaliyot. Siz bahsda g'alaba qozonish orqali mustahkam bo'lmaysiz.
                                O'zingni boshqarish, cheklovlarni saqlash va vaqtni qadrlash — asosiy belgilar.
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

                        <div className="news5-side-block news5-opinion">
                            <div className="news5-side-title">Sharh</div>
                            <h4>Chegaralar — hurmat asosi</h4>
                            <p>
                                Tushuntirish emas, cheklovlar hurmatni yaratadi. Qisqa javoblar va aniq "yo'q"
                                — kuch belgisi.
                            </p>
                            <div className="news5-quote">
                                "Tinch kuch — shaxsiyat emas, amaliyot."
                            </div>
                        </div>

                        <div className="news5-side-block news5-opinion">
                            <div className="news5-side-title">Xulosa</div>
                            <h4>Vaqt — eng qimmat resurs</h4>
                            <p>
                                Rejalar yoziladi, bahonalar kamayadi. "Ha" va "yo'q" aniq aytiladi.
                                Shahar yangi ritmda nafas olmoqda.
                            </p>
                        </div>
                    </aside>
                </main>

                <div className="news5-bottom">
                    <div className="news5-bottom-col">
                        <p>Ishonchli odam va'dani bajaradi. Tartib — stressni kamaytiradi.</p>
                        <p><strong>O'QUVCHI:</strong> "Deraza yonida — yuzim kamroq charchagan." — Toshkent.</p>
                    </div>
                    <div className="news5-bottom-col">
                        <p>"Bahosi" bilan o'lchashni kamaytirsangiz — bosim kamayadi.</p>
                        <p><strong>REKLAMA:</strong> Tinch kuch A4 · Portret B2 · Davomiy 13A.</p>
                    </div>
                </div>

                <footer className="editorial-footer news5-footer">
                    <div className="footer-contact">
                        <span>© 2026 kun.uz · Axborot xizmat · Tashkent</span>
                        <span>Contact: info@kun.uz · +998 71 200 00 00 · kun.uz · Telegram: @kunuz</span>
                    </div>
                </footer>
            </div>
        </NewspaperPage>
    );
}
