'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _schemaInspector = require('schema-inspector');

var _schemaInspector2 = _interopRequireDefault(_schemaInspector);

var _Post = require('../models/Post');

var _Post2 = _interopRequireDefault(_Post);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', function (req, res) {
    var body = req.body;

    if (validateWrite(body).error.length > 0) {
        return res.status(400).json({ code: 0, message: 'INVALID REQUEST' });
    }

    var newPost = new _Post2.default();
    newPost.title = body.title;
    newPost.writer = body.writer;
    newPost.type = body.type;
    newPost.content = body.content;

    newPost.save();
    return res.status(200).json({ success: true });
});

function validateWrite(body) {
    var validation = {
        type: 'object',
        properties: {
            title: {
                type: 'string',
                maxLength: 30,
                minLength: 1
            },
            writer: {
                type: 'string',
                maxLength: 10,
                minLength: 1
            },
            content: {
                type: 'string',
                maxLength: 100000,
                minLength: 1
            }
        }
    };
    return _schemaInspector2.default.validate(validation, body);
}

router.get('/total', function (req, res) {
    // Post.getCount()
    // .then(
    //     count => {
    //         return res.status(200).json({
    //             count: count
    //         })
    //     }
    // )
    // .error(
    //     error => {
    //         console.error(error);
    //         return res.status(500).json({
    //             error: 'INITIAL SERVER ERROR'
    //         })
    //     }
    // )
    _Post2.default.count({}).exec().then(function (count) {
        return res.json({
            count: count / 5
        });
    }).catch(function (err) {
        return res.status(500).json({
            success: false
        });
    });
});

router.get('/', function (req, res) {
    _Post2.default.find().sort({ "_id": -1 }).limit(5).exec(function (err, posts) {
        if (err) throw err;
        res.json(posts);
    });
});

router.get('/:id', function (req, res) {
    var id = req.params.id;

    id *= 5;
    id -= 5;
    _Post2.default.find().sort({ "_id": -1 }).skip(id).limit(5).exec(function (err, post) {
        return res.json(post);
    });
});

router.get('/detail/:id', function (req, res) {
    var id = req.params.id;

    _Post2.default.find({ "_id": id }).exec().then(function (post) {
        return res.json(post);
    }).catch(function (error) {
        return res.status(500).json({
            code: 1
        });
        console.error(error);
    });
});

router.get('/detail/views/:id', function (req, res) {
    var id = req.params.id;

    _Post2.default.findById(id).exec().then(function (post) {
        post.views = post.views += 1;
        post.save();
        return res.status(200);
    }).catch(function (err) {
        console.error(err);
        return res.status(500);
    });
});

router.delete('/:id', function (req, res) {
    if (!_mongoose2.default.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            code: 0
        });
    }

    _Post2.default.findById(req.params.id).exec().then(function (post) {
        if (!post) {
            return res.status(404).json({
                code: 1
            });
        }
        _Post2.default.remove({ _id: req.params.id }).exec().then(function () {
            res.json({ success: true });
        }).catch(function (err) {
            console.error(err);
        });
    }).catch(function (err) {
        console.error(err);
        return res.status(500).send('/api/post/:id delete error');
    });
});

exports.default = router;