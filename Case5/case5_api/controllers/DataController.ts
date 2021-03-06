import {MongooseController} from './mongooseConnection'
import {SqlController}  from '../controllers'
import {Logger,Article} from '../common'
import {elasticController} from './elasticConnection'
import {Cache} from '../common'
/**
 * Class made to implement database agnosticism
 */
export class DataController{
    private Moongose:any 
    private MSSQL:any 
    private Elastic:any 
    private log:Logger 
    private static instance:DataController 
    private constructor(){
        this.log = new Logger   
    }
    /**
     * Returns an instance of the class
     */
    public static getInstance():DataController
    {
        if(!this.instance)
        {
            this.instance = new DataController() 
        }
        return this.instance 
    }
    /**
     * Gets all the articles mathing the provided tags in the 2 databases implemented
     * @param tags 
     */
    public getArticlesFromDb(tags:Array<String>)
    {
        let promiseDbs = new Promise((resolve, reject) => {

            let mongooseArticles =  MongooseController.getInstance().getArticlesByTag(tags)
            let sqlArticles = SqlController.getInstance().getArticles(tags,(err,sqlresult)=>
            {
                
                let mergeResults =   mongooseArticles.then(mongos=>{
                    resolve(sqlresult.concat(mongos))
                }) ;
                
            })

        })

        return promiseDbs
    }
   public async getArticles(minLevel,maxLevel)
   {    let promise = new Promise((resolve,reject)=>
    {

        if(!maxLevel)
        {
            maxLevel = minLevel;
        }
        Cache.getInstance().redisGet(String(minLevel)+String(maxLevel)).then(existe=>
            {
                if(existe)
                {
                    this.log.info("Existía en cache")
                    resolve(existe);
                }
                else{
                    this.log.info("No existía en cache")
                    let MinMaxTags = elasticController.getInstance().getTags(minLevel,maxLevel).then(tags =>
                        {   
                            
                            let hashtags =Object.keys(tags).map((key)=>tags[key]['key'])
                            
                            
                            this.getArticlesFromDb(hashtags).then(articles =>
                                {
                                    Cache.getInstance().redisSet(String(minLevel)+String(maxLevel),JSON.stringify(articles))
                                    resolve(articles)
                                })
        
                        })
                    
                    
        
                }
            })

    }) 
    return promise       



   }

}