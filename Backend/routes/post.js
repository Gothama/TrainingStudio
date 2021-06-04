const express = require('express')
const router = express.Router()
const Post = require('../models/post')
const { check, validationResult } = require("express-validator")
const auth = require("../middleware/auth")
const Trainer = require('../models/trainer')
const Customer = require('../models/customer')

//add new Post
router.post("/npost",
    [

        check('postContent', "Blog Content is required").not().isEmpty(),
        check('postImage', "Blog Content is required").not().isEmpty(),
        check('postHeading', "Blog Content is required").not().isEmpty(),
    ], auth,
    function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({
                success: false,
                errors: errors.array()
            });
        }
        else {
            const post = new Post({
                authorID: req.user,
                postContent: req.body.postContent,
                postImage: req.body.postImage,
                postHeading: req.body.postHeading
            })
            Post.create(post).then(function (c) {
                console.log(c)
                res.json("successfull");
            }).catch(err => {
                console.log(err)
                res.send("fail")
            })
        }

    }
)



//get all the Post 
router.post('/', auth, function (req, res, next) {
    Post.find({ authorID: req.user }).then(function (post) {
        console.log(post);
        res.send(post);
    })
})

//delete a Post
router.post('/delete/:id', auth, function (req, res, next) {
    Post.findOneAndDelete({ _id: req.params.id, authorID: req.user }).then(function (post) {
        res.send("Successfull");
    }).catch(err => {
        console.log(err)
        res.send('fail' + err);
    });

})

//get a blog by the publisher
router.post('/getpost', auth, function (req, res, next) {
    console.log(req.body.postID)
    Post.findOne({ _id: req.body.postID, authorID: req.user }).then(function (post) {
        console.log( req.body.postID)
        res.send(post);
    }).catch(err => {
        console.log(err)
        res.send('fail' + err);
    });

})

//get a post 
router.post('/ngetpost', function (req, res, next) {
    Post.findOne({ _id: req.body.id }).populate("authorID").populate("postComments.commentByID").exec((err, post) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(post)
        }
    })
})

//update post
router.post("/updatepost",
    [

        check('postContent', "Blog Content is required").not().isEmpty(),
        check('postImage', "Blog Content is required").not().isEmpty(),
        check('postHeading', "Blog Content is required").not().isEmpty(),
    ], auth,
    function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({
                success: false,
                errors: errors.array()
            });
        }
        else {
            const post = new Post({
                postContent: req.body.postContent,
                postImage: req.body.postImage,
                postHeading: req.body.postHeading,
                postSummary: req.body.postSummary,
                postupdated: new Date()
            })
            Blog.findOneAndUpdate({ _id: req.body.id, authorID: req.user }, {
                postContent: req.body.postContent,
                postImage: req.body.postImage,
                postHeading: req.body.postHeading,
                postupdated: new Date()
            }).then(function (c) {
                console.log(c)
                res.json("successfull");
            }).catch(err => {
                console.log(err)
                res.send("fail")
            })
        }

    }
)

//add comment to post
router.post("/addcomment",
    [
        check('id').not().isEmpty().withMessage("id is required"),
        check('content').not().isEmpty().withMessage("content is required")
    ], auth,
    function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array())
            return res.json({
                success: false,
                errors: errors.array()
            });
        }
        else {
            var k = {
                $push:
                {
                    postComments: [{
                        content: req.body.content,
                        commentByID: req.user
                    }]
                }
            }

            Post.findByIdAndUpdate({ _id: req.body.id },
                k
            ).then(function (c) {
                console.log(c)
                console.log(k)
                res.json("successfull");
            }).catch(err => {
                console.log(err)
                res.send("fail")
            })
        }

    }
)



//get all the post 
router.post('/allPost', function (req, res) {
    Post.find({}).then(function (post) {
        console.log(post);
        res.send(post);
    })
})


router.post('/allPost1', function (req, res) {
    Post.aggregate([
        {
            $lookup:
            {
                from: Trainer.collection.name,
                localField: 'authorID',
                foreignField: '_id',
                as: 'authorDetails'
            }
        }

    ]).then(function (post) {
        console.log(post);
        res.send(post);
    })
})

module.exports = router