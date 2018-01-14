const nodemailer = require('nodemailer');
const config = require('../config/config')

module.exports.getIndex = (req, res, next) => {
  res.render('pages/index', {
    title: 'Авторизация',
    msg: req.query.msg
  });
};
const http = require('request');

const apiOptions =  require('../config/config');

module.exports.authorization = function (req, res) {
  if (!req.body.login || !req.body.password) {
    return res.redirect('/?msg=Все поля обязательны к заполнению!');
  }
  if (req.body.bool === 'False' || req.body.bool === 'undefined' || !req.body.check){
    return res.redirect('/?msg=Вы робот, я точно знаю!');
  }
  const pathApi = '/api/user';
  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: "POST",
    json: {
      login: req.body.login,
      password: req.body.password
    }
  };
  http(requestOptions, function (error, response, body) {
    if (body.status === 'err') {
      return res.redirect(`/?msg=${body.message}`);
    }
    req.session.isAdmin = true;
    res.redirect('/admin');
  });
};
