import React from 'react';

class Home extends React.Component {
    componentDidMount() {
        var body = document.querySelector('body');
        

        body.style.backgroundImage = 'url("./assets/greyscalehome.jpg")';
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundPosition = 'center';


    }

    render() {
        return <div />;
    }
}
export default Home;