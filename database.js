import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST, //modify values in application whether it is running
    user: process.env.MYSQL_USER, //normaalisti host: 127.0.0.1, user: root, password: salasanasi, etc....  process.env piilottaa dataa.
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getTuotteet() {
const [rows] = await pool.query("SELECT * FROM Tuotteet")
return rows
}
export async function getTuote(id){
    const [rows] = await pool.query(`      
    SELECT * 
    FROM Tuotteet
    WHERE id = ?
    `, [id])
return rows[0]
}


export async function createTuote(tuote, valmistaja, id, vastuuhenkilö, hanke, tilauspäivä, viimeinen_säilytyspv, käytössä, takuu){
   const [result] = await pool.query(`
    INSERT INTO Tuotteet (tuote, valmistaja, id, vastuuhenkilö, hanke, tilauspäivä, viimeinen_säilytyspv, käytössä, takuu)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [tuote, valmistaja, id, vastuuhenkilö, hanke, tilauspäivä, viimeinen_säilytyspv, käytössä, takuu])
    const newId = result.insertId //newId instead of just ID since ID already exists above ^^
    return getTuote(newId)
}









//const result = await createTuote('test', 'test', 'test', 'test', 'test', '1.1.2023', '1.1.2023', 'test', 'test')
//console.log(result)





//const Tuote = await getTuote(100)
//console.log(Tuote)
