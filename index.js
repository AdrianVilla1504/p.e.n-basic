const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.listen(3000, async () => {
  routes(app);
});

console.log('Server on port 3000')
