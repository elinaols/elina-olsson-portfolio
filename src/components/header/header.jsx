import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-white bg-opacity-25 mb-5 sticky-top"> 

            <Link className="navbar-brand mx-3 fs-4 text-font primary-color mb-0" to={"/"}>Elina Olsson</Link>
            <span className="text-font pt-0 pb-3 text-lowercase d-none d-lg-block">Fullstack utvecklare</span>

            <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item mx-3">
                        <Link className="nav-link text-lowercase" to={"/projects"}>Projekt</Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link className="nav-link text-lowercase" to={"/cv"}>CV</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}