
import { Tedis } from "tedis" 
import { Constants } from '../index'

export class Cache {
  private static instance: Cache 
  public tedisCache : Tedis 

  private constructor() {
    this.tedisCache = new Tedis({
      port: Constants.CACHE_PORT,
      host: Constants.CACHE_HOST
    }) 
  }

  public static getInstance(): Cache {
      if (!Cache.instance) {
        Cache.instance = new Cache() 
      }
      return Cache.instance 
  }

  public async redisGet(key: string){

    let promise = new Promise((resolve,reject)=>
    {
      this.tedisCache.exists(key).then(val=>{
        if(val==0)
        {
          console.log("No existe");
          
          resolve(null);
        }
        else
        {
          resolve ((this.tedisCache).get(`${key}`).then(value=>{return value}));
        }
      });
     
    })

    return promise
  }


  // Se podría meter a un try-catch para ver que esté funcionando
  public async redisSet(key: string, value: string){
    (await this.tedisCache).set(key, value) 
    this.tedisCache.pexpire(key,6000*10*5)
  }

}

export default Cache 