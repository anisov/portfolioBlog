const http = require('request');

const apiOptions =  require('../config/config');

module.exports.getAboutPage = (req, res) => {
    const pathAPI = '/api/skill';
    const requestOptions = {
      url: apiOptions.server + pathAPI,
      method: 'GET'
    };
    let sendObj = {
      title: 'Обо мне'
    };
    http(requestOptions, function (error, response, body) {
      res.render('pages/about', Object.assign(sendObj, JSON.parse(body)));
    })
  }