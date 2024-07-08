const mongoose=require('mongoose');
const testcaseschema=new mongoose.Schema({
    prob:{
        type:mongoose.Schema.ObjectId,
        ref:'problem'
    },
    test:{
        type:[{
            input:{
                type:String,
                required:true
            },
            output:{
                type:String,
                required:true
            }
        }]
    }
})
const Testcase=mongoose.model('testcase',testcaseschema,'testcases');
model.exports=Testcase;