// Express modules
const express = require('express');

//const uri = "mongodb+srv://root:toor@cluster0.lo8dg.mongodb.net/fototeca-mongoose"; 

// Load the MySQL pool connection
const mysql = require('mysql');

const config = {
    host: 'sql11.freemysqlhosting.net',
    user: 'sql11410643',
    password: 'cck7uv2is9',
    database: 'users',
};
// Create a MySQL pool
const pool = mysql.createPool(config);


// Server variables
const app = express();
app.set('view engine', 'ejs');



// Add middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));





app.get('/registro', (req, res) => {
    res.render("addNew")


})

app.post('/registro/:username:password', (req, res) => {
    //res.render("addNew")
    const username = req.body.username;
    const password = req.body.password;

    pool.query('INSERT INTO users SET ?', req.body, (error, result) => {
        if (error) throw error;
 
        response.status(201).send(`User added with ID: ${result.insertId}`);
    });
    
})
app.listen(3000)