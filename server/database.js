const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud-emloyees';

mongoose.connect(URI)
    .then(db => console.log('Db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;