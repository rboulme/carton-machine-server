

const express = require('express');
const cors = require("cors");
const plc = require('./plc');
const app= express();
app.use(express.json());
app.use(cors());
app.use('/plc',plc);
const port = 3001;
app.listen(port,()=>{
    console.log(`Listening on port ${port}` );
})

