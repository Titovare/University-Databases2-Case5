import * as express from 'express';
import { Logger } from '../logger/logger';
import tediousController from '../Controllers/tediousConnection'
import {elasticController} from '../Controllers/elasticConnection';
import{MongooseController} from '../Controllers/mongooseConnection'

// db setup
const app = express();
const logger = new Logger()

// prueba
app.use('/getHashtag',(req,res,next)=>{
    logger.info('databases route');
    tediousController.connection.on('connect', function(err) {
        if(err){
            console.log(err)
        }
    });
    let result = tediousController.getData()
    res.send("hagamos la morición");
})

// Prueba conexión elastic
app.get('/elastictest',((req, res, next) => {
    elasticController.getInstance().getTagCount();
    res.send("Acabado")
    
}))



app.get('/populate',(req,res,next)=>
{
    for(let i = 0; i<18;i++)
    {
    MongooseController.getInstance().populateDB();
    }
   res.send("Base cargada")
})





export default app;