import express from 'express';
import inspector from 'schema-inspector';
import Post from '../models/Post';
import mongoose from 'mongoose';
const router = express.Router();


router.post('/', (req, res) => {
    const body = req.body;

    if(validateWrite(body).error.length > 0){
        return res.status(400).json({code: 0, message: 'INVALID REQUEST'})
    }

    let newPost = new Post();
    newPost.title = body.title
    newPost.writer = body.writer
    newPost.type = body.type
    newPost.content = body.content
    
    newPost.save()
    return res.status(200).json({success: true})
});

function validateWrite(body){
    const validation = {
        type: 'object',
        properties: {
            title: {
                type: 'string',
                maxLength: 100,
                minLength: 1
            },
            writer: {
                type: 'string',
                maxLength: 100,
                minLength: 1
            },
            content: {
                type: 'string',
                maxLength: 1000,
                minLength: 1
            }
        }
    }
    return inspector.validate(validation, body)
}

router.get('/total', (req,res) => {
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

    Post.count({}, (err, count) => {
        if(err){
            return res.status(500).json({
                success: false
            })
        }else{
            return res.status(200).json({
                success: true,
                count
            })
        }
    })
})

router.get('/', (req,res) => {
    Post.find()
    .sort({"_id": -1})
    .limit(5)
    .exec((err, posts) => {
        if(err) throw err;
        res.json(posts)
    })
})

router.get('/:id', (req,res) => {
    let id = req.params.id;

    id *= 6;
    id -= 6;
    Post.find().sort({"_id": -1}).skip(id).limit(5).exec((err, post) => {
        return res.json(post)
    })
})

router.get('/detail/:id', (req,res) => {
    let id = req.params.id;

    Post.find({"_id": id}).exec()
    .then(
        (post) => {
            return res.json(post)
        }
    )
    .catch(
        (error) => {
            return res.status(500).json({
                code: 1
            })
            console.error(error)
        }
    )
})

export default router;