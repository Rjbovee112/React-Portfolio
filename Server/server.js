var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');
var port = process.env.PORT || 8080;


app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }));


var trasporter = nodeMailer.createTransport({
    host: 'smtp.sendgrid.com',
    port: 587,
    secure: false,
    auth: {
        user: 'Rjbovee112',
        pass: 'Codingmail!62',
    },
});


app.post('/send-email', function (req, res) {
    // send email in here
    var email = req.body.email;
    var subject = req.body.subject
    var body = req.body.body;

    transporter.sendMail({

    })
        .then(function () {
            res.end('Sent.');
        })
        .catch(function (error) {
            console.log(error);
            res.end(error);
        });

});

app.listen(port, function () {
    console.log('App Listening on port ' + port + '.');

});