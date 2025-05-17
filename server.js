const express = require("express");
const data = require("./data");
const cors = require("cors");
const connectDB = require("./frontend/config/db")
const contactRoutes = require("./frontend/routers/routerContacts");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
connectDB();

//endPoint
// app.get("/professional", (req, res) =>{
//     res.json(data);
// });

app.use("/contacts", contactRoutes);


app.listen(PORT, () =>{
    console.log(`Web server runing at port:${PORT}`);
});
