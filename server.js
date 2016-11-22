var app = require('express')();
var http = require('http').Server(app);

app.get('/GetOrdersCount', function (req, res) {
    var uri = 'https://08bdb249b92b67b005959abaecc386d4:42f34ed5b53d0b0bd0292fdb9a463233@questnutrition.myshopify.com/admin/orders/count.json?financial_status=authorized';
    var request = require("request");

    request(uri, function (error, response, body) {
        res.send(body);
    }); 
});

var ip = "54.200.234.170";
var port = 3000;

http.listen(port, ip, function () {
    console.log('listening on *: ' + port);
});
