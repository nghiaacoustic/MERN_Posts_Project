import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose'

import posts from './routers/posts.js'

const app = express();
const PORT = process.env.port || 5000;

const URI = 'mongodb+srv://admin:ablHU8ov73PA02FK@cluster0.yb6tv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/posts', posts)

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        //connected => run port
        console.log('Connected to DB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    }).catch(() => {

    })

