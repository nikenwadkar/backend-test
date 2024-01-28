"use strict";
// var dbConn = require('../../../Authentication/config/db.config');
// var dbConn = require("../../../config/db.config");
var Appointments = function (appointments) {};

Appointments.findall = function (req, result) {
  let appObject = [{name: "Appointment1",date: "25-Jan-2024",time: "04:30 PM"}, {name: "Appointment2",date: "26-Jan-2024",time: "04:30 PM"}]
  result(null, appObject);
};

module.exports = Appointments;
