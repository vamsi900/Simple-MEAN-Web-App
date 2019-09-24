var mongoose = require('mongoose');


var dbUrl = ""

var db = function() {
  var initFlag = false;
  return {

    config: function(addr, dbname, opts, callback) {
      if( !initFlag ){
        var connectUrl = dbUrl;
        mongoose.connect(connectUrl, (opts ? opts : {}));

        var db = mongoose.connection;
          console.log("data Base URI--",connectUrl)
        db.on('error', function(err) {
          // Connection Error
          console.log('Mongodb error encountered [' + err + ']');

          if (callback) {
            callback('ERR-MONGODB', 'mongodb - '+err.message);
          }
        });

        db.once('open', function() {
          initFlag = true;
          if (callback) callback(null);
        });
      } else {
        if (callback) callback(null);
      }
    }
  };
};

module.exports = db();