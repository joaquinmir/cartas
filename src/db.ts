import { DataSource } from "typeorm"
import {User} from './entities/User'
import {Item} from './entities/Item'
import {Category} from './entities/Category'
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port:  parseInt(process.env.DB_PORT!),
    username: process.env.DB_ID,
    password: process.env.DB_PSW,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [User,Category,Item]
})