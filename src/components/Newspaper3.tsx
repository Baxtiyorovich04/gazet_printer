import NewspaperPage from './NewspaperPage';
import CameraBlock from './CameraBlock';
import './Newspaper3.css';


export default function NewspaperLayoutModern() {
    const handlePhotoCapture = (data?: string) => {
        console.log('Photo captured (modern)', data?.slice(0, 64));
    };

    return (
        <NewspaperPage>
            <div className='newspage3'>
                <header className='news3header'>
                    <h1 className='page3header'>Around the world</h1>
                </header>
                <div className='new3headerbottomDivider'></div>
                <div className='new3headerbottomDivider'></div>
                <div className='main-camera-sec3'>
                    <CameraBlock onPhotoCapture={handlePhotoCapture} />
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className='headerBottomsec'>
                    <img src="./cryingangel.svg" alt="" />
                    <p>Erkaklar ayolning sevgisiga muhtoj emaslar. Bu g'oya ularni zaiflashtirish, doimiy ravishda e'tibor, ma'qullash va tasdiqlashni izlashga majburlash uchun yaratilgan.Ehtiyoj qaramlikni keltirib chiqaradi. Qaramlik nazoratni keltirib chiqaradi. Kerakli narsani tortib olish mumkin. Keraksiz narsani qurol sifatida ishlatib bo'lmaydi.Sevgi kuchga ergashishi mumkin, lekin u </p>
                    <p>  Ma'qullashga muhtoj bo'lgan erkak qadr-qimmatni qulaylik uchun almashtiradi va rad etilishdan qochish uchun maqsadlaridan voz kechadi. Ma'qullashga bog'liqlik kerak bo'lganda ta'sir kuchiga aylanadi. Kuch tanlanishni so'ramaydi. U o'z ichida to'liq turadi. U ta'qib qilmasdan o'ziga tortadi. hech qachon uni yengib o'tmasligi kerak.
                        Hech narsaga muhtoj bo'lmagan odam - bu hech kim tomonidan boshqarilmaydigan odam.</p>
                </div>
                <div className='news3Footer'>
                    <div className='butterfly-sec'>
                        <img src="./butterfly.svg" alt="" />
                        <h2>butterfly</h2>
                        <p> Al. Etiam et tellus  ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a rutrum orci, et convallis odio. Integer dignissim nisl at tortor porta, sit amet dapibus </p>
                    </div>
                    <div className='city-sec'>
                        <img src="./city.svg" alt="" />
                        <p>Lpiscing elit. nissim nisleque scelerisque. Aenean finibus ornare lacus, finibus egestas augue volutpat at. Aenean tristique ipsum dolor, at sollicitudin  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non sem ornare, volutpat nibh in, luctus nibh. Etiam et te llus eu eros ornare sollicitudin vitae vitae ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                    </div>
                    <div className='books-sec'>
                        <h1>really great com</h1>
                        <img src="./books.svg" alt="" />
                        <p>Lorem ipsum dolor sit amet,amet, consectetur adipiscing elit. nissim nisl at tortor porta,</p>
                    </div>
                </div>
            </div>

        </NewspaperPage>
    );
}
