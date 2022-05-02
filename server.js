const express = require('express');
const app = express();
const cors = require('cors');
const globalConfig = require('./src/config/global-config');
const bodyParser = require('body-parser')
const sessionConfig = require('./src/config/session-config');

//const nodeServerRouter = require('./src/router/node-server-router')
//const externApiRouter = require('./src/router/extern-api-router');
const sessionRouter = require('./src/router/session-router');
const apartmentRouter = require('./src/router/apartment-router');
app.use(cors(globalConfig.cors));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(sessionConfig);

//nodeServerRouter(app);
//externApiRouter(app);
sessionRouter(app);
apartmentRouter(app);

app.listen(globalConfig.port, ()=>{
    console.log(`-=-=-=Server Is Opened : Port ${globalConfig.port} : toy-project-backend=-=-=-`)
})
