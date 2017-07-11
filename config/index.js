var config = require('./config');
// mongolab url you can get a free hosting here https://mlab.com/
module.exports = {
    getDbConnectionString: function () {
        return 'mongodb://' + config.username + ':' + config.password + '@your_url_mlab';
    }

}