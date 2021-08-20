import { PostModel } from "../models/postModel"

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        console.log(posts);
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ error, })
    }
};

export const createPost = (req, res) => {
    res.send('CREATE SUCCESS')
}