import {Logger} from '../common'
var elasticsearch=require('elasticsearch');
const NIVEL_MAX = 10
/**
 * Class in charge of handling all the request to the elasticsearch index
 */
export class elasticController{
    private client:any 
    private log: Logger 
    private static instance:elasticController
    private constructor(){
        this.log = new Logger() 
        this.client = new elasticsearch.Client( {
            host:'host.docker.internal:9200'
        }) 
    }
    /**
   * Returns an instance of the class
   */
    public static getInstance():elasticController
    {
        if(!this.instance)
        {
            this.instance = new elasticController() 
        }
        return this.instance
    }
    /**
     * Asks elastic' index for the tags included in the level requested
     */
    public getTagCount()
    {   let tags 
        this.client.search({
        size:0,
        index: 'palabras',
        body:{
            "aggs": {          
                "palabras_count": {
                    "terms": {
                        "field": "palabra.keyword",
                        "size" : 20
                    },
                    "aggs" : {
                        "hashtags" : {
                            "bucket_selector" : {
                                "buckets_path": {
                                    "cuenta": "_count"
                                },
                                "script" :{
                                    "source": "params.cuenta<400 && params.cuenta>300"
                                }
                            }
                        }
                    }
                },
                "max_palabra": {
                    "max_bucket": {
                        "buckets_path": "palabras_count>_count" 
                    }
                },
                "min_palabra": {
                    "min_bucket": {
                        "buckets_path": "palabras_count>_count"
                    }               
                }     
            }  
        }
        }).then((resp,error)=>{
            if(error)
            {
                this.log.error(error)
            }
            this.log.info(JSON.stringify(resp,null,4))
            tags = resp 
        })
        return tags 
    }
    public getLevelTags(min,max):Array<String>
    {
        const hashtagsEscogidos: any[] = []
        this.client.search({
            index:'palabras',
            size:0,
            body: {
                "aggs":{
                    // Saca la cuenta de las palabras
                    "cuenta_palabras": {
                            "terms":{
                                "field": "palabra.keyword",
                                "size":100
                            }
                    },
                    "valor_maximo": {
                        "max_bucket":{
                            "buckets_path": "cuenta_palabras._count"
                        }
                    },
                    "valor_minimo": {
                        "min_bucket":{
                            "buckets_path": "cuenta_palabras._count"
                        }
                    }
                },
                
            }
        },(error,response,status) =>
        {
            if(error){
                console.log(error)
            }
            else
            {
                console.log("--- Hits ---");
                const valorPorNivel = Math.round((response.aggregations.valor_maximo.value - response.aggregations.valor_minimo.value) /NIVEL_MAX);
                const minHashtags = (NIVEL_MAX - max)*valorPorNivel;
                const maxHashtags = (NIVEL_MAX - min + 1 )*valorPorNivel;
      
                console.log(minHashtags,maxHashtags, response.aggregations.valor_maximo.value,response.aggregations.valor_minimo.value);
            
                response.aggregations.cuenta_palabras.buckets.forEach(function(hit){
                    if (hit.doc_count >= minHashtags && hit.doc_count <= maxHashtags){
                        console.log(hit.key,hit.doc_count);
                        hashtagsEscogidos.push(hit.key);
                    }});
                console.log(hashtagsEscogidos);

            }
        return hashtagsEscogidos
        })
        return hashtagsEscogidos
    }
}
