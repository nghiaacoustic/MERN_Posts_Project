import express from 'express';

const app = express();
const PORT = process.env || 5000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})