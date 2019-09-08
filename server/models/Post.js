const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId
    },
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Post', PostSchema);