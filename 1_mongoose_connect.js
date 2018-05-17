var consts = require('./consts');
var mongoose = require('mongoose');
mongoose.connect(consts.MLAB_KEY)
.then(
 () => {
 console.log('connected');
 mongoose.disconnect();
 },
 err => {
 console.log(`connection error: ${err}`);
 }
 );