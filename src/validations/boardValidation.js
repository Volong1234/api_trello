/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
// import Joi from 'joi'
import express from 'express'
import {StatusCodes} from 'http-status-codes';


const createNew = (req, res, next) => {

    // const correctCondtion = Joi.object ({
    //     title: Joi.string().required().min(3).max(50).trim().strict(),
    //     description: Joi.string().required().min(3).max(50).trim().strict(),
    // })
    

    res.status(StatusCodes.CREATED).json({
        message: "POST validation api create new board"
    }) 

}

export const boardValidation = {
    createNew
}