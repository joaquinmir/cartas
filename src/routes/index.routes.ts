import {Router} from 'express'
import {Request,Response} from 'express'
const router = Router()

router.get('/', (req : Request, res : Response)=>{
    res.status(200).send("Index");
})


export default router