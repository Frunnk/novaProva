var express = require('express');

var app = express();


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/apk/app_update.xml', function (req, res) {
    console.log("XML")
    res.sendFile('C:/Users/TOSHIBA/Desktop/aletheia-server/apk/app_update.xml')
    //res.send('Hello World!');
});
app.get('/apk/aletheia.apk', function (req, res) {
    console.log("APK")
    res.sendFile('C:/Users/TOSHIBA/Desktop/aletheia-server/apk/aletheia.apk')
    //res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
