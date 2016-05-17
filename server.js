'strict'
import express from 'express';
import path from 'path';

let app = express();
let port = 3000;
let publicPath = path.resolve(__dirname);

app.use(express.static(publicPath));

app.listen(port, function(){
    console.log("WORKING SO HARD RIGHT NOW ON " + port);
})
