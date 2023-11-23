/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
// import { mapOrder } from './utils/sorts.js'
import {CONNECT_DB, GET_DB, CLOSE_DB} from './config/mongodb.js'
import exitHook from 'async-exit-hook'
import 'dotenv/config'

 const START_SERVER = () => {
  const app = express()

  const hostname = 'localhost'
  const port = 8017
  
  app.get('/', (req, res) => {
    res.end('<h1>Hello World!</h1><hr>')
  })
  
  app.listen(port, hostname, () => {
    console.log(`Hello Trung Quan Dev, I am running at ${ hostname }:${ port }/`)
  })

  exitHook((singal) => {
    CLOSE_DB()
  } )
 }

CONNECT_DB()
.then( ()=> console.log('Connect to MongDB') ) 
.then(() => START_SERVER())
.catch(error => {
  console.error(error)
  process.exit(0)
})