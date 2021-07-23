const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.set('view engine', 'pug'); 

require('dotenv').config();
let connectionString = process.env.connection;

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(connectionString, options)
.then (
    () => {
        console.log("Database Connection Established");
    }
).catch((err) => {
    console.log(err);
})

const testPlayerSchema = new mongoose.Schema({}, {strict:false});

const TestPlayers = mongoose.model("testPlayers", testPlayerSchema);

app.get('/players', async (req, res) => {
    let data = await TestPlayers.find();
    if (!data || !data.length) return res.send("No Data Found!!!")
    res.status(200).send(data);
})

app.get('/', (req,res) => {
    res.render('index')
} )

app.get('/playerPage',(req,res) => {
    res.render('playerPage')
})

app.use((req,res) => {
    res.status(404).send("404: Page Not Found"); 
}); 

const port = 3000;
app.listen(port, () => console.log(`Server started at port${port}`))
