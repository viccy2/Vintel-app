const mongoose = require('mongoose');
// Schema 
const postSchema = mongoose.Schema({
    title : String,
    category : String,
    content : String,
    image : String,
    created : {
        type : Date,
        default : Date.now

    }
});
module.exports = mongoose.model('Post', postSchema);
// const Post = mongoose.model('Post', postSchema);
// module.exports = Post;
