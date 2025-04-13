import express from 'express';
import sqlite3 from 'sqlite3';
import database from './db/db.js';
import dotenv from 'dotenv';
dotenv.config();

const db = new sqlite3.Database(process.env.DATABASE_NAME, (err) => {
    if (err) {
        console.log(err);
    }
});

database.create_table(db);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({'message': 'Hello, task manager'})
})

app.listen(process.env.PORT || 3000);