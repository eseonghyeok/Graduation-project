const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = mongoose.Schema({
    writer: {
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type:String,
        maxlength:50,
    },
    description: {
        type: String,
    },
    // privacy: { 비밀글용도
    //     type: Number,
    // },
    filePath : {
        type: String,
    },
    views : {
        type: Number,
        default: 0 
    }
}, { timestamps: true })
  
//var Counter = require('./Counter');게시물수

// schema
// var boardSchema = mongoose.Schema({
//   title:{type:String, required:[true,'Title is required!']},
//   body:{type:String, required:[true,'Body is required!']},
//   author:{type:mongoose.Schema.Types.ObjectId, ref:'user', required:true},
//   views:{type:Number, default:0},
//   numId:{type:Number},
//   attachment:{type:mongoose.Schema.Types.ObjectId, ref:'file'},
//   createdAt:{type:Date, default:Date.now},
//   updatedAt:{type:Date},
// });

// postSchema.pre('save', async function (next){
//   var post = this;
//   if(post.isNew){
//     counter = await Counter.findOne({name:'posts'}).exec();
//     if(!counter) counter = await Counter.create({name:'posts'});
//     counter.count++;
//     counter.save();
//     post.numId = counter.count;
//   }
//   return next();
// });


    
const Board = mongoose.model('Board', boardSchema);

module.exports = { Board }