/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import ApiError from '../utils/ApiError.js'
import {slugify} from '../utils/formater.js'

const createNew = async (reqBody) => {
   try {
    const newBoard = {
        ...reqBody,
        slug: slugify(reqBody.title)
    }
    
    // trả kết quả về, trong service luôn phải có return 
    return newBoard

   }catch(error){
      throw error
   }
}

export const boardService = {
    createNew
}