
import React from 'react';
import './aboutme.css';

class AboutMe extends React.Component {
    componentDidMount() {
        var body = document.querySelector('body');

        body.style.backgroundImage = 'url("./assets/cooltree-20percent.jpg")';
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundPosition = 'center';
        /*
        body.setAttribute('style', JSON.stringify({
            'background-image': 'url(http://localhost:3000/assets/cooltree-20percent.jpg) no-repeat center center fixed',
            'background-size': 'cover',
        }))
        */
    }

    render() {
        return (

            <div className="container">
                <div className="row">

                    <div className=" col-md-6"><img id="me" src="assets/IMG_3187 (2).jpg" /></div>


                    <div className=" col-md-6">
                        <p>I recently graduated from the University of Utah Full Stack Coding Bootcamp.  During the course I have gravitated towards front end development and design.  I really enjoy creating exciting websites with function and style.  I am looking forward to becoming a Front-End Developer.  I am an avid Udemy course taker and will be continue my education by taking as many courses as I can.  I currently work at Fidelity Investments, in their Brokerage Operations department.  I have been with the company for 5 years.  In 2017 I received a kidney transplant and try to help educate people about end stage renal failure and kidney transplants.</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutMe;