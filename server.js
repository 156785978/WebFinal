const express = require('express');
const app = express();
const importdata = require('./bedInfo.json');
const parser = require('./hospitalParser');
app.use(express.json());
app.get('/', (req, res) => {
    res.send(importdata);
})

const port = process.env.PORT || "2000";
app.listen(port, () => console.log('server started on port ' + port));
const time = 1000 * 60 * 5;
//parser();
setInterval(parser, time);