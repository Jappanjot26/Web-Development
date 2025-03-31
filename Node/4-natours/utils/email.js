require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  try {
    // 1. Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jappanjotsingh2416@gmail.com',
        pass: 'grms mtje axgr apde',
      },
    });

    // 2. Define email options
    const mailOptions = {
      from: `jappanjotsingh2416@gmail.com`,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };

    // 3. Actually send the email
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

module.exports = sendEmail;
