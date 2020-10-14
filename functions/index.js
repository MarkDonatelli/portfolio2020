const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
admin.initializeApp()

const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: 'apikey',
    pass: 'apiSecret',
  },
})

exports.sendEmail = functions.https.onRequest((request, response) => {
  // eslint-disable-next-line camelcase
  const email_from = request.query.email_from
  const message = request.query.message
  const name = request.query.name

  const mailOptions = {
    from: 'Mark Donatelli <markdonatelli3@gmail.com>',
    to: 'markdonatelli3@gmail.com',
    subject: 'Mark Donatelli Portfolio Contact',
    // eslint-disable-next-line camelcase
    html: `From: ${name} <br><br> Email: ${email_from} <br><br> Message: ${message}`,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log(
        // eslint-disable-next-line camelcase
        `ERROR: (name) ${name} --- (email) ${email_from} --- (message) ${message} --- (error) ${error.toString()}`
      )
      response.send(error.toString())
    }
    response.send('message submitted successfully!')
  })
})
