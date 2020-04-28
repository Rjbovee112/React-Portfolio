import React from 'react';
import './contact.css';


class Email extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();

        fetch('/send-email', {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: document.querySelector('input[name="email"]').value,
                subject: document.querySelector('input[name="subject"]').value,
                body: document.querySelector('textarea[name="body"]').value,
            })
        })
    }



    componentDidMount() {
        var body = document.querySelector('body');

        body.style.backgroundImage = 'url("./assets/tree-20-percent-OP.jpg")';
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundPosition = 'center';
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>


                    <h2 className="emailtext">Send e-mail to rjbovee112@gmail.com:</h2>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" name="email" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text" name="subject" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Body</label>
                        <textarea name="body" className="form-control" rows="6"></textarea>
                    </div>

                    <br></br>
                    <button className="button" type="submit">Submit</button>

                </form>
            </div >


        )
    }
}

export default Email;