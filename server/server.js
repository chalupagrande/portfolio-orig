const express = require('express');
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./connections/db');
const ApiRouter = require('./routers/ApiRouter');
// const express_enforces_ssl = require('express-enforces-ssl');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

// app.enable('trust proxy');
// app.use(express_enforces_ssl());


const frontEndRoutes = ['/', '/about'];
frontEndRoutes.map(route => app.use(route, express.static('build')));

app.get('/test', (req, res) => {
  res.send('ok');
});

app.get('/house', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/sudo.html'));
})


app.use('/api', ApiRouter);

app.listen(port);
console.log(`**************** LOGS ***************
  Server Started: ${new Date()}
  listening on port: ${port}
  ~~~~~
`);
