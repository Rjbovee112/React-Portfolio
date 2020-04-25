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
                <div className="row">


                    <div className=" col-md-3"><img id="dream" src="./assets/DreamD.jpg" />
                        <div className="centered"><a href="https://ruffmantom.github.io/Group-project/" target="_blank">
                            <font size="6"><b>DREAM</b></font>
                        </a></div>
                    </div>


                    <div className=" col-md-3"><img id="note" src="./assets/NoteTaker.jpg" />
                        <div className="centered"><a href="https://blooming-ridge-22773.herokuapp.com/" target="_blank">
                            <font size="6"><b>NOTE</b></font>
                        </a></div>
                    </div>


                    <div className=" col-md-3"><img id="weather" src="./assets/weatherAPI.jpg" />
                        <div className="centered"><a href="https://rjbovee112.github.io/Weather-APIHW/" target="_blank">
                            <font size="6"><b>WEATHER</b></font>
                        </a></div>
                    </div>


                    <div className=" col-md-3"><img id="generator" src="./assets/generator.jpg" />
                        <div className="centered"><a href="https://github.com/Rjbovee112/Developer-Profile-Generator--09"
                            target="_blank">
                            <font size="6"><b>PROFILE</b></font>
                        </a></div>
                    </div>

                    <div className=" col-md-3"><img id="dream" src="./assets/burgerpic.jpg" />
                        <div className="centered"><a href="**********" target="_blank">
                            <font size="6"><b>Burger</b></font>
                        </a></div>
                    </div>

                    <div className=" col-md-3"><img id="dream" src="./assets/teampic.jpg" />
                        <div className="centered"><a href="https://github.com/Rjbovee112/Team-Profile-Generator-10" target="_blank">
                            <font size="6"><b>Team</b></font>
                        </a></div>
                    </div>

                    <div className=" col-md-3"><img id="dream" src="./assets/id-directories.jpg" />
                        <div className="centered"><a href="https://protected-caverns-46510.herokuapp.com/" target="_blank">
                            <font size="6"><b>Directory</b></font>
                        </a></div>
                    </div>

                    <div className=" col-md-3"><img id="dream" src="./assets/budgetpic.jpg" />
                        <div className="centered"><a href="https://budgetracker84.herokuapp.com/" target="_blank">
                            <font size="6"><b>Budget</b></font>
                        </a></div>
                    </div>


                </div>
            </div>

        );
    }
}

export default Portfolio;
