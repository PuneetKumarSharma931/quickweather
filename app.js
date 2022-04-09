const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;

app.use('/static', express.static('static'));

app.get("/", (req, res)=>{

    res.status(200).sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/*', (req, res)=>{

   res.statusCode = 404;

   res.type("text/html");

   res.send('<h1>404 File Not Found!</h1>');
});

app.listen(port, ()=>{

    console.log(`Website is running at port: ${port}`);
});



