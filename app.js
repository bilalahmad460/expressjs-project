const express = require('express');
const http = require('http');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: false }));
const userRouter = require('./routes/userRouter');
app.use(express.static('public'));

app.use(userRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server app listening on port http://localhost:${port}`);
});