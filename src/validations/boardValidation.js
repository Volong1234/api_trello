/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import Joi from 'joi'
import express from 'express'
import {StatusCodes} from 'http-status-codes';
import ApiError from '../utils/ApiError.js'


const createNew = async (req, res, next) => {

    const correctCondtion = Joi.object ({
        title: Joi.string().required().min(3).max(50).trim().strict(),
        description: Joi.string().required().min(3).max(50).trim().strict(),
    })

    try {
        //chỉ định nhiều lỗi validation
        await correctCondtion.validateAsync(req.body, {abortEarly: false})
        // validate dữ liệu hợp lệ thì đi tiếp sang controller
        next()
         
    }catch(error) {
        const errorMessge = new Error(error).message
        const customError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessge)
        next(customError)
        // console.log(error)
        // res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        //     errors: new Error(error).message
        // })
    }
}

export const boardValidation = {
    createNew
}