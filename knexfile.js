module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "list_todo_task",
      user: "mylanoyagha",
      password: "Maximus@1",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};