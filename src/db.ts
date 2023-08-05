import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port:  parseInt(process.env.DB_PORT!),
    username: process.env.DB_ID,
    password: process.env.DB_PSW,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})