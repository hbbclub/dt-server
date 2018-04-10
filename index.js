const app = require('./app');

const port = 3000;
app.listen(port, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log(`api server started at port ${port}`);
    }
});