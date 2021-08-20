import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env || 5000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})