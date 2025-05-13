const express = require("express");
// const cors = require("cors");
const data = require("./dataclea");

const app = express();
const PORT = 8080;

// app.use(cors());
app.use(express.json());

//endPoint
app.get("/professional", (req, res) =>{
    res.json(data);
});

app.listen(PORT, () =>{
    console.log(`Web server runing at port:${PORT}`);
});
