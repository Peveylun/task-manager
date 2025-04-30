function create_table(db) {
    db.run(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task_type TEXT NOT NULL,
            author_id INTEGER NOT NULL,
            description TEXT NOT NULL
        );
    `);
}

function add_task(db, task) {
    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO tasks (task_type, author_id, description) VALUES (?, ?, ?);`,
            [task.task_type, task.author_id, task.description],
            function (err) {
                if (err) {
                    return reject(err);
                }
                resolve({ id: this.lastID });
            }
        );
    });
}

function get_tasks(db) {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM tasks;`, (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}

function delete_task(db, task) {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM tasks WHERE id = ?;`, [task.id], function (err) {
            if (err) {
                return reject(err);
            }
            if (this.changes === 0) {
                return reject(new Error("No task found with that ID"));
            }
            resolve({ success: true });
        });
    });
}

function update_task(db, task) {
    return new Promise((resolve, reject) => {
        db.run(
            `UPDATE tasks SET task_type = ? WHERE id = ?;`,
            [task.task_type, task.id],
            function (err) {
                if (err) {
                    return reject(err);
                }
                if (this.changes === 0) {
                    return reject(new Error("No task found with that ID"));
                }
                resolve({ success: true });
            }
        );
    });
}

function task_exist(db, id) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT 1 FROM tasks WHERE id = ?;`, [id], (err, row) => {
            if (err) {
                return reject(err);
            }
            resolve(!!row);
        });
    });
}

export default {
    create_table,
    add_task,
    get_tasks,
    delete_task,
    update_task,
    task_exist,
};
