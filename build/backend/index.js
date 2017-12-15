'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _connectMongo = require('connect-mongo');

var _connectMongo2 = _interopRequireDefault(_connectMongo);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = 3000;

app.use(_bodyParser2.default.json());
app.use((0, _morgan2.default)('dev'));

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.set('debug', true);
var db = _mongoose2.default.connection;
_mongoose2.default.connect('mongodb://localhost/Webdefineder', function (err, db) {
    if (err) {
        console.error(err);
    } else {
        console.log('connected to mongodb server');
    }
});

var MongoStore = (0, _connectMongo2.default)(_expressSession2.default);

app.use((0, _expressSession2.default)({
    secret: 'pB32o3i4le32r32AFSpp@#@$',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 365 * 24 * 60 * 60 * 1000
    },
    store: new MongoStore({
        mongooseConnection: _mongoose2.default.connection,
        ttl: 365 * 24 * 60 * 60
    })
}));

app.use('/api', _routes2.default);

//client side routing support

app.use('/', _express2.default.static(__dirname + '/../frontend'));
app.use('/home', _express2.default.static(__dirname + '/../frontend'));
app.use('/jobs', _express2.default.static(__dirname + '/../frontend'));
app.use('/works', _express2.default.static(__dirname + '/../frontend'));
app.use('/jobs/:num', _express2.default.static(__dirname + '/../frontend'));
app.use('/detail/:num/:id', _express2.default.static(__dirname + '/../frontend'));
app.use('/faq', _express2.default.static(__dirname + '/../frontend'));

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../frontend/index.html'));
});

app.listen(port, function () {
    console.log('Express is running on port', port);
});