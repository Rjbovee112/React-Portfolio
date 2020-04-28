import React from 'react';


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
                subject: document.querySelector('input[name"subject"]').value,
                body: document.querySelector('input[name="body"]').value,
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


                    <h2>Send e-mail to RJBOVEE112@GMAIL.COM:</h2>

                    <input name="email" className="form-control" />
                    <input name="subject" className="form-control" />
                    <input name="body" className="from-contorl" />
                    <button type="submit">Submit</button>

                </form>
            </div>


        )
    }
}

export default Email;