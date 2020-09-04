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

//app.use('/roles', require('./routes/roles'));
  //app.use('/tags',require('./routes/tags'));
  //app.use('/categories',require('./routes/categories'));
  //app.use('/products', require('./routes/products'));
  //app.use('/driverReviews', require('./routes/driverReviews'));
  //app.use('/stores', require('./routes/stores'));
  //app.use('/storeCategories', require('./routes/storeCategories'));
  //app.use('/storeReviews', require('./routes/storeReviews'));
  //app.use('/storeTags', require('./routes/storeTags'));
  //app.use('/addresses', require('./routes/adresses'));
  app.use('/users', require('./routes/users'));
  app.use('/clinics', require('./routes/clinics'));
  app.use('/doctors', require('./routes/doctors'));
  app.use('/specialties', require('./routes/specialties'));
  


  app.listen(PORT,console.log(`Server started on port: ${PORT}`));