import {Logger, Articles,Article} from '../common'
import * as mongoose from 'mongoose';
/**
 * Gets a truncated int in the provided ranges
 * @param min 
 * @param max 
 */
function getRandomArbitrary(min, max) {
  return Math.trunc(Math.random() * (max - min) + min) 
}
/**
 * Shuffles an array , used in db population
 * @param array
 */
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex 

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

  // Pick a remaining element...
  randomIndex = Math.floor(Math.random() * currentIndex) 
  currentIndex -= 1 

  // And swap it with the current element.
  temporaryValue = array[currentIndex] 
  array[currentIndex] = array[randomIndex] 
  array[randomIndex] = temporaryValue 
  }
}
/**
 * Class in charge of handling all the requests to mongodb
 */
export class MongooseController{

  private static instance : MongooseController 
  private log : Logger 
  private db : any 
  private constructor()
  {
    this.log = new Logger() 
        try
        {
            mongoose.connect('mongodb://host.docker.internal:27017/Case5',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                socketTimeoutMS: 2000
            }) 
            this.db = mongoose.connection 

            this.db.on('error', () => {
                this.log.error("No puedo conectar a mongo")
            }) 

            this.db.once('open', ()=> {
                this.log.info("Conectado a mongo")
            }) 
        } catch (e)
        {
            this.log.error(e) 
        }
  }
  /**
   * Returns an instance of the class
   */
  public static getInstance() : MongooseController
  {
    if(!this.instance)
    {
      this.instance = new MongooseController() 
    }
    return this.instance
  }
  /**
   * Request mongo for all articles that matches any of the tags in the array
   * @param tags 
   */
  public async getArticlesByTag(tags:any){
    var articlesList = await Articles.find({"Hashtags":{"$in":tags}},function(err,results)
    {
        if(err)
        {
          console.log(err);
          
        }
        
    }).then((articlesList) =>{
     

        var articlesLists = [];
        for (var i in articlesList){
          console.log("articulo");
          
          let article=JSON.parse(JSON.stringify(articlesList[i]));
          let sections = article["Sections"]
          let sect = []
          for (var o in sections )
          {
            let content =String(sections[o]["Content"])
            let componentType = Number(sections[o]["ComponentType"])
            sect.push({Content:content,ComponentType:componentType})     
          }
          let articleModel = new Article(article["Name"],article["Author"],article["PostTime"],sect);
          articlesLists.push(articleModel)
      }
      return articlesLists;
    });
    return articlesList;
    
  }
  
  /**
   * Method to randomly populate the mongo datanase
   */
  public populateDB()
  {
      let nombres= ["PrismaAventura","Bendito sea Mongoose","Redis o Tedis? La pregunta del millón", "Al principio no me gustaba docker y ahora tampoco","Nodemon es un regalo de Dios"]
      let texto = ["Era una oscura noche de octubre cuando decidí comenzar a investigar el oscuro misterio de prisma.io","El internet estaba repleto de recursos sobre prisma con mysql , pero se mantenía silencioso al respetco de mongo",
      "Hasta que encontré un preview del propio prisma donde enseñaban como setear mongo junto con prisma","Al seguir los pasos me di cuenta que me encontraba con un docker compose , yo esperaba simplemente conectar mi base de datos,pero el destino que me esperaba no era el deseado",
      "Graphql? Que es eso , para que sirve? Eran unas de las preguntas que rondaban por mi cabeza","Un poco aturdido con tanta información , aún así decidí continuar este arduo camino","Un subidón de alegría, logré comprender como funciona prisma desde graphql playground",
      "Armado con determinación, partí hacia nodejs , a montar los requests ","Los inconvenientes no tardaron en aparecer, el archivo generado por prisma no se podía mover de ubicación ,ya que daría problemas de conexión",
      "Cuando me encontraba en mi momento más bajo, el profesor dijo que prisma no puede conectarse a mongo , cosa que es falso , dado que ya había logrado insertar desde graphql playground","Ignorando este revelador hecho, me dirigí a la página de mongoose , donde comenzaría una nueva aventura computina."]
      let media = ["https://cdn.discordapp.com/avatars/243134456028856320/a80cd3192c67c8fca4c807aec26fdacd.png?size=256","https://cdn.discordapp.com/emojis/417769730221277195.png?v=1","https://media.discordapp.net/attachments/510588744915484683/756263074713042974/IMG-20200917-WA0004.jpg?width=677&height=677"]
      shuffle(nombres) 
      const nombre = nombres[0]
      let publishers = ["Pepito Gonzales","Pepote Gonzales","Melvin S Ragland","Stephen M Szymanski","Virginia B Fowler","Marsha T Humphrey"]
      let sections= []
      let publisher = publishers[Math.trunc(getRandomArbitrary(0,publishers.length))] 
      const Titulo = 1 
      const Subtitulo = 2 
      const Textoo = 3 
      const Imagenes = 4 
      const Videos = 5 

      for(var i= 0 ; i<20 ;i++)
      {    
          let tipo = getRandomArbitrary(0,5)
          
          switch (Math.trunc(tipo)){
              case 0:
                  // crea título
                  sections.push({Content:nombres[Math.trunc(getRandomArbitrary(0,nombres.length-1))],ComponentType:Titulo})
                  break 
              case 1:
                sections.push({Content:nombres[Math.trunc(getRandomArbitrary(0,nombres.length-1))],ComponentType:Subtitulo})
                  //crea subtitulo
                  break
              case 2:
                sections.push({Content:texto[Math.trunc(getRandomArbitrary(0,texto.length-1))],ComponentType:Textoo})
                  break
                  //crea text
              case 3:
                sections.push({Content:media[Math.trunc(getRandomArbitrary(0,media.length-1))],ComponentType:Imagenes})
                  //crea media
                  break
              case 4:
                sections.push({Content:media[Math.trunc(getRandomArbitrary(0,media.length-1))],ComponentType:Videos})
                  //crea media
                  break

          }

      }
      let htags = ["tournament","shana","everyone","catalina","granblue","sign","online","tempest/granblue","@zephyrzerrin","fantasy","photo","your","harem","akashiya","ナルメア","@studio","vampire/zetsuen","glistened","glory","like","something","🔴live","@bobbyd107"]
      const postDate = new Date() 
      postDate.setDate(postDate.getDate() - Math.trunc(Math.random()*700)) 
      const aproxHashtags = Math.trunc(Math.random()*4 + 1) / htags.length       
      const newArticle = new Articles({
        Hashtags:htags.filter(
          (element, index, array) => {
          if (Math.random()<=aproxHashtags) {
              return true 
                }
            }),
            Name:nombre,
            Author:publisher,
            Sections:sections,
            PostTime:postDate
          })
      newArticle.save((err,post)=>
      {
        if (err)
        {
        this.log.error(err) 
        }
        
      })

      
  }
}






