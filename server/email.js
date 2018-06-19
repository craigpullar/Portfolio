const mail_list = require('./mail_list.json');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const fs = require('fs');

const saveUserToMailList = ({ name, email, optOut }) => {
    const user = { name, email, optOut };
    mail_list.push(user);
    const mailListJson = JSON.stringify(mail_list);
    fs.writeFile('./server/mail_list.json', mailListJson, 'utf8', () => {});
};

const sendEmail = ({
    email_pass, from, name, message, optOut,
}) => {
    !optOut && saveUserToMailList({
        name,
        email: from,
        optOut,
    });

    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'craigpullarus',
            pass: email_pass,
        },
    }));

    const mailOptions = {
        from,
        to: 'craigmichaelpullar@gmail.com',
        subject: `Inquiry from ${name}`,
        text: `Email: ${from} sent the following message: ${message}`,
    };

    return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent: ${info.response}`);
        }
    });
};

module.exports = sendEmail;
