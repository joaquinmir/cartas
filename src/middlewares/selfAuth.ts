import { sign, decode, verify } from 'jsonwebtoken'
import {Request,Response,NextFunction} from 'express'

interface JwtPayload {
    id: number;
}

export default function(req:Request,res:Response,next: NextFunction){
    const {id} = req.params 

    if (!req.headers.authorization) return res.json({ msg: 'no token in request' })
    const token = req.headers.authorization.split(' ')[1]
    try{ 
        const payload = verify(token, process.env.JWT_SECRET!) as JwtPayload
        if(payload.id===parseInt(id)){       
            next()
        }else{
            res.status(501).send('conflict ocurred')
        };
    }catch(err){
        res.status(401).json({ msg: 'Token expired or not valid' })
    }
}