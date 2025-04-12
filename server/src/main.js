import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({'message': 'Hello, task manager'})
})

app.listen(process.env.PORT || 3000);