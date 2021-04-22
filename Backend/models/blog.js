const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
   authorID:{
       type:String,
       required:true
   },
   blogContent:{
    type:String,
    required:true
   },
    blogImage:{
        type:String
    },
    publishedDate:{type:Date, default:Date.now},
    blogComments:[
		{
			commentByID:{type:String},
			content:{type:String},
			date:{type:Date, default:Date.now}
		}
	]
})

module.exports = mongoose.model('Blog', blogSchema)