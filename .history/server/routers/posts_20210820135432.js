import express from "express";
import{} from '../controllers/posts'

const router = express.Router();

router.get('/', (req, res) => {
    res.send('ROUTER SUCCESS')
})

export default router