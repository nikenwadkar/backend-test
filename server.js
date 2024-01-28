const express = require("express");
const cors = require("cors");

// * FOR GLOBAL EXCEPTION HANDLING * //
// var dbConn = require('./config/db.config');
process.on('uncaughtException', (err) => {

    console.error('An uncaught exception occurred:');
    console.error(err);
});
// * END * //

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // Changes for the api heathcheck
    res.send({ status: "OK" });
});

const AppointmentsRoutes = require('./Appointments/src/routes/appointments.route.js');
app.use('/api/v1/appointments', AppointmentsRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});