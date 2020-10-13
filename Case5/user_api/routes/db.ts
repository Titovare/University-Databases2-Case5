import * as express from 'express';
import { Logger } from '../logger/logger';
import tediousRequest from '../tediousConnection'
import client from '../configs/elasticConnection';
import db from '../configs/mongooseConnection'
const mongoose = require('mongoose')
// Mongo model
const Articles = mongoose.Schema({
    Name:String,
    Author:String,
    PostTime:String,
    Titles:[{Title:String,Position:Number}],
    Subtitles:[{Subtitle:String,Position:Number}],
    Texts:[{Text:String,Position:Number}],
    Media:[{url:String,Position:Number}],
    Hashtags:Array
})

// db setup
const app = express();
const logger = new Logger()

// prueba
app.use('/getHashtag',(req,res,next)=>{
    logger.info('databases route');
    tediousRequest.connection.on('connect', function(err) {
        if(err){
            console.log(err)
        }
    });
    let result = tediousRequest.getData()
    res.send("hagamos la morición");
})

// Prueba conexión elastic
app.get('/elastictest',((req, res, next) => {

    client.search({
        index:'palabras'
    },(error,response,status) =>
    {
        if(error){
            logger.error(error)
        }
        else
        {
            console.log("--- Response ---");
            console.log(response);
            console.log("--- Hits ---");
            response.hits.hits.forEach(function(hit){
                console.log(hit);
            })
        }
    }
    )
}))
app.get('/mongo',(req,res,next)=>
{
    const articulo = db.model('articles',Articles)
    articulo.find({}, (err,articulo)=>{
        if(err)logger.error(err)
        console.log(articulo)
        res.json(articulo)
    })

})


app.get('/populate',(req,res,next)=>
{
    let nombres= ["PrismaAventura","Bendito sea Mongoose","Redis o Tedis? La pregunta del millón", "Al principio no me gustaba docker y ahora tampoco","Nodemon es un regalo de Dios"]
    let texto = ["Era una oscura noche de octubre cuando decidí comenzar a investigar el oscuro misterio de prisma.io","El internet estaba repleto de recursos sobre prisma con mysql , pero se mantenía silencioso al respetco de mongo",
"Hasta que encontré un preview del propio prisma donde enseñaban como setear mongo junto con prisma","Al seguir los pasos me di cuenta que me encontraba con un docker compose , yo esperaba simplemente conectar mi base de datos,pero el destino que me esperaba no era el deseado",
"Graphql? Que es eso , para que sirve? Eran unas de las preguntas que rondaban por mi cabeza","Un poco aturdido con tanta información , aún así decidí continuar este arduo camino","Un subidón de alegría, logré comprender como funciona prisma desde graphql playground",
"Armado con determinación, partí hacia nodejs , a montar los requests ","Los inconvenientes no tardaron en aparecer, el archivo generado por prisma no se podía mover de ubicación ,ya que daría problemas de conexión",
"Cuando me encontraba en mi momento más bajo, el profesor dijo que prisma no puede conectarse a mongo , cosa que es falso , dado que ya había logrado insertar desde graphql playground","Ignorando este revelador hecho, me dirigí a la página de mongoose , donde comenzaría una nueva aventura computina."]
   let media = ["https://cdn.discordapp.com/avatars/243134456028856320/a80cd3192c67c8fca4c807aec26fdacd.png?size=256","https://cdn.discordapp.com/emojis/417769730221277195.png?v=1","https://media.discordapp.net/attachments/510588744915484683/756263074713042974/IMG-20200917-WA0004.jpg?width=677&height=677"]
   let hashtags = []


})





export default app;