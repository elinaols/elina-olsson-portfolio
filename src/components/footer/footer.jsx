import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="container-fluid text-center bg-dark py-5">
            <div className="row row-cols-1">
                <div className="col mb-3 d-flex gap-3 justify-content-center">
                    <Link to="https://linkedin.com/in/elina-olsson-5504181b0"><i className="fa-brands fa-linkedin fs-3 link-color"></i></Link>
                    <Link to="http://github.com/elinaols"><i className="fa-brands fa-github fs-3 link-color"></i></Link>
                </div>
                <div className="col">
                    <p className="text-lowercase link-color mb-3"><strong className="link-color">Mail:</strong><br/>elinaannaolsson@gmail.com</p>
                </div>
            </div>
        </div>
    )
}