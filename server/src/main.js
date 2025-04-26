import express from 'express';
import sqlite3 from 'sqlite3';
import database from './db/db.js';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
dotenv.config();

const db = new sqlite3.Database(process.env.DATABASE_NAME, (err) => {
    if (err) {
        console.log(err);
    }
});

database.create_table(db);

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.json({'message': 'Hello, task manager'})
})

app.post('/api/add_task', (req, res) => {
    const { task_type, description, author_id } = req.body;
    database.add_task(db, { task_type, description, author_id })
        .then(result => {
            res.json(result);
        })
})

app.get('/api/get_tasks', (req, res) => {
    database.get_tasks(db).then(r => res.json(r));
})

app.delete('/api/delete_task', (req, res) => {
    const { id } = req.params;
    database.delete_task(db, { id })
        .then(result => {
            res.json(result);
        });
})

app.put('/api/update_task', (req, res) => {
    const { id, task_type } = req.body;
    database.update_task(db, { id, task_type })
        .then(result => {
            res.json(result);
        })
})

app.listen(process.env.PORT || 3000);