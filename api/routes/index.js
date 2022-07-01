const bodyParser = require('bodyParser');

module.exports = app => {
    app.use(bodyParser.json());
    app.get('/', (req, res) => res.send('Olá!'));
    }