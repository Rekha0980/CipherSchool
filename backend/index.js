const express = require("express")
require("dotenv").config()
const { connection } = require("./configs/db")
const { userRoutes } = require("./routes/user.routes")
const cors=require("cors")

const app = express()
app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
    res.send("homepage")

})

app.use("/users",userRoutes)

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