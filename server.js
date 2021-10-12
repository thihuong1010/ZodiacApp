const express = require('express');

const app = express();

// express module and use the dot to access to open Express module
// __dirname : current project
app.use(express.static(__dirname + '/frontend'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running by nodemon on port ' + port);
});