const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();
const PLC = require("./modbus");

router.post('/',async (req,res)=>{
    const _req = req.body.req;
    if(_req=='readD'){
        const dstart = req.body.start;
        const length = req.body.length;
        const arr = await PLC.readDs(dstart,length)
        res.json(arr);
    }
    else if(_req=='writeD'){
        const dstart = req.body.start;
        const arr = req.body.arr;
        await PLC.writeDs(dstart,arr);
        res.json(arr);
    }
    // if(!sql){
    //   return res.status(400).send('No sql ');
    // }
    // if(sql.trim().toLowerCase().indexOf('select')!=0) {
    //   return res.status(400).send('Unauthorized SQL');
    // }
    // if(sql.trim().toLowerCase().includes('registeredusers')) {
    //   return res.status(400).send('Unauthorized');
    // }
    // connection.query(sql, (err, result) => {
    //   if (err) {
    //     res.status(400).send(err.message);
    //   } else {
    //     res.json(result);
    //   }
    // }); 
})

module.exports = router;