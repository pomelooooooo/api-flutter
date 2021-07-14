module.exports = {
  server: {
    host: "localhost",
    port: 4000,
  },
  db: {
    defaultRead: {
      client: "mysql",
      connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "project_flutter",
        charset: "utf8",
      },
    },
  },
};
