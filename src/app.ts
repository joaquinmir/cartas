import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {Router} from 'express'
import 'dotenv/config'
import usersRouter from './routes/user.routes'
import indexRouter from './routes/index.routes'
import authenticationRouter from './routes/authentication.routes'
const app = express()
app.use(express.json())
app.use('/users',usersRouter)
app.use('/',indexRouter)
app.use('/auth',authenticationRouter)
app.use(morgan('dev'))
app.use(cors())

export default app