import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('MediaHive is the best group in the world!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});


