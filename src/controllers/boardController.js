/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import {StatusCodes} from 'http-status-codes';
import ApiError from '../utils/ApiError.js'

const createNew = async (req, res, next) => { 
   try {

    // throw new Error('test error')
    console.log(req.body)
    res.status(StatusCodes.CREATED).json({
        message: "POST 123 validation api create new board"
    })
   } catch(error){
         next(error)
        // console.log(error)
        // res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        //     errors: new Error(error).message
        // })
   }
}

export const boardController = {
    createNew
}