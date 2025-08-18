import React from "react";
import stockholm from '../../assets/stockholm-day-view.webp'
import pictureOfMe from '../../assets/me.webp'
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function Home() {
    return (
        <div className="container-fluid px-0 index-bg-image">
            <Header/>
            <div className="container text-center mt-5 mb-5 mb-lg-0">
                <div className="row justify-content-center">
                    <div className="col-auto col-sm-6 col-md-7 mt-5 mt-md-4 pt-sm-3 pt-md-5">
                        <p className="text-font fs-1 text-lowercase text-lg-start primary-color">Hej, jag heter <span className="text-capitalize text-font primary-color">E</span>lina <br/><span className="text-font ms-xl-1"><span className="bold">-</span> en driven och kreativ utvecklare</span></p>
                    </div>
                    <div className="col-auto col-sm-6 col-md-5 mb-lg-5 mb-lg-0 mt-0 mt-sm-3">
                        <img src={pictureOfMe} className="rounded mt-5 mt-md-0 pt-md-5 pt-0 img-fluid" alt="Picture of me"/>
                    </div>
                </div>
            </div>
            <div className="container mb-5 pb-4">
                <div className="row">
                    <div className="col-12 col-lg-6 pt-0 pt-sm-4 pt-lg-0 pe-md-2 pe-lg-5 align-self-center text-center">
                        <img src={stockholm} className="rounded mb-5 mb-lg-0 img-fluid stockholm" alt="Bild över staden Stockholm"/>
                    </div>
                    <div className="col-12 col-lg-6 text-start p-3">
                        <p className="fs-3 fw-bold">Driven person med hög arbetsmoral</p>
                        <p>Som examinerad fullstack utvecklare fokuserar jag på att skapa användarvänliga och visuellt tilltalande webbplatser. Min kreativa och tekniska kompetens gör så att jag strävar efter att utveckla lösningar som är både effektiva och funktionella.</p>
                        <p>Som person är jag driven, hårt arbetande och kreativ själ som älskar att utmana mig själv samt lära mig nya saker. Jag trivs bäst i arbetsmiljöer där öppenhet och kompetensutveckling prioriteras för att jag ska kunna se mig själv fortsätta växa och utvecklas.</p>
                        <p>Tveka inte att kontakta mig om du vill starta en dialog. Jag är tillgänglig via antingen via e-post på <Link to={"mailto:elina.anna.olsson@gmail.com"} className="text-dark">elina.anna.olsson@gmail.com</Link> eller telefon <Link to={"tel:+46761288127"} className="text-dark">076-1288127</Link>. Hoppas vi hörs!</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}