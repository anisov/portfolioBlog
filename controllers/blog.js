const http = require('request');

const apiOptions =  require('../config/config');

module.exports.getBlogPage = (req, res) => {
    const pathAPI = '/api/blog';
    const requestOptions = {
      url: apiOptions.server + pathAPI,
      method: 'GET'
    };
    let sendObj = {
      title: 'Мой Блог'
    };
    http(requestOptions, function (error, response, body) {
      res.render('pages/blog', Object.assign(sendObj, JSON.parse(body)));
    })
  }