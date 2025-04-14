function create_table(db) {
    db.run("CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task_type TEXT NOT NULL, author_id INTEGER NOT NULL, description TEXT NOT NULL);");
}

function add_task(db, task) {
    db.run("INSERT INTO tasks AS (task_type, author_id, description) VALUES (${task.task_type}, ${task.author_id}, ${task.description});");
}

export default {
    create_table: create_table,
    add_task: add_task,
}
