
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
                        <p>I was born and raised in
                        Southern California and moved to Utah in 2013. I currently work full time
                        for Fidelity Investments, while attending the University of Utah Full Stack Coding Bootcamp. I have
                        gravitated towards front-end and want to become a front-end developer. I really enjoy creating
                        exciting websites that have style and functionality. Once I have completed the course, I am going to
                        start taking classes on UI and Design, as I want to really hone those skill to be able to create
                        amazing and dynamic websites. I really enjoy collaboration and working with others to create
                something extraordinary.</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutMe;