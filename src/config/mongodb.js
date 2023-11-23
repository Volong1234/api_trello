/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

const MONGODB_URI = "mongodb+srv://volong:TRrs8xoJkfGGJAq2@cluster0-volongdev.z1cpsu2.mongodb.net/?retryWrites=true&w=majority"
const DATABASE_NAME = "Trello_DB"

import { MongoClient, ServerApiVersion } from "mongodb"

let trelloDatabaseIntance = null
//Khởi tạo cline Intace kết nội Mongodb
const mongoClintIntance = new MongoClient(MONGODB_URI, {
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

export const CONNECT_DB = async () => {
    await mongoClintIntance.connect() 
    trelloDatabaseIntance = mongoClintIntance.db(DATABASE_NAME)
}

export const GET_DB = () => {
    if(!trelloDatabaseIntance) throw new Error('Must connect to Database first!')
     return trelloDatabaseIntance
}

export const CLOSE_DB = async () => {
    await mongoClintIntance.close()
}