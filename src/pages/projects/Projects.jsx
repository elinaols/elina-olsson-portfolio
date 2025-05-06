import React from "react";
import { Link } from "react-router-dom";
import airpulse from '../../assets/airpulse2.webp'
import dreamLocation from '../../assets/dreamlocations2.webp'
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
                        <div className="card shadow bg-body-tertiary rounded mx-3 mb-3 mb-lg-0">
                            <img src={airpulse} className="img-fluid p-0" alt="Lista"/>
                            <div className="card-body text-end">
                                <h5 className="card-title text-start fw-bold">Airpulse</h5>
                                <p className="card-text text-start">Väderapp skapad med React</p>
                                <Link to={"https://webbkurs.ei.hv.se/~elol0031/JSR200/Examinationsuppgift/"} role="button" className="btn btn-secondary btn-color text-font text-lowercase">Visa</Link>
                            </div>
                        </div>
                        <div className="card shadow bg-body-tertiary rounded mx-3 mb-3 mb-lg-0">
                            <img src={dreamLocation} className="img-fluid p-0" alt="Lista"/>
                            <div className="card-body text-end">
                                <h5 className="card-title text-start fw-bold">Dröm destinationer</h5>
                                <p className="card-text text-start">Lista med resemål byggd i vanilla JS</p>
                                <Link to={"https://webbkurs.ei.hv.se/~elol0031/JSR200/Checkpoint_1/"} role="button" className="btn btn-secondary btn-color text-font text-lowercase">Visa</Link>
                            </div>
                        </div>
                        <div className="card shadow bg-body-tertiary rounded mx-3 mb-3 mb-lg-0">
                            <img src={angularVueRestaurants} className="img-fluid p-0" alt="Lista"/>
                            <div className="card-body text-end">
                                <h5 className="card-title text-start fw-bold">Angular projekt</h5>
                                <p className="card-text text-start">Hämtar data från JSON-fil</p>
                                <Link to={"https://webbkurs.ei.hv.se/~elol0031/JSR200/Checkpoint_3/restaurants-angular/"} role="button" className="btn btn-secondary btn-color text-font text-lowercase">Visa</Link>
                            </div>
                        </div>
                        <div className="card shadow bg-body-tertiary rounded mx-3 mb-3 mb-lg-0">
                            <img src={angularVueRestaurants} className="img-fluid p-0" alt="Lista"/>
                            <div className="card-body text-end">
                                <h5 className="card-title text-start fw-bold">Vue projekt</h5>
                                <p className="card-text text-start">Hämtar data from JSON-fil</p>
                                <Link to={"https://webbkurs.ei.hv.se/~elol0031/JSR200/Checkpoint_3/restaurants-vue/"} role="button" className="btn btn-secondary btn-color text-font text-lowercase">Visa</Link>
                            </div>
                        </div>
                        <div className="card shadow bg-body-tertiary rounded mx-3 mb-5 mb-lg-0">
                            <img src={memorygame} className="img-fluid p-0" alt="Memoryspel"/>
                            <div className="card-body text-end">
                                <h5 className="card-title text-start fw-bold">Memoryspel</h5>
                                <p className="card-text text-start">Mitt första JavaScript projekt</p>
                                <Link to={"https://elinaols.github.io/memorygame_project/"} role="button" className="btn btn-secondary btn-color text-font text-lowercase">Visa</Link>
                            </div>
                        </div>
                        <div className="card shadow bg-body-tertiary rounded mx-3 mb-3 mb-lg-0">
                            <img src={edenskolan} className="img-fluid p-0" alt="Lista"/>
                            <div className="card-body text-end">
                                <h5 className="card-title text-start fw-bold">Edenskolan</h5>
                                <p className="card-text text-start">Bokningssystem byggt med PHP</p>
                                <Link to={"https://webbkurs.ei.hv.se/~elol0031/WPR201/PHP_inlamning_ElinaOlsson/"} role="button" className="btn btn-secondary btn-color text-font text-lowercase">Visa</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container p-4 mt-3 mb-5 text-start">
                    <div className="project-text-layout">
                        <p className="fw-bold mb-0 pb-2 fs-3">Olika projekt som jag utvecklat</p>
                        <p>
                            Ovan presenteras ett urval från de projekt som jag utvecklat under utbildningens gång. I dessa projekt har jag använt olika teknologier för att bygga funktionella och interaktiva webbsidor.
                            Här har jag använt teknologier som React, Angular, Vue, JavaScript och PHP för att kunna skapa lösningar som både är skalbara och användarvänliga. Varje projekt har gett mig möjlighet att 
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