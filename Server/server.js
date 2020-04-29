require('dotenv').config()
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');
var port = process.env.PORT || 8080;


app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('build'));


var transporter = nodeMailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,
    auth: {
        user: process.env.user,
        pass: process.env.pass,
    },
});


app.post('/send-email', function (req, res) {
    // send email in here
    var email = req.body.email;
    var subject = req.body.subject
    var body = req.body.body;
    console.log(req.body)

    transporter.sendMail({
        from: 'Bovee.work@gmail.com',
        to: 'Bovee.work@gmail.com',
        subject: subject,
        text: `
            Email: ${email}
            Body: ${body}
     `,

    })
        .then(function (sentEmail) {
            console.log(sentEmail)
            res.end('Sent.');
            console.log('then')
        })
        .catch(function (error) {
            console.log(error);
            res.end(error);
            console.log('catch')
        });

});

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
})

app.listen(port, function () {
    console.log('App Listening on port ' + port + '.');
});