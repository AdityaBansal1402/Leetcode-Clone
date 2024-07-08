const { Description } = require('@headlessui/react/dist/components/description/description');
const mongoose=require('mongoose');

const problemschema=new mongoose.problemschema({
    date:{
        type: Date,
        default: function() {
            // Format the current date using toLocaleString with options
            return new Date().toLocaleString(undefined, {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            });
        }
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})
const Problem=mongoose.model('problem',problemschema,'problems');
module.exports=Problem
