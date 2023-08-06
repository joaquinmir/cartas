import {Router} from 'express'
import {getUser,editUser} from '../controllers/user.controllers'
import selfAuth from '../middlewares/selfAuth'
const router = Router()

router.get('/:id', getUser)
router.patch('/:id',selfAuth, editUser)

export default router