import * as mongoose from 'mongoose';
const { Schema } = mongoose;
const Articles = mongoose.model('Article',new Schema({
    Name:String,
    Author:String,
    PostTime:String,
    Sections:[{Content:String,ComponentType:Number}],
    Hashtags:[String]
}))

export default Articles