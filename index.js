
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3003;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(port, "0.0.0.0", () => {
    console.log('Server listening at PORT:3003'); // eslint-disable-line no-console
  });
});
