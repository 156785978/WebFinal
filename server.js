//function update() {
const express = require('express');
const app = express();
const importdata_ori = require('./bedInfo.json');
const parser = require('./hospitalParser');



app.use(express.json());
app.get('/', (req, res) => {
    res.send("importdata_ori");
})

const port = process.env.PORT || "2000";
var s = app.listen(port, () => console.log('server started on port ' + port));
const time = 1000 * 60 * 5;

setInterval(function () {
    (async () => {

        importdata = await parser();
        console.log('data:', importdata);
        s.close(() => console.log('close'));
        const app = express();
        app.get('/bedInfo', (req, res) => {
            res.send(importdata);
        })
        s = app.listen(port, () => console.log('server started on port ' + port));

        console.log('set again');
    })();
}, time);