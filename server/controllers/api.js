module.exports = class API {
    //methods
    //fetch all post methods
    static async fetchAllPost(req, res) {
        res.send('Hello from api');
    }
     //fetch all post by ID methods
     static async fetchPostByID(req, res) {
        res.send('fetch post by ID');
    }
     //create post methods
     static async createPost(req, res) {
        res.send('create post');
    }
     //update post methods
     static async updatePost(req, res) {
        res.send('update post');
    }
     //delete post methods
     static async deletePost(req, res) {
        res.send('delete post');
    }

    
}