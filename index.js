const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.listen(PORT, async () => {
  routes(app);
});

console.log('Server on port 3000')
