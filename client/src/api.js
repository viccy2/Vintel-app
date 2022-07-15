import axios from "axios" ;
const url = "/api/post";

export default class API {
    //Getting all posts from server
    static async getAllPost(){
        try {
            const res = await axios.get(url);
            return res.data
        }
        catch (err) {
            console.log(err.message)
        }
       
    }
    //Get post by ID
    static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data
    }
    //Insert Post into DB
    static async addPost(post){
        const res = await axios.post(url, post);
        return res.data
    }
    //update post in DB
    static async updatePost(id, post){
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data
    }
    //Delete post
    
    static async deletePost(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data
    }


}