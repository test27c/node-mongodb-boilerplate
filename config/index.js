var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd  + '@ds139124.mlab.com:39124/todoapi27c';
    }

}