import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './Cv.css'

export default function Cv() {
    return (
        <>
            <div className="container-fluid px-0 cv-bg-img">
                <Header/>
                <div className="container pt-3 pt-sm-5 pb-3">
                    <div className="d-flex flex-column justify-content-center align-items-center mb-5">
                        <p className="fs-1 text-font text-lowercase mb-0">Elina Olsson</p>
                        <p className="fs-5 primary-color text-font text-lowercase mb-1">Fullstack utvecklare</p>
                        <ul className="fs-6 text-font text-lowercase d-flex flex-lg-row flex-wrap justify-content-center">
                            <li className="pe-4 fw-bold"><Link to={"http://github.com/elinaols"} className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">https://github/elinaols</Link></li>
                            <li className="pe-4 fw-bold">elinaannaolsson@gmail.com</li>
                            <li className="pe-4 fw-bold">Stockholm</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="container text-center mb-5 main-cv">
                    <div className="col pb-5">
                        <p className="fs-3 border-bottom pb-3 fw-bold">Karriäröversikt</p>
                        <p className="text-start">Hej! Som snart examinerad fullstack-utvecklare strävar jag efter att arbeta med både frontend och backend för att skapa effektiva och användarvänliga webbapplikationer. Mitt mål är att vidareutveckla min tekniska kompetens och bidra med innovativa lösningar till ert team.</p>
                    </div>
                    <div className="col pb-5">
                        <p className="fs-3 border-bottom pb-3 fw-bold">Utbildning</p>
                        <p className="text-start mb-0 primary-color mb-0 fs-5 fw-bold pb-1">Högskolan Väst</p>
                        <div className="container-fluid px-0 d-flex justify-content-between flex-wrap">
                            <p className="text-start col">Webmaster, 120 hp</p>
                            <p className="text-end mb-0 col">Aug 2023 - Jun 2025</p>
                        </div>
                        <p className="text-start mb-0 primary-color mb-0 fs-5 fw-bold pb-1">Björn Axén Academy</p>
                        <div className="container-fluid px-0 d-flex justify-content-between flex-wrap">
                            <p className="text-start col">Frisörutbildning</p>
                            <p className="text-end mb-0 col">Aug 2018 - Jun 2019</p>
                        </div>
                    </div>
                    <div className="col pb-5">
                        <p className="fs-3 border-bottom pb-3 fw-bold">Erfarenhet</p>
                        <p className="text-start mb-0 fw-bold primary-color mb-0 fs-5">Sthlm Ladies & Gents</p>
                        <div className="container-fluid px-0 pb-3 d-flex justify-content-between flex-wrap">
                            <div className="text-start col pt-1">
                                <div className="d-flex justify-content-between pb-1">
                                    <p className="mb-0 pb-1">Frisör</p>
                                    <p className="text-end mb-0 col cv-text-layout">Aug 2021 - Aug 2023</p>
                                </div>
                                <p className="mb-0 pb-1">- Gav professionellt kundbemötande och service genom att anpassa lösningar efter kundernas specifika önskemål och behov.</p>
                                <p className="mb-0 pb-1">- Planerade och publicerade Instagram-inlägg med före- och efterbilder för att öka synlighet och attrahera nya kunder.</p>
                                <p className="mb-0 pb-1">- Arbetade i ett team där jag bidrog till god sammanhållning genom öppen kommunikation och vara den inkluderande faktorn</p>
                                <p className="mb-0 pb-1">- Genomförde behandlingar på ett strukturerat och noggrant sätt för att kunna leverera en trygg och professionell upplevelse.</p>
                            </div>
                        </div>
                        <p className="text-start mb-0 primary-color mb-0 fs-5 fw-bold">Björn Axén</p>
                        <div className="container-fluid px-0 d-flex justify-content-between flex-wrap">
                            <div className="text-start col pt-1">
                                <div className="d-flex justify-content-between pb-1">
                                    <p className="mb-0 pb-1">Frisör</p>
                                    <p className="text-end col cv-text-layout">Jul 2019 - Jul 2021</p>
                                </div>
                                <p className="mb-0 pb-1">- Utöver de arbetsuppgifter som kommer med frisöryrket (specificerat under Sthlm Ladies & Gents rollen) så genomförde jag gesällbrev för att fördjupa min yrkeskompetens och certifiera mina färdigheter</p>
                            </div>
                        </div>
                    </div>
                    <div className="col pb-4">
                        <p className="fs-3 border-bottom pb-3 fw-bold">Skills</p>
                        <p className="text-start"><span className="fs-5 primary-color pe-2 fw-bold">Klientsidan</span>html - css - js - react - react native - angular - vue - typescript - tailwind - ux - ui</p>
                        <p className="text-start"><span className="fs-5 primary-color pe-2 fw-bold">Serversidan</span>sql - php - node.js - asp.net - c# - mysql - mongodb - sqlite - databashantering</p>
                        <p className="text-start"><span className="fs-5 primary-color pe-2 fw-bold">Övriga färdigheter</span>git - figma - visual studio code - responsiv design - render - b-körkort</p>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}