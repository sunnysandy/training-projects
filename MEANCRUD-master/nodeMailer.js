var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port:587,
    secure: true,
  service: 'gmail',
  auth: {
    user: 'as.prasad50@gmail.com',
    pass: 'indasp11'
  }
});

var mailOptions = {
  from: 'as.prasad50@gmail.com',
  to: 'shivaprasad.aluri@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});