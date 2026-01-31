import CameraBlock from './CameraBlock';
import PrintButton from './PrintButton';
import './NewspaperLayout.css';

export default function NewspaperLayout() {
    // const today = new Date();
    // const dateString = today.toLocaleDateString('uz-UZ', {
    //     weekday: 'long',
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric',
    // });

    const handlePhotoCapture = () => {
        // Photo is captured and displayed in camera block
        console.log('Суратча олинди');
    };

    return (
        <div className="newspaper-wrapper">
            <PrintButton />

            <article className="newspaper">
                {/* MASTHEAD */}
                <hr className="masthead-divider" />
                <hr className="masthead-divider" />
                <header className="masthead">
                    <h1 className='masthead-title'>world news herald</h1>

                    {/* <div className="masthead-top">
                        <div className="price-left">НАРХ: 1 СУМ</div>
                        <h1 className="masthead-title">ЎЗБЕКИСТОН ГАЗЕТА</h1>
                        <div className="edition-right">Ўр. 1890</div>
                    </div>
                    <div className="masthead-subtitle">Янгиликлар, Фактлар ва Мулохазалар Журнали</div>
                    <div className="masthead-details">
                        <span>{dateString}</span>
                        <span className="edition">15-сон</span>
                    </div> */}
                </header>
                <h2 className='masthead-subtitle'>Around the world</h2>



                {/* CONTENT GRID */}
                <div className="content-grid">
                    {/* LEFT COLUMN */}
                    <div className="column left-column">
                        <h3 className="left-column-heading">ХАБАРЛАР</h3>
                        <h2 className='left-column-heading2'>DOLOR</h2>
                        <img className='left-cloumn-img' src="./plane.svg" alt="" />
                        <p>
                            Мамлакатнинг турли вилояларидан замонавий ишловер ва технология сохасидаги
                            муҳим хабарлар келмоқда. Иқтисодий ўсиш ва саноат сектори ривожланиши турли
                            синф ва маҳсулотчилар орасида оптимизмни келтириб чиқмоқда.
                        </p>
                        <p>
                            Транспорт хизматлари йўл тўлақонда 20% ортиқлашди. Ишчи сўврали корхоналар
                            энергия тежашлик технологияларини қўллап, самарадорликни ошириб бермоқда.
                        </p>

                        {/* <h3 className="section-heading" style={{ marginTop: '1.5rem' }}>
                            СПОРТ ЯНГИЛИКЛАРИ
                        </h3>
                        <p>
                            Фаврал ойида мамлакат чемпионатлари бошланади. Қўқон ва Маргилон шахарларида
                            қўролли спорт турнирлари ўтказилади. Спорт клублари ҳозирги вақтда
                            янги имкониятлар ясовчи залларни қуриб бермоқда.
                        </p>

                        <h3 className="section-heading" style={{ marginTop: '1.5rem' }}>
                            ЖАМИЯТНИНГ ҚАРШИ АДАБЛАРИ
                        </h3>
                        <p>
                            Биргуна салтанатпўлак мадамннинг бағри махсус зиёфати фаврал ойида бўлиб
                            ўтди. Мамлакатнинг олий чинор сўвиларидан меҳмонлар келишиб, шодиёни ахвол
                            қўйнида сўнмоқда.
                        </p> */}
                    </div>

                    {/* CENTER COLUMN */}
                    <div className="column center-column">

                        {/* CAMERA/PHOTO BLOCK */}
                        <CameraBlock onPhotoCapture={handlePhotoCapture} />
                        <h2 className="main-headline">
                            CONSECTETUR
                            ADIPISCING
                        </h2>

                        <p >
                            Юқоридаги сурат замонавий давр йилариғдаги қадр қилиш лаёқатга эга. Сўратчилик
                            услубидан фойдаланиб, кўринишларини оддий қўлан-қўл қўлланилайдиганидан
                            ўзгартириб, худди сўнги яширинчалик сақланиб қоладилар бўлди.
                            Ўлимлар ой қўлтиқлар эса қизиқарли жамиятга янги жараён килишибди ўтмасалиқ
                            василалар қўшимчалари асла керакли эмасми? Дўккон ишини ҳам, уй-турмушимизни ҳам,
                            буюмларнинг дордии рўхи ҳам бизнинг қўлларимиз ўсимлик-бедарунда боғланган. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officia alias quia et sequi dolores velit, ratione hic ipsam laboriosam, tempora dicta quod corporis architecto quis eos fugiat nobis eum!
                        </p>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className=" right-column">
                        <h3 className="right-column-heading">22 january 2026</h3>
                        <h3 className="right-column-heading">Excepteur
                            sint</h3>
                        <img src="./castle1.svg" alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus impedit dolor architecto quam est obcaecati? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, inventore.</p>
                        {/* <div className="advertisement">
                            <p className="ad-title">ЁЗУВ ҚОЛАМЛАРИ</p>
                            <p style={{ fontSize: '0.9em', fontStyle: 'italic' }}>
                                Беҳтрин ишчилик билан ясалган, унумли қоламлар ўқимиши қўл коннасидан
                                танланади.
                            </p>
                        </div>

                        <hr className="ad-divider" /> */}

                        {/* <div className="advertisement">
                            <p className="ad-title">СУРАТЧИЛИК ХИЗМАТЛАРИ</p>
                            <p style={{ fontSize: '0.9em', fontStyle: 'italic' }}>
                                Замонавий қўрал-тақчиларда сурат олинади. Буюртма қўл бериш ҳозирда
                                сўрасидан юқорилик фикри сўзлана йўқ.
                            </p>
                        </div>

                        <hr className="ad-divider" />

                        <div className="advertisement">
                            <p className="ad-title">КИТОБ КИШТ ДАВОНИ</p>
                            <p style={{ fontSize: '0.9em', fontStyle: 'italic' }}>
                                Қўйма қўйлоқ-қўпонлар. Ёш жилдлар тикланиши. Буюртма қабул қилинади.
                            </p>
                        </div> */}

                        {/* <h3 className="section-heading" style={{ marginTop: '2rem' }}>
                            ОБУ-ҲАВОНИНГ ЭНДИ ҲОЛАТИ
                        </h3>
                        <p style={{ fontSize: '0.95em' }}>
                            Очиқ ҳаво мўзрур. Ғарбдан ўрта кучли шамол. Ҳаво ӣстижерак.
                        </p>

                        <h3 className="section-heading" style={{ marginTop: '1.5rem' }}>
                            ҚАТОР РАСМ ЖАДВАЛИ
                        </h3>
                        <p style={{ fontSize: '0.9em', lineHeight: '1.8' }}>
                            Фастинан қоқон: 9:15 ДМ<br />
                            Маргилонга: 11:30 ДМ<br />
                            Бухорага: 2:45 ДМ<br />
                            Бошқа қатор қўлай
                        </p> */}
                    </div>
                </div>

                {/* FOOTER */}
                {/* <footer className="newspaper-footer">
                    <hr className="footer-divider" />
                    <div className="footer-content">
                        <span>1-саҳифа / 4</span>
                        <span className="footer-middle">ЎЗБЕКИСТОН ГАЗЕТА</span>
                        <span>Ташкентда чоп қилинган</span>
                    </div>
                    <p className="footer-text">
                        Ҳар куни чоп қилинади. Хабарлар ва реклама ўз қўлдан қома бўлинади. Бизнес ҳуқуқлари
                        сохаланган.
                    </p>
                </footer> */}
                <footer>
                    <div>
                        <div>
                            <h1>the society</h1>
                            {/* <p>uNITY: THE ESSENCE
                                OF SOCIETY IMPACT</p> */}
                        </div>
                        <p>ro, reprehenderit nisi quasi explicabo fugit, deleniti ipsam sapiente et mollitia quam ducimus. Iure voluptas libero asperiores! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam velit officia consequatur! Omnis at aspernatur accusantium dolorem molestiae magnam possimus. Deserunt, omnis accusamus. Vitae, veniam ea! Omnis quis dignissimos ullam.</p>
                    </div>
                    <img src="./castle2.svg" alt="" />

                </footer>
            </article>

        </div>
    );
}
