/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import ApiError from '../utils/ApiError.js'
import {slugify} from '../utils/formater.js'
import { boardModel } from '../models/boardModel.js'
import { StatusCodes } from 'http-status-codes' 

const createNew = async (reqBody) => {
   try {
    const newBoard = {
        ...reqBody,
        slug: slugify(reqBody.title)
    }

    const createBoard = await boardModel.createNew(newBoard)
    console.log(createBoard)

    // lấy bản ghi board sau khi gọi tuỳ mục đích

    const getNewBoard = await boardModel.findOneById(createBoard.insertedId)
    console.log(getNewBoard)
    // trả kết quả về, trong service luôn phải có return 
    return getNewBoard

   }catch(error){
      throw error
   }
}

const getDetail = async (boardId) => {
    try {
     const board = await boardModel.getDetail(boardId)
     console.log(board)

     if(!board){
        throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found')
     }
 
     // trả kết quả về, trong service luôn phải có return 
     return board
 
    }catch(error){
       throw error
    }
 }

export const boardService = {
    createNew,
    getDetail
}