import React from 'react';
import './contact.css';


class Email extends React.Component {
    state = {
        disabled: false,
    }

    handleSubmit = (event) => {
        this.setState({ disabled: true });
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

            .then(() => {
                return this.props.history.push('/index');
            })
            .catch((error) => {
                alert(error);

                this.setState({ disabled: false });

            });

    }



    componentDidMount() {
        var body = document.querySelector('body');

        body.style.backgroundImage = 'url("./assets/tree-20-percent-OP.jpg")';
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundPosition = 'center';
    }


    render() {
        const { disabled } = this.state;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>


                    <h2 className="emailtext">Send e-mail to rjbovee112@gmail.com:</h2>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" name="email" disabled={disabled} className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text" name="subject" disabled={disabled} className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Body</label>
                        <textarea name="body" disabled={disabled} className="form-control" rows="6"></textarea>
                    </div>

                    <br></br>
                    <button className="button" type="submit">Submit</button>

                </form>
            </div >


        )
    }
}

export default Email;