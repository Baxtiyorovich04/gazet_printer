import CameraBlock from './CameraBlock';
import './NewspaperLayout.css';

interface NewspaperLayoutProps {
    variant?: 'v1' | 'v2';
}

export default function NewspaperLayout({ variant = 'v1' }: NewspaperLayoutProps) {
    const handlePhotoCapture = () => {
        console.log('Суратча олинди');
    };

    const isV1 = variant === 'v1';

    return (
        <article className={`newspaper ${variant}`}>
            {/* MASTHEAD */}
            <hr className="masthead-divider" />
            <hr className="masthead-divider" />
            <header className="masthead">
                <h1 className="masthead-title">
                    {isV1 ? 'world news herald' : 'daily modern'}
                </h1>
            </header>
            <h2 className="masthead-subtitle">
                {isV1 ? 'Around the world' : 'Global Insights'}
            </h2>

            {/* CONTENT GRID */}
            <div className="content-grid">
                {/* LEFT COLUMN */}
                <div className="column left-column">
                    <h3 className="left-column-heading">
                        {isV1 ? 'ХАБАРЛАР' : 'FEATURES'}
                    </h3>
                    <h2 className="left-column-heading2">
                        {isV1 ? 'DOLOR' : 'VIVAMUS'}
                    </h2>
                    <img className="left-cloumn-img" src="./plane.svg" alt="" />
                    <p>
                        {isV1
                            ? 'Мамлакатнинг турли вилояларидан замонавий ишловер ва технология сохасидаги муҳим хабарлар келмоқда. Иқтисодий ўсиш ва саноат сектори ривожланиши турли синф ва маҳсулотчилар орасида оптимизмни келтириб чиқмоқда.'
                            : 'Alternate design content. This version uses a slightly different masthead and typographic emphasis while keeping the same A4 layout and column widths.'}
                    </p>
                    {isV1 && (
                        <p>
                            Транспорт хизматлари йўл тўлақонда 20% ортиқлашди. Ишчи сўврали корхоналар
                            энергия тежашлик технологияларини қўллап, самарадорликни ошириб бермоқда.
                        </p>
                    )}
                </div>

                {/* CENTER COLUMN */}
                <div className="column center-column">
                    <CameraBlock onPhotoCapture={handlePhotoCapture} />
                    <h2 className="main-headline">
                        {isV1 ? 'CONSECTETUR ADIPISCING' : 'INNOVATION & CULTURE'}
                    </h2>
                    <p>
                        {isV1
                            ? 'Юқоридаги сурат замонавий давр йилариғдаги қадр қилиш лаёқатга эга. Сўратчилик услубидан фойдаланиб, кўринишларини оддий қўлан-қўл қўлланилайдиганидан ўзгартириб, худди сўнги яширинчалик сақланиб қоладилар бўлди.'
                            : 'A modern take on the newspaper layout: rearranged headings, different masthead and subtle color changes for visual distinction. Content remains same size and flow.'}
                    </p>
                </div>

                {/* RIGHT COLUMN */}
                <div className="right-column">
                    <h3 className="right-column-heading">
                        {isV1 ? '22 january 2026' : '30 january 2026'}
                    </h3>
                    <h3 className="right-column-heading">
                        {isV1 ? 'Excepteur sint' : 'Highlights'}
                    </h3>
                    <img src="./castle1.svg" alt="" />
                    <p>
                        {isV1
                            ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus impedit dolor architecto quam est obcaecati?'
                            : 'Short summary and teasers for the inside pages.'}
                    </p>
                </div>
            </div>

            {/* FOOTER */}
            <footer>
                <div>
                    <div>
                        <h1>{isV1 ? 'the society' : 'modern times'}</h1>
                    </div>
                    <p>
                        {isV1
                            ? 'ro, reprehenderit nisi quasi explicabo fugit, deleniti ipsam sapiente et mollitia quam ducimus.'
                            : 'Alternative footer content for the second design.'}
                    </p>
                </div>
                <img src="./castle2.svg" alt="" />
            </footer>
        </article>
    );
}
