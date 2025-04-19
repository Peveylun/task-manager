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
    database.add_task(db, req.body)
        .then(result => {
            res.json(result);
        })
})

app.get('/api/tasks', (req, res) => {
    database.get_tasks(db).then(r => res.json(r));
})

app.delete('/api/delete_task', (req, res) => {
    database.delete_task(db, req.body)
        .then(result => {
            console.log(result);
            res.json(result);
        });
})

app.listen(process.env.PORT || 3000);