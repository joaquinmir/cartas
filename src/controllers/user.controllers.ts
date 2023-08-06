import {User} from '../entities/User'
import {Request,Response} from 'express'
import {AppDataSource} from '../db'

export async function getUser(req: Request,res: Response){
    try{
        const user = await AppDataSource
            .createQueryBuilder()
            .select("user")
            .from(User, "user")
            .where("user.id = :id", { id: parseInt(req.params.id) })
            .getOne()
        res.status(200).json(user)
    }
    catch(err){
        res.status(500)
    }
}   



export async function editUser(req: Request,res: Response){
    //req.params.id
    res.send("Aloja")
}   


