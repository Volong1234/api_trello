/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import {StatusCodes} from 'http-status-codes';
import ApiError from '../utils/ApiError.js'
import {boardService} from '../services/boardService.js'

const createNew = async (req, res, next) => { 
   try {
    // điều hướng dữ liệu sang service
    const createBoard = await boardService.createNew(req.body)
    // throw new Error('test error')
    res.status(StatusCodes.CREATED).json(createBoard)
   } catch(error){
         next(error)
        // console.log(error)
        // res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        //     errors: new Error(error).message
        // })
   }
}

const getDetail = async (req, res, next) => { 
    try {
        const boardId = req.params.id
     // điều hướng dữ liệu sang service
     const board = await boardService.getDetail(boardId)
     // throw new Error('test error')
     res.status(StatusCodes.OK).json(board)
    } catch(error){
          next(error)
    }
 }

export const boardController = {
    createNew,
    getDetail
}