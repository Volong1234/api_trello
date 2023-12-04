/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import Joi from 'joi'
import { GET_DB } from '../config/mongodb.js'

// Define Collection(Name & Schema)

const BOARD_COLLECTION_NAME = 'broads'
const BOARD_COLLECTION_SCHEMA = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    slug: Joi.string().required().min(3).trim().strict(),
    description: Joi.string().required().min(3).max(50).trim().strict(),

    columnOrderIds: Joi.array().items(Joi.string()).default([]),

    createdAt: Joi.date().timestamp('javascript').default(Date.now), 

    updateAt: Joi.date().timestamp('javascript').default(null), 

    _destroy: Joi.boolean().default(false)

})

const createNew = async (data) => {
   try {
       const createdBoard = await GET_DB().colection(BOARD_COLLECTION_NAME).insertOne(data)
       return createdBoard
    // console.log(data)
    // return data
   } catch(error){
     throw new Error(error)
   } 
}

export const boardModel = {
    BOARD_COLLECTION_NAME,
    BOARD_COLLECTION_SCHEMA, 
    createNew
}