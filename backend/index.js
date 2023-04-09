const express = require("express")
require("dotenv").config()
const { connection } = require("./configs/db")

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("homepage")

})


app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("connected to DB")
    }
    catch (err) {
        console.log("error while connected to db")
        console.log(err)
    }
})