import { PostModel } from "../models/postModel"

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find()
    }
}
export const createPost = (req, res) => {
    res.send('CREATE SUCCESS')
}