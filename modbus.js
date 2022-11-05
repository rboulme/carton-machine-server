
const ModbusRTU = require("modbus-serial");




class PLC {
    client;
    constructor() {
        this.client = new ModbusRTU();
        this.client.connectTCP("192.168.1.5", { port: 502 });
        this.client.setID(1);
    }
     async readDs(d,cnt){
         const res =  await this.client.readHoldingRegisters(d, cnt);
         return res.data;
            
    }
    writeDs(addr,arr){
        // console.log(this.client);
        try {
            this.client.writeRegisters(addr, arr);
            return 'success';    
        } catch (error) {
            console.log(error);
            return error;
        }
    }
  };


// async function readRegister(reg){
//     return  device.read(reg) 
// }
// async function writeRegister(reg,value){
//     return  await device.write(reg,value) 
// }
// async function readD(d){
//     return await readRegister('hr'+d)
// }


module.exports = new PLC();