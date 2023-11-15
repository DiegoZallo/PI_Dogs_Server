
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3003, () => {
    console.log('Server listening at PORT:3003'); // eslint-disable-line no-console
  });
});
