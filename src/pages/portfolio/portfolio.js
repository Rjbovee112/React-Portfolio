import React from 'react';
import './portfolio.css';


class Portfolio extends React.Component {
    componentDidMount() {
        var body = document.querySelector('body');

        body.style.backgroundImage = 'url("./assets/palm-20-percent.jpg")';
        body.style.webkitBackgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundPosition = 'center';
    }


    render() {
        return (

            <div className="container">
                <div className="row port">


                    <div className=" col-md-3"><img id="dream" src="./assets/DreamD.jpg" />
                        <div className="centered"><a href="https://ruffmantom.github.io/Group-project/" target="_blank">
                            <font size="6"><b>PROJECT 1</b></font>
                        </a></div>
                    </div>


                    <div className=" col-md-3"><img id="note" src="./assets/NoteTaker.jpg" />
                        <div className="centered"><a href="https://notetakerexpress62.herokuapp.com/" target="_blank">
                            <font size="6"><b>NOTE TAKER</b></font>
                        </a></div>
                    </div>


                    <div className=" col-md-3"><img id="weather" src="./assets/weatherAPI.jpg" />
                        <div className="centered"><a href="https://rjbovee112.github.io/Weather-APIHW/" target="_blank">
                            <font size="6"><b>WEATHER API</b></font>
                        </a></div>
                    </div>


                    <div className=" col-md-3"><img id="generator" src="./assets/generator.jpg" />
                        <div className="centered"><a href="https://github.com/Rjbovee112/Developer-Profile-Generator--09"
                            target="_blank">
                            <font size="6"><b>DEVELOPER PROFILE</b></font>
                        </a></div>
                    </div>

                    <div className=" col-md-3"><img id="dream" src="./assets/quizzly.jpg" />
                        <div className="centered"><a href="https://github.com/blaurel93/QuizProject" target="_blank">
                            <font size="6"><b>PROJECT 2</b></font>
                        </a></div>
                    </div>

                    <div className=" col-md-3"><img id="dream" src="./assets/teampic.jpg" />
                        <div className="centered"><a href="https://github.com/Rjbovee112/Team-Profile-Generator-10" target="_blank">
                            <font size="6"><b>TEAM GENERATOR</b></font>
                        </a></div>
                    </div>

                    <div className=" col-md-3"><img id="dream" src="./assets/id-directories.jpg" />
                        <div className="centered"><a href="https://protected-caverns-46510.herokuapp.com/" target="_blank">
                            <font size="6"><b>EMPLOYEE DIRECTORY</b></font>
                        </a></div>
                    </div>

                    <div className=" col-md-3"><img id="dream" src="./assets/budgetpic.jpg" />
                        <div className="centered"><a href="https://budgetracker84.herokuapp.com/" target="_blank">
                            <font size="6"><b>BUDGET TRACKER</b></font>
                        </a></div>
                    </div>


                </div>
            </div>

        );
    }
}

export default Portfolio;
