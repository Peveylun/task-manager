function create_table(db) {
    db.run("CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task_type TEXT NOT NULL, author_id INTEGER NOT NULL, description TEXT NOT NULL);");
}

function add_task(db, task) {
    return new Promise(
        (resolve, reject) => {
            db.run(
                `INSERT INTO tasks (task_type, author_id, description)
                 VALUES (?, ?, ?);`,
                [task.task_type, task.author_id, task.description],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            )
        });
}

function get_tasks(db) {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM tasks;`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

function delete_task(db, task) {
    return new Promise((resolve, reject) => {db.run(`DELETE FROM tasks WHERE id = ?;`, [task.id], (err, result) => {
        if (err) {
            reject(err);
        } else {
            resolve(result);
        }});
    });
}

function update_task(db, task) {
    return new Promise((resolve, reject) => {
        db.run(`UPDATE tasks SET task_type = ? WHERE id = ?;`, [task.task_type, task.id], (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

export default {
    create_table,
    add_task,
    get_tasks,
    delete_task,
    update_task,
};
