const express = require('express');
const bodyParser = require('body-parser');
const database = require('./config/database');
var cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());
app.get('/',(req,res)=> res.send('Success'));

database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  app.use('/users', require('./routes/users'));
  app.use('/clinics', require('./routes/clinics'));
  app.use('/doctors', require('./routes/doctors'));
  app.use('/specialties', require('./routes/specialties'));
  app.use('/hours', require('./routes/hours'));
  app.use('/days', require('./routes/days'));
  app.use('/appointmentStates', require('./routes/appointmentStates'));
  app.use('/appointments', require('./routes/appointments'));
  app.use('/schedules', require('./routes/schedules'));
  


  app.listen(PORT,console.log(`Server started on port: ${PORT}`));