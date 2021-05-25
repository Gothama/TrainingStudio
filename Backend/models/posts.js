const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
   authorID:{
      type: mongoose.Schema.ObjectId, ref: 'Trainer'
   },
   postContent:{
    type:String,
    required:true
   },
    postImage:{
        type:String
    },
    postHeading:{
        type:String,
        required:true
    },
    postupdated:{
        type:Date, default:Date.now
    },
    publishedDate:{type:Date, default:Date.now},
    postComments:[
		{
			commentByID:{type: mongoose.Schema.ObjectId, ref: 'Customer'},
			content:{type:String},
			date:{type:Date, default:Date.now}
		}
	],
    postlike:[{
            likeByID:{type: mongoose.Schema.ObjectId, ref: 'Customer'}
    }]
})

module.exports = mongoose.model('Post', postSchema)