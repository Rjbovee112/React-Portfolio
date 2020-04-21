import React from 'react';

class Home extends React.Component {
    componentDidMount() {
        var body = document.querySelector('body');

        body.style.backgroundImage = 'url("./assets/grayscale-photo-of-tree-on-a-snow-covered-field-3593865.jpg")';
        body.style.backgroundSize = 'cover';
    }

    render() {
        return <div />;
    }
}
export default Home;