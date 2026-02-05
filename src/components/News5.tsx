
import NewspaperPage from './NewspaperPage';
import CameraBlock from './CameraBlock';
import './News5.css';

export default function News5() {
    const handlePhotoCapture = (data?: string) => {
        console.log('Photo captured (news5)', data?.slice(0, 64));
    };

    return (
        <NewspaperPage>
            <div className="news5">
                {/* TOP STRIP */}
                <div className="news5-topstrip">
                    <div className="news5-top-left">
                        <span className="news5-badge-live">LIVE</span>
                        <span className="news5-top-item">Toshkent • 22-yanvar, 2026</span>
                    </div>
                    <div className="news5-top-right">
                        <span className="news5-top-item">USD: 12 4xx</span>
                        <span className="news5-top-item">EUR: 13 5xx</span>
                        <span className="news5-top-item">Ob-havo: +18°C</span>
                    </div>
                </div>

                {/* BRAND / NAV */}
                <header className="news5-header">
                    <div className="news5-brand">
                        <div className="news5-logo">kun<span>.uz</span></div>
                        <div className="news5-tagline">O‘zbekiston va jahon yangiliklari • tezkor • ishonchli</div>
                    </div>

                    <nav className="news5-nav">
                        <span>O‘zbekiston</span>
                        <span>Jahon</span>
                        <span>Jamiyat</span>
                        <span>Sport</span>
                        <span>Texnologiya</span>
                        <span>Biznes</span>
                        <span>Media</span>
                    </nav>
                </header>

                {/* MAIN GRID */}
                <main className="news5-main">
                    {/* LEFT: LEAD */}
                    <section className="news5-lead">
                        <div className="news5-lead-top">
                            <div className="news5-lead-kicker">KUN MAVZUSI</div>
                            <h1 className="news5-lead-title">
                                Toshkentda “tinch kuch” trendi: odamlar kam gapirib, ko‘proq natija ko‘rsata boshladi
                            </h1>
                            <p className="news5-lead-sub">
                                Mutaxassislar buni “chegaralar madaniyati” deya atamoqda: ma’qullash izlash kamayadi,
                                aniq rejalar va tartib esa ko‘payadi.
                            </p>
                        </div>

                        <div className="news5-lead-media">
                            <div className="news5-media-frame">
                                <CameraBlock onPhotoCapture={handlePhotoCapture} />
                                <div className="news5-caption">
                                    Surat: shahar ritmi — tezlik emas, tartibni tanlayotganlar ko‘paymoqda.
                                </div>
                            </div>

                            <div className="news5-lead-bullets">
                                <div className="news5-mini-card">
                                    <div className="news5-mini-title">Tezkor izoh</div>
                                    <p>
                                        “O‘zini isbotlash” uchun kun bo‘yi yozishmalarda qolish — charchatadi. Qisqa, aniq,
                                        natijaga yo‘naltirilgan muloqot esa ishonchni oshiradi.
                                    </p>
                                </div>

                                <div className="news5-mini-card">
                                    <div className="news5-mini-title">3 ta belgi</div>
                                    <ul>
                                        <li>rejalar yoziladi, bahonalar kamayadi</li>
                                        <li>“ha” va “yo‘q” aniq aytiladi</li>
                                        <li>vaqt — eng qimmat resurs sifatida ko‘riladi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="news5-lead-text">
                            <p>
                                Shahar muhitida eng katta kurash shovqin bilan bo‘lmaydi — e’tibor bilan bo‘ladi. Kimdir
                                doimiy tasdiq izlaganda, u o‘z qadriyatini “qulaylik” evaziga sotib yuboradi. Natijada
                                rejalardan voz kechish, kechirim so‘rashni odat qilish va “hamma yoqsin” degan ichki bosim
                                kuchayadi.
                            </p>
                            <p>
                                “Tinch kuch” degani sovuqqonlik emas. Bu — o‘zingni boshqarish. Biror narsani isbotlash
                                uchun emas, o‘zing belgilagan standartlar uchun ishlash. Bunday odam kam gapiradi, ammo
                                barqaror natija beradi.
                            </p>
                        </div>

                        {/* 2-COL ARTICLES */}
                        <div className="news5-two-col">
                            <article className="news5-article">
                                <h3>Jamiyat: “yoqimli” bo‘lish va “ishonchli” bo‘lish farqi</h3>
                                <p>
                                    Ko‘pchilik rad etilishdan qo‘rqadi. Shuning uchun ma’qullash izlash — odatiy hol. Ammo
                                    ishonchli odam doimiy “yoqishga” urinmaydi: u va’dani bajaradi, cheklovni saqlaydi, vaqtni
                                    qadrlaydi.
                                </p>

                            </article>

                            <article className="news5-article">
                                <h3>Ish: natijaga yo‘naltirilgan muloqot qanday quriladi?</h3>
                                <p>
                                    Jamoada tartib bo‘lsa, stress kamayadi. Xabarlar qisqa, vazifalar aniq bo‘lsa, kimdir
                                    “meni ko‘rishsin” deb emas, ishni yopish uchun harakat qiladi. Bu esa ham sifat, ham tezlikni
                                    oshiradi.
                                </p>

                            </article>
                        </div>
                    </section>

                    {/* RIGHT: SIDEBAR */}
                    <aside className="news5-side">
                        <div className="news5-side-block">
                            <div className="news5-side-title">So‘nggi yangiliklar</div>

                            <div className="news5-item">
                                <div className="news5-time">09:40</div>
                                <div className="news5-head">Transport oqimi: markazda yangi tartiblar sinovdan o‘tmoqda</div>
                            </div>
                            <div className="news5-item">
                                <div className="news5-time">10:05</div>
                                <div className="news5-head">Elektr energiyasi: tejamkor texnologiyalar bo‘yicha yangi dastur</div>
                            </div>
                            <div className="news5-item">
                                <div className="news5-time">10:30</div>
                                <div className="news5-head">Ta’lim: amaliy ko‘nikmalarni baholash tizimi kengaymoqda</div>
                            </div>
                        </div>

                        <div className="news5-side-block news5-opinion">
                            <div className="news5-side-title">Tahlil</div>
                            <h4>Ma’qullashga qaramlik — nazoratga eshik</h4>
                            <p>
                                Ehtiyoj qaramlikni keltirib chiqaradi. Qaramlik nazoratni keltirib chiqaradi. O‘zingizni
                                kimningdir “bahosi” bilan o‘lchashni kamaytirsangiz, bosim ham kamayadi.
                            </p>
                            <div className="news5-quote">
                                “Hech narsaga muhtoj bo‘lmagan odam — hech kim tomonidan boshqarilmaydigan odam.”
                            </div>
                        </div>

                        <div className="news5-side-block news5-brief-grid">
                            <div className="news5-side-title">Bugun raqamlarda</div>
                            <div className="news5-stat">
                                <strong>3</strong>
                                <span>asosiy qoida</span>
                            </div>
                            <div className="news5-stat">
                                <strong>12</strong>
                                <span>daqiqalik o‘qish</span>
                            </div>
                            <div className="news5-stat">
                                <strong>1</strong>
                                <span>katta g‘oya</span>
                            </div>
                        </div>
                    </aside>
                </main>

                {/* FOOTER */}
                <footer className="news5-footer">
                    <div className="news5-footer-left">
                        <span>kun.uz</span>
                        <span>•</span>
                        <span>Axborot xizmat</span>
                        <span>•</span>
                        <span>reklama: media@kun.uz</span>
                    </div>
                    <div className="news5-footer-right">© 2026</div>
                </footer>
            </div>
        </NewspaperPage>
    );
}
