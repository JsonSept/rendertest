import express from 'express'
import cors from 'cors'
// import mysql2 from 'mysql2'
const app =express()
const PORT = 9000

app.use(cors())

app.post('/', (req,res) => {
    res.send({
        msg:"hello there"
    })
})

app.listen(PORT ,() => {
    console.log(`http://localhost:${PORT}`);
})