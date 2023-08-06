import {User} from '../entities/User'
import {Request,Response} from 'express'
import { sign, decode, verify } from 'jsonwebtoken'
import {compareSync} from 'bcrypt'
export async function login(req: Request, res:Response) {
    try {
      const { email } = req.body;
      let user = await User.findOne({ where: { email } });

      if (user === null) {
        res.status(401).json({ msg : 'wrong username or password'});
      } else {
        let passwordIsOk = compareSync(req.body.password, user.password);
        if (passwordIsOk) {
          const { id } = user;
          const token = sign({ id }, process.env.JWT_SECRET!, {
            expiresIn: "8h",
          })
          res.status(200).json( token );
        } else {
          res.status(401).json({ msg : 'wrong username or password'});
        }
      }
    } catch (error) {
      res.status(500).json({ ok: false });
    }
  }
