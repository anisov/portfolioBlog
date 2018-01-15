const nodemailer = require('nodemailer');
const config = require('../config/config')

module.exports.getWorksPage= (req, res) => {
    res.render('pages/work', { title: 'Мои работы', msg: req.query.msg })
};
    

module.exports.sendEmail = (req, res) => {
    if( !req.body.name || !req.body.email || !req.body.comment){
        return res.redirect('/works?msg=Все поля нужно заполнить')
    }
    const transporter = nodemailer.createTransport(config.mail.smtp);
    const mailOptions = {
        from: `"${req.body.name}" <${req.body.email}>`,
        to: config.mail.smtp.auth.user,
        subject: config.mail.subject,
        text: req
          .body
          .comment
          .trim()
          .slice(0, 500) + `\n Отправлено с: <${req.body.email}>`
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res.redirect('/works?msg=При отправке письма произошла ошибка: ' + error.message);
        }
        res.redirect('/works?msg=Письмо успешно отправлено');
      });

};