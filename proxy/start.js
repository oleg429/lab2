const app = require('./server.js');
var config = require('./config.js');

app.listen(3001, () => {
    console.log('Server start at localhost:3001');
});
