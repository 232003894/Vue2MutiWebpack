var express = require('express')
var opn = require('opn')
var getPath = require('./utils-doc').getPath

var app = express()
var port = '8999'
var uri = 'http://127.0.0.1:' + port + '/#/md/api.md'
app.use(express.static(getPath(`../docs`)))
app.listen(port)
console.log('打开' + uri)
opn(uri)
