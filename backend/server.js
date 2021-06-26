import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});
//  node backend/server.js
app.listen(5000, () => {
    console.log('Serve at http://localhost:5000');
});