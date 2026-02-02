import NewspaperPage from './NewspaperPage';
import CameraBlock from './CameraBlock';
import './Modern.css';


export default function NewspaperLayoutModern() {
    const handlePhotoCapture = (data?: string) => {
        console.log('Photo captured (modern)', data?.slice(0, 64));
    };

    return (
        <NewspaperPage>
            <div className='modern-sec'>
                <header className="modern-header">
                    <h1>THE</h1>
                    <img src="./england_log.svg" alt="" />
                    <h1>TIMES</h1>
                </header>

                <div className='modernHeaderBottom'>
                    <h2>Wall Newspaper Gains Instant Authority</h2>
                    <p>
                        Printed fonts and confident layout convince everyone this is
                        serious journalism. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quam.
                    </p>
                </div>

                <h1 className='HeaderBottomH1'>
                    HE IS  ZAZVIZDILSA
                </h1>

                <p className='headerp'>
                    PRI PODDERJKI ZVEZDICKI 05 TAKAM MILIONERWA KOTARAYA DRUJIT  ALFO PAKALENIY KOTORIY NE IMEET  EDINOGO POLA
                </p>

                <section className="modern-grid">
                    <div className="column text-column">
                        <p>
                            An ordinary wall became “intellectual” after receiving a
                            newspaper this morning.
                            An ordinary wall became “intellectual” after receiving a
                            newspaper this morning.
                        </p>
                        <p>
                            Visitors nodded silently, pretending to understand the topic.
                            An ordinary wall became “intellectual” after receiving a
                            newspaper this morning.
                        </p>
                        <p>
                            No one actually read the text, but everyone respected it.
                            An ordinary wall became “intellectual” after receiving a
                            newspaper this morning.
                        </p>
                        <p>
                            The wall has never felt this confident before.
                            An ordinary wall became “intellectual” after receiving a
                            newspaper this morning.
                        </p>
                    </div>

                    <div className="column image-column">
                        <CameraBlock onPhotoCapture={handlePhotoCapture} />
                    </div>

                    <div className="column text-column image">
                        <p>
                            The central image adds mystery and prevents questions.
                            An ordinary wall became “intellectual” after receiving a
                            newspaper this morning.
                        </p>
                        <p>
                            Editors confirmed it “means something.”     An ordinary wall became “intellectual” after receiving a
                            newspaper this morning.
                        </p>
                        <p>
                            Readers spent more time staring than reading.
                            An ordinary wall became “intellectual” after receiving a
                            newspaper this morning.
                        </p>
                        <p>
                            Mission accomplished.     An ordinary wall became “intellectual” after receiving a
                            newspaper this morning.
                        </p>
                    </div>
                </section>

                <footer className="modern-footer">
                    <img src="./blackbooks.svg" alt="" />
                    <div>
                        <p>
                            on bil nastolka ofigitelnim cto po nemu zvezdocka sohla, and never updated.     An ordinary wall became “intellectual” after receiving a
                            newspaper this morning.    An ordinary wall became “intellectual” after receiving a
                            newspaper this morning.
                        </p>
                        <p>
                            Perfect for walls and serious conversations.     An ordinary wall became “intellectual” after receiving a
                            newspaper this morning.    An ordinary wall became “intellectual” after receiving a
                            newspaper this morning.
                        </p>
                    </div>
                </footer>
            </div>
        </NewspaperPage>
    );
}
