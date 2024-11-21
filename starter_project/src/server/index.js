var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');
const app = express();
app.use(express.static('dist'))
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

// Variables for url and api key
const API_KEY =process.env.API_KEY;


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});



// POST Route
app.post('/data',async function(req,res){
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&&url=${req.body.url}&lang=en`
    console.log(url);
    try {
        const response = await axios.get(url);
        if(response.status === 200){
            const data = response.data;
            console.log(data);
            const frontData = {
                text: data.sentence_list[5].text,
                polarity : data.score_tag,
                irony: data.irony,
                confidence: data.confidence,
                subjectivity : data.subjectivity
            }
            res.json(frontData);
        }
    } catch (e) {
        console.log(e,res.status)
        
    }
})

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


