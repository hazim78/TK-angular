const functions = require('firebase-functions');

const express = require("express")

var whitelist = ['http://localhost:4200']
var corsOptions = {
  origin: function (origin, callback){
    if(whitelist.indexOf(origin) !== 1){
      callback(null, true)
    }else{
      callback(new Error('Not allowed by CORS ('+origin+')'))
    }
  }
}

const cors = require('cors')(corsOptions);

const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey("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")

const app1 = express()
app1.use(cors);

app1.get("/send", (request,response) => {
  response.send("Hello world!")
})

app1.post("/sendMail", (request, response) => {
  const msg = {
    to: request.body.to,
    from: request.body.from,
    subject: request.body.subject,
    text: request.body.content,
    html: request.body.htmlcontent ? request.body.htmlcontent : request.body.content
  };
  sgMail.send(msg);
  response.status(200).json("Its good");
})

const api = functions.https.onRequest(app1)

module.exports = {
  api
}
// function parseBody(body) {
//   var helper = sendgrid.mail;
//   var fromEmail = new helper.Email(body.from);
//   var toEmail = new helper.Email(body.to);
//   var subject = body.subject;
//   var content = new helper.Content('text/html', body.content);
//   var mail = new helper.Mail(fromEmail, subject, toEmail, content);
//   return  mail.toJSON();
// }
//
//
// exports.httpEmail = functions.https.onRequest((req, res) => {
//   return Promise.resolve()
//     .then(() => {
//       if (req.method !== 'POST') {
//         const error = new Error('Only POST requests are accepted');
//         error.code = 405;
//         throw error;
//       }
//
//
//       const request = client.emptyRequest({
//         method: 'POST',
//         path: '/v3/mail/send',
//         body: parseBody(req.body)
//       });
//
//       return client.API(request)
//
//
//     })
//     .then((response) => {
//       if (response.body) {
//         res.send(response.body);
//       } else {
//         res.end();
//       }
//     })
//
//     .catch((err) => {
//       console.error(err);
//       return Promise.reject(err);
//     });
//
//
// })
