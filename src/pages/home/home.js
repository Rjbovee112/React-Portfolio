import React from 'react';
import "../home/homestyle.css"

class Home extends React.Component {
    componentDidMount() {
        var body = document.querySelector('body');


        body.style.backgroundImage = 'url("./assets/littleTree-20.jpg")';
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundPosition = 'center';


    }

    render() {
        return <div>
            <img id="loading" src="./assets/logo-one.png"></img>
        </div>
    }
}
export default Home;