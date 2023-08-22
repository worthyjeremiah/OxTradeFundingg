const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const { name, subject, email, message } = req.body;

  // Configure the SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'your-smtp-host',
    port: 587,
    secure: false,
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password',
    },
  });

  // Prepare the email
  const mailOptions = {
    from: email,
    to: 'support@oxtradefunding.com',
    subject: subject,
    text: Name: ${name}\nEmail: ${email}\nMessage: ${message},
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('An error occurred while sending the email.');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully!');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
