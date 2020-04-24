import React from 'react';
import './contact.css';


class Contact extends React.Component {
    componentDidMount() {
        var body = document.querySelector('body');

        body.style.backgroundImage = 'url("./assets/tree-20-percent-OP.jpg")';
        body.style.backgroundSize = 'cover';
    }


    render() {
        return (


            <div className="container">
                <div className="row">


                    <div className=" col-md-4"><img id="phone" src="./assets/antique-close-up-cord-dial-209695 (1).jpg" />
                        <div className="centered">
                            <font size="6"><b>(801) 707-0593</b></font>
                        </div>
                    </div>


                    <div className=" col-md-4"><img id="email" src="./assets/email-blocks-on-gray-surface-1591062.jpg" />
                        <div className="centered"><a href="mailto:rjbovee112@gmail.com?Subject=Hello%20again" target="_top">
                            <font size="6"><b>EMAIL</b></font>
                        </a></div>
                    </div>


                    <div className=" col-md-4"><img id="resume" src="./assets/ResumeCapture.PNG" />
                        <div className="centered"><a
                            href="https://drive.google.com/drive/folders/1C1fcGJwvDRp6L9Z59hyiurWBKinBUEm8">
                            <font size="6"><b>RESUME</b></font>
                        </a>
                        </div>
                    </div>


                </div>
            </div>

        );
    }
}

export default Contact;