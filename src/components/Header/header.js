
import React from 'React';


function Header() {
    return (
        <header class="header">
            <nav class="navbar navbar-expand-lg fixed-top py-3">
                <div class="container"><a href="index.html" class="navbar-brand text-uppercase font-weight-bold">Robert J
                    Bovee</a>
                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                        class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>

                    <div id="navbarSupportedContent" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active"><a href="index.html"
                                class="nav-link text-uppercase font-weight-bold">Home
                                <span class="sr-only">(current)</span></a></li>
                            <li class="nav-item"><a href="about.html"
                                class="nav-link text-uppercase font-weight-bold">About</a></li>
                            <li class="nav-item"><a href="portfolio.html"
                                class="nav-link text-uppercase font-weight-bold">Portfolio</a>
                            </li>
                            <li class="nav-item"><a href="contact.html"
                                class="nav-link text-uppercase font-weight-bold">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Header;