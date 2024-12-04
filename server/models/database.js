const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://amoghamith22:Guruvani5@cluster0.co9jvfi.mongodb.net/?retryWrites=true&w=majority");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');