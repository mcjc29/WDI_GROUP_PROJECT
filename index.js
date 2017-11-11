const express         = require('express');
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const router          = require('./config/routes');
const { db, port }    = require('./config/environment');
const customResponses = require('./lib/customResponses');
const errorHandler    = require('./lib/errorHandler');
const cors            = require('cors');
<<<<<<< HEAD
const mongoose        = require('mongoose');
mongoose.Promise      = require('bluebird');
=======
>>>>>>> 517627f675d534c456a789fbb6e7038928b26e12

const app             = express();
const environment     = app.get('env');

mongoose.connect(db[environment], { useMongoClient: true });

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.use(customResponses);
app.use('/api', router);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.use(errorHandler);

if(environment !== 'test') {
  app.listen(port, () => console.log(`Express is up and running on port: ${port}`));
}

module.exports = app;
