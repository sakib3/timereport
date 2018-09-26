const express = require('express');
const app = express();
const config = require('./config');
const router = require('./router');


app.use(express.static('dist'));
app.use('/api',router.api);

app.listen(config.port, function(){
    console.log('App listening on port '+config.port+'!');
});

//bodyParser = require('body-parser'),
//router = require('./router');
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
//app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
//app.listen(8080, () => console.log('Listening on port 8080!'));
