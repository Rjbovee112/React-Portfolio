import React from 'react';
import './footersyle.css';




function Footer() {
    return (
        <footer class="footer">
            <div className="col-md-12 foot-icons">
                <a className="icons" target="_blank" href="https://github.com/Rjbovee112"><img style={{ height: '40px' }}
                    src="assets/kisspng-github-computer-icons-repository-arch-linux-icon-5b4c339a5ea7f8.7251585315317206023877.png" /></a>

                <a className="icons" target="_blank" href="https://www.linkedin.com/in/robert-bovee-a5b0a3191/"><img style={{ height: '40px' }}
                    src="assets/linkedin-512.png" /></a>
                <a className="icons" target="_blank" href="index.html"><img style={{ height: '40px' }} src="assets/logo-one.png" /></a>

                <a className="icons" target="_blank" href="https://www.kidney.org/"><img style={{ height: '40px' }}
                    src="assets/kindpng_2270139.png" /></a>
            </div>
        </footer>
    );
}

export default Footer;