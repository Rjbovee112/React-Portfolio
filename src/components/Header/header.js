
import React from 'react';
import './headerstyle.css';


function Header() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg fixed-top py-3">
                <div className="container"><a href="index.html" className="navbar-brand text-uppercase font-weight-bold">Robert J
                    Bovee</a>
                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                        className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars" /></button>

                    <div id="navbarSupportedContent" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="index.html"
                                className="nav-link text-uppercase font-weight-bold">Home
                                <span className="sr-only">(current)</span></a></li>
                            <li className="nav-item"><a href="about.html"
                                className="nav-link text-uppercase font-weight-bold">About</a></li>
                            <li className="nav-item"><a href="portfolio.html"
                                className="nav-link text-uppercase font-weight-bold">Portfolio</a>
                            </li>
                            <li className="nav-item"><a href="contact.html"
                                className="nav-link text-uppercase font-weight-bold">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Header;