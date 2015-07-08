(function () {
  'use strict';
  var express = require('express'),
    app = express(),
    contacts = [
      {name: "Bobby-j"},
      {name: "Franklin"}
    ];

  app.get('/contacts', function (req, res) {
    res.status(200).json(contacts);
  });
  app.listen(9001);
}());
