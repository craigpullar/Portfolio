const mail_list = require('./mail_list.json');
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');
var fs = require('fs');


let email = (email_pass, from, name, message, optOut) => {

let user = {
	"name" : name,
	"email" : from,
	"optOut" : optOut,
};
mail_list.push(user);
let json = JSON.stringify(mail_list);
fs.writeFile('mail_list.json', json, 'utf8', () => {

});

	let transporter = nodemailer.createTransport(smtpTransport({
		service: 'gmail',
		host: 'smtp.gmail.com',
		auth: {
			user: 'craigpullarus',
			pass: email_pass,
		}
	}));
	let mailOptions = {
		from,
		to: 'craigmichaelpullar@gmail.com',
		subject: `Inquiry from ${name}`,
		text: `Email: ${from} sent the following message: ${message}`
	};
	return transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
}

module.exports = email;
