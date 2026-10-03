const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require("./src/config/db");

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: "RVSF API is running"
    })
})

const server = async () => {
    try {
        await connectDB()

        app.listen(process.env.PORT, () => {
            console.log(`server running on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }


}
server()