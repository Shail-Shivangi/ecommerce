import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';


console.log(process.env.DB_USER);
const db = mysql.createConnection({
  host:'localhost',
  user:process.env.DB_USER,
  password:process.env.PASSWORD,
  database:'ecommerce'
});

db.connect((err) => {
    if(err) {
        console.error(`Error connecting to database: `,err);
        return;
    }
    console.log(`Connected to database `);
})

export default db;
