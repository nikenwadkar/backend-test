const express = require("express");
// const authJwt = require("../../../Authentication/src/middleware/auth.middleware");
// const authJwt = require("../../../config/auth.middleware");
const router = express.Router();

const appointmentsController = require("../controllers/appointments.controller.js");

router.get("/", appointmentsController.findall);

module.exports = router;
