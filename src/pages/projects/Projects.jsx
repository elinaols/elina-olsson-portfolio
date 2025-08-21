import { Link } from "react-router-dom";
import airpulse from '../../assets/airpulse2.webp'
import sphereOfVibes from '../../assets/sphereOfVibes.png'
import angularVueRestaurants from '../../assets/angularVueRestaurants2.webp'
import memorygame from '../../assets/memorygame2.webp'
import edenskolan from '../../assets/edenskolan2.webp'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./Projects.css"

export default function Cv() {
    return (
        <>
            <div className="container-fluid px-0 projects-bg-img">
                <Header/>
                <div className="container py-5">
                    <p className="text-center mb-2 text-font fs-1 primary-color text-lowercase">Tidigare projekt</p>
                </div>
                <div className="container px-0 pb-2">
                    <div className="d-flex flex-row flex-wrap justify-content-around mb-5 gap-5">
                        <div className="card shadow bg-body-tertiary rounded mb-3 mb-lg-0">
                            <img src={airpulse} className="rounded img-fluid p-0" alt="Lista"/>
                            <div className="card-body text-end">
                                <h5 className="card-title text-start fw-bold">Airpulse</h5>
                                <p className="card-text text-start mb-1">Väderapp med sökfunktion</p>
                                <p className="card-text text-start fst-italic">React och Bootstrap</p>
                                <Link to={"https://webbkurs.ei.hv.se/~elol0031/JSR200/Examinationsuppgift/"} role="button" className="btn btn-secondary btn-color text-font text-lowercase">Visa</Link>
                            </div>
                        </div>
                        <div className="card shadow bg-body-tertiary rounded mb-3 mb-lg-0">
                            <img src={sphereOfVibes} className="rounded img-fluid p-0" alt="Lista"/>
                            <div className="card-body text-end">
                                <h5 className="card-title text-start fw-bold">sphere of vibes</h5>
                                <p className="card-text text-start mb-1">Sök efter låtar på Spotify</p>
                                <p className="card-text text-start fst-italic">Tailwind och Next</p>
                                <Link to={"https://sphere-of-vibes.vercel.app/"} role="button" className="btn btn-secondary btn-color text-font text-lowercase">Visa</Link>
                            </div>
                        </div>
                        <div className="card shadow bg-body-tertiary rounded mb-3 mb-lg-0">
                            <img src={angularVueRestaurants} className="rounded img-fluid p-0" alt="Lista"/>
                            <div className="card-body text-end">
                                <h5 className="card-title text-start fw-bold">Angular projekt</h5>
                                <p className="card-text text-start mb-1">Hämtar data från JSON-fil</p>
                                <p className="card-text text-start fst-italic">Angular</p>
                                <Link to={"https://webbkurs.ei.hv.se/~elol0031/JSR200/Checkpoint_3/restaurants-angular/"} role="button" className="btn btn-secondary btn-color text-font text-lowercase">Visa</Link>
                            </div>
                        </div>
                        <div className="card shadow bg-body-tertiary rounded mb-3 mb-lg-0">
                            <img src={angularVueRestaurants} className="rounded img-fluid p-0" alt="Lista"/>
                            <div className="card-body text-end">
                                <h5 className="card-title text-start fw-bold">Vue projekt</h5>
                                <p className="card-text text-start mb-1">Hämtar data from JSON-fil</p>
                                <p className="card-text text-start fst-italic">Vue</p>
                                <Link to={"https://webbkurs.ei.hv.se/~elol0031/JSR200/Checkpoint_3/restaurants-vue/"} role="button" className="btn btn-secondary btn-color text-font text-lowercase">Visa</Link>
                            </div>
                        </div>
                        <div className="card shadow bg-body-tertiary rounded mb-5 mb-lg-0">
                            <img src={memorygame} className="rounded img-fluid p-0" alt="Memoryspel"/>
                            <div className="card-body text-end">
                                <h5 className="card-title text-start fw-bold">Memoryspel</h5>
                                <p className="card-text text-start mb-1">Mitt första JavaScript projekt</p>
                                <p className="card-text text-start fst-italic">JavaScript</p>
                                <Link to={"https://elinaols.github.io/memorygame_project/"} role="button" className="btn btn-secondary btn-color text-font text-lowercase">Visa</Link>
                            </div>
                        </div>
                        <div className="card shadow bg-body-tertiary rounded mb-3 mb-lg-0">
                            <img src={edenskolan} className="rounded img-fluid p-0" alt="Lista"/>
                            <div className="card-body text-end">
                                <h5 className="card-title text-start fw-bold">Edenskolan</h5>
                                <p className="card-text text-start mb-1">Bokningssystem byggt med PHP</p>
                                <p className="card-text text-start fst-italic">PHP</p>
                                <Link to={"https://webbkurs.ei.hv.se/~elol0031/WPR201/PHP_inlamning_ElinaOlsson/"} role="button" className="btn btn-secondary btn-color text-font text-lowercase">Visa</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container p-4 mt-3 mb-5 text-start">
                    <div className="project-text-layout">
                        <p className="fw-bold mb-1 pb-2 fs-3">Olika projekt som jag utvecklat</p>
                        <p>
                            Ovan presenteras ett urval från de projekt som jag utvecklat under utbildningens gång och fritid. I dessa projekt har jag använt olika teknologier för att bygga funktionella och interaktiva webbsidor.
                            Här har jag använt teknologier som React, Next, TypeScript, Angular, Vue, JavaScript och PHP för att kunna skapa lösningar som både är skalbara och användarvänliga. Varje projekt har gett mig möjlighet att 
                            fördjupa mina kunskaper och tillämpa bästa praxis inom frontend- och backendutveckling.
                        </p>
                    </div>
                    <div className="d-flex align-items-center project-text-layout">
                        <Link to={"http://github.com/elinaols"}><i className="fa-brands fa-github fs-3 pe-2"></i></Link>
                        <Link to={"http://github.com/elinaols"} className="text-dark">Se mina projekt på github här</Link>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}