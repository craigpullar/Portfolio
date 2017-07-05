let nodemailer = require("nodemailer");



let email = (email_pass, from, name, message) => {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'craigmichaelpullar',
			pass: email_pass
		}
	});
	let mailOptions = {
		from: from,
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
