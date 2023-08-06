import {Router} from 'express'
import {getUser,editUser} from '../controllers/user.controllers'
import selfAuth from '../middlewares/selfAuth'
import {login} from '../controllers/authentication.controllers'
const router = Router()

router.post('/login', login)

export default router