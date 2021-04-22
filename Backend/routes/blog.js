const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')
const {check, validationResult} = require("express-validator")

//add new blog
router.post("/nblog",
[
    check('authorID' , "authorID is required").not().isEmpty(),
    check('blogContent', "Blog Content is required").not().isEmpty(),

],
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
                authorID:req.body.authorID,
                blogContent:req.body.blogContent,
                blogImage:req.body.blogImage
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
   router.get('/', function(req, res, next){
    Blog.find({}).then(function(blog){
      res.send(blog);
    })
  })

  //delete a blog
  router.delete('/delete/:id', function(req, res, next){
    Blog.findByIdAndRemove({_id:req.params.id}).then(function(blog){
      res.send("Successfull");
    }).catch(err=>{
        console.log(err)
        res.send('fail' + err);
    });
  
  })

module.exports = router