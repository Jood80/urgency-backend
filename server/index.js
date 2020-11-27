const app = require('./app.js');
require('env2')('./config.env');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}.`);
});