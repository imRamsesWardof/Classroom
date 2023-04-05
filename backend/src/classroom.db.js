import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host : 'localhost',
    user : 'allanmiya',
    password : '12345',
    port : 3306,
    database: 'classroom'
})