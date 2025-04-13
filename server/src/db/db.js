function create_table(db) {
    db.run("CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, author_id INTEGER NOT NULL, description TEXT NOT NULL);");
}

export default {
    create_table: create_table,
}