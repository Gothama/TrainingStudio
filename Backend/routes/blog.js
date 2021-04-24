const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')
const {check, validationResult} = require("express-validator")
const auth = require("../middleware/auth")

//add new blog
router.post("/nblog",
[
    
    check('blogContent', "Blog Content is required").not().isEmpty(),
    check('blogImage', "Blog Content is required").not().isEmpty(),
    check('blogHeading', "Blog Content is required").not().isEmpty(),
    check('blogSummary', "Blog Summary is required").not().isEmpty()
],auth,
    function(req, res){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.json({
                success:false,
                errors:errors.array()
            });
        }
        else{
            const blog = new Blog({
                authorID:req.user,
                blogContent:req.body.blogContent,
                blogImage:req.body.blogImage,
                blogHeading:req.body.blogHeading,
                blogSummary:req.body.blogSummary
            })
            Blog.create(blog).then(function(c){
                console.log(c)
                res.json("successfull");
            }).catch(err=>{
                console.log(err)
                res.send("fail")
            })
        }
        
    }
)

//add comment
router.put('/addcomment', 
   [
    check('commentByID' , "commentByID is required").not().isEmpty(),
    check('content' , "content should be numeric").not().isEmpty(),
    ],
    function(req, res, next){
    const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.json({
                success:false,
                errors:errors.array()
            });
        }
        else
    {

    var k = {$push: 
            {
                blogComments:[{
                    commentByID:req.body.commentByID,
                    content:req.body.content
                }]
            }
        }
 
     Blog.findByIdAndUpdate({
                                 _id:req.body.id  
                            }, k ).then(function(c){
                                    console.log(c);
                                    res.json(c);
                            }).catch(err=>{
                                console.log(err)
                                res.send('fail' + err);
                            });
   }})

//get all the blogs 
   router.post('/',auth ,  function(req, res, next){
    Blog.find({authorID:req.user  }).then(function(blog){
        console.log(blog);
      res.send(blog);
    })
  })

  //delete a blog
  router.post('/delete/:id', auth , function(req, res, next){
    Blog.findOneAndDelete({_id:req.params.id, authorID:req.user}).then(function(blog){
      res.send("Successfull");
    }).catch(err=>{
        console.log(err)
        res.send('fail' + err);
    });
  
  })

    //get a blog
    router.post('/getblog', auth , function(req, res, next){
        Blog.findOne({_id:req.body.id, authorID:req.user}).then(function(blog){
          res.send(blog);
        }).catch(err=>{
            console.log(err)
            res.send('fail' + err);
        });
      
      })

  //update blog
router.post("/updateblog",
[
    
    check('blogContent', "Blog Content is required").not().isEmpty(),
    check('blogImage', "Blog Content is required").not().isEmpty(),
    check('blogHeading', "Blog Content is required").not().isEmpty(),
    check('blogSummary', "Blog Summary is required").not().isEmpty()
],auth,
    function(req, res){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.json({
                success:false,
                errors:errors.array()
            });
        }
        else{
            const blog = new Blog({
                blogContent:req.body.blogContent,
                blogImage:req.body.blogImage,
                blogHeading:req.body.blogHeading,
                blogSummary:req.body.blogSummary,
                blogupdated:new Date()
            })
            Blog.findOneAndUpdate({_id:req.body.id, authorID:req.user}, {blogContent:req.body.blogContent,
                blogImage:req.body.blogImage,
                blogHeading:req.body.blogHeading,
                blogSummary:req.body.blogSummary,
                blogupdated:new Date()}).then(function(c){
                console.log(c)
                res.json("successfull");
            }).catch(err=>{
                console.log(err)
                res.send("fail")
            })
        }
        
    }
)

module.exports = router