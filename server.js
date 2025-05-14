const express = require("express");
const data = require("./data");
const cors = require("cors");
const connectDB = require("./frontend/config/db")


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
connectDB();

//endPoint
app.get("/professional", (req, res) =>{
    res.json(data);
});

app.listen(PORT, () =>{
    console.log(`Web server runing at port:${PORT}`);
});
