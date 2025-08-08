require('dotenv').config();
 
const express = require('express');
const cors = require('cors');
const app = express();
const connection  = require('./db');
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());


app.get('/api/hello', (req, res) => {

    connection.query('SELECT "Hello from DB!" AS message', (err, results) => {
        if(err){
            console.error('Error querying DB: ', err);
            return res.status(500).send('Database error');
        }

        res.json({ message: results[0].message });
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});