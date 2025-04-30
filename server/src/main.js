import express from 'express';
import sqlite3 from 'sqlite3';
import database from './db/db.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const db = new sqlite3.Database(process.env.DATABASE_NAME, (err) => {
    if (err) {
        console.error(err);
    }
});

database.create_table(db);

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, task manager' });
});

app.post('/api/add_task', async (req, res) => {
    const { task_type, description, author_id } = req.body;

    if (!description || !task_type || author_id === undefined) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const result = await database.add_task(db, { task_type, description, author_id });
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/get_tasks', async (req, res) => {
    try {
        const tasks = await database.get_tasks(db);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/delete_task', async (req, res) => {
    const { id } = req.body;

    if (id === undefined) {
        return res.status(400).json({ message: 'Task id is required' });
    }

    try {
        const exists = await database.task_exist(db, id);
        if (!exists) {
            return res.status(404).json({ message: 'Task does not exist' });
        }

        const result = await database.delete_task(db, { id });
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/update_task', async (req, res) => {
    const { id, task_type } = req.body;

    if (id === undefined || !task_type) {
        return res.status(400).json({ message: 'Task id and new type are required' });
    }

    try {
        const exists = await database.task_exist(db, id);
        if (!exists) {
            return res.status(404).json({ message: 'Task does not exist' });
        }

        const result = await database.update_task(db, { id, task_type });
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
