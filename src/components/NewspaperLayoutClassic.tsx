import CameraBlock from './CameraBlock';
import NewspaperPage from './NewspaperPage';

export default function NewspaperLayoutClassic() {
    const handlePhotoCapture = (data?: string) => {
        console.log('Photo captured (classic)', data?.slice(0, 64));
    };

    return (

        <NewspaperPage>
            <header className="masthead">
                <h1 className="masthead-title">world news herald</h1>
                <h2 className="masthead-subtitle">Around the world</h2>
            </header>

            <div className="content-grid">
                <div className="column left-column">
                    <h3 className="left-column-heading">ХАБАРЛАР</h3>
                    <h2 className="left-column-heading2">DOLOR</h2>
                    <img className="left-cloumn-img" src="./plane.svg" alt="" />
                    <p>
                        Мамлакатнинг турли вилояларидан замонавий ишловер ва технология сохасидаги муҳим
                        хабарлар келмоқда. Иқтисодий ўсиш ва саноат сектори ривожланиши турли синф ва
                        маҳсулотчилар орасида оптимизмни келтириб чиқмоқда.
                    </p>
                    <p>
                        Транспорт хизматлари йўл тўлақонда 20% ортиқлашди. Ишчи сўврали корхоналар энергия
                        тежашлик технологияларини қўллаб, самарадорликни ошириб бермоқда.
                    </p>
                </div>

                <div className="column center-column">
                    <CameraBlock onPhotoCapture={handlePhotoCapture} />
                    <h2 className="main-headline">CONSECTETUR ADIPISCING</h2>
                    <p>
                        Юқоридаги сурат замонавий давр йилариғдаги қадр қилиш лаёқатга эга. Сўратчилик
                        услубидан фойдаланиб, кўринишларини оддий қўлан-қўл қўлланилайдиганидан ўзгартириб,
                        худди сўнги яширинчалик сақланиб қоладилар бўлди.
                    </p>
                </div>

                <div className="right-column">
                    <h3 className="right-column-heading">22 january 2026</h3>
                    <h3 className="right-column-heading">Excepteur sint</h3>
                    <img src="./castle1.svg" alt="" />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus impedit dolor
                        architecto quam est obcaecati?
                    </p>
                </div>
            </div>

            <footer className='classicfooter'>
                <div>
                    <div>
                        <h1>the society</h1>
                    </div>
                    <p>
                        ro, reprehenderit nisi quasi explicabo fugit, deleniti ipsam sapiente et mollitia quam
                        ducimus.
                    </p>
                </div>
                <img src="./castle2.svg" alt="" />
            </footer>
        </NewspaperPage>
    );
}
