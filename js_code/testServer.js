const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: '.env_vars'});
const db = require('./testModules/db');





const PORT = process.env.PORT || '3306';




const app = express();
const bodyParser = require("body-parser");
console.log("Test runnin");
console.log(process.env.DB_HOST);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET
app.get('/testTable', async (req, res) => {
    try {
        const result = await db.pool.query("select * from testTable");
        res.send(result);
    } catch (err) {
        throw err;
    }
});


 /**
 * Middleware
 */
//app.use(express.json());
//app.use(express.urlencoded({extended:false}));

/**
 * Routes
 */

//app.get('/', (request, response) => {
//    response.status(200).send("This is not why you're here. Head to /user/:id and replace :id with your user id")
//})

//const userRouter = require('./testModules/user');
//app.use('/user',userRouter);

/**Start listening */
//app.listen(PORT, () => {
//    console.log(`Listening for requests on port ${PORT}`)
//})