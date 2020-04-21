
import React from 'react';
import './aboutme.css';


function aboutMe() {
    return (

        <div className="container">
            <div className="row">

                <div className=" col-md-6"><img id="me" src="assets/IMG_3187 (2).jpg" /></div>


                <div className=" col-md-6">
                    <p>* This website is still under construction and is being exported to React.* I was born and raised in
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

export default aboutMe;