const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')
const {check, validationResult} = require("express-validator")
const auth = require("../middleware/auth")
const Trainer = require('../models/trainer')
const Customer = require('../models/customer')

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
/*router.put('/addcomment', 
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
   }})*/

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

    //get a blog by the publisher
    router.post('/getblog', auth , function(req, res, next){
        Blog.findOne({_id:req.body.id, authorID:req.user}).then(function(blog){
            console.log(blog)
          res.send(blog);
        }).catch(err=>{
            console.log(err)
            res.send('fail' + err);
        });
      
      })

    //get a blog 
    router.post('/ngetblog' , function(req, res, next){
        Blog.findOne({_id:req.body.id}).then(function(blog){
            console.log(blog)
            if(blog!==null){
               Trainer.findById({_id:blog.authorID}).then(function(trainer){
                res.json({"Blog":blog, "authorName":trainer.name})
            }).catch(err=>{
                console.log(err)
                res.send('fail' + err);
            });
            }
            else{
                res.json({"Blog":"No Blog"})
            }
            
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

  //add comment to blog
  router.post("/addcomment",
  [
    check('id').not().isEmpty().withMessage("id is required"),
      check('content').not().isEmpty().withMessage("content is required")
  ],auth,
      function(req, res){
          const errors = validationResult(req);
          if(!errors.isEmpty()){
              console.log(errors.array())
              return res.json({
                  success:false,
                  errors:errors.array()
              });
          }
          else{
            var k = {$push: 
                {
                    blogComments:[{
                        content:req.body.content,
                        commentByID:req.user
                    }]
                }
            }
              
              Blog.findByIdAndUpdate({_id:req.body.id}, 
               k
                  ).then(function(c){
                  console.log(c)
                  console.log(k)
                  res.json("successfull");
              }).catch(err=>{
                  console.log(err)
                  res.send("fail")
              })
          }
          
      }
  )

  router.post("/profilePhoto",
  function(req, res){
      Customer.findById({_id:req.body.id}).then(function(c){
         if(c!==null) {res.send(c.profilephotolink)}
         else{
             Trainer.findById({_id:req.body.id}).then(function(t){
                 if(t!==null){
                     console.log(t.profilephotolink)
                     const k = "'" +t.profilephotolink+ "'"
                     res.send(k)
                    }
                 
             })
         }
          
      }).catch(err=>{
        console.log(err)
        res.send("fail")
    })
  }
  
  
  )

  
//get all the blogs 
router.post('/allBlogs',  function(req, res){
    Blog.find({ }).then(function(blog){
        console.log(blog);
      res.send(blog);
    })
  })


  router.post('/allBlogs1',  function(req, res){
    Blog.aggregate([
        { $lookup:
            {
              from: Trainer.collection.name,
              localField: 'authorID',
              foreignField: '_id',
              as: 'authorDetails'
            }
          }

    ]).then(function(blog){
        console.log(blog);
      res.send(blog);
    })
  })

module.exports = router