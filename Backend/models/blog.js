const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
   authorID:{
      type: mongoose.Schema.ObjectId, ref: 'Trainer'
   },
   blogContent:{
    type:String,
    required:true
   },
    blogImage:{
        type:String
    },
    blogHeading:{
        type:String,
        required:true
    },
    blogSummary:{
        type:String,
        required:true
    },
    blogupdated:{
        type:Date, default:Date.now
    },
    publishedDate:{type:Date, default:Date.now},
    blogComments:[
		{
			commentByID:{type: mongoose.Schema.ObjectId, ref: 'Customer'},
			content:{type:String},
			date:{type:Date, default:Date.now}
		}
	],
    bloglike:[{
            likeByID:{type: mongoose.Schema.ObjectId, ref: 'Customer'}
    }]
})

module.exports = mongoose.model('Blog', blogSchema)