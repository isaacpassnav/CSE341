const express = require("express");
const cors = require("cors");
const connectDB = require("./frontend/config/db")
const contactRoutes = require("./frontend/routers/routerContacts");
const setupSwaggerDocs = require("./frontend/config/swagger")

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
connectDB();


app.use("/contacts", contactRoutes);

setupSwaggerDocs(app);

app.listen(PORT, () =>{
    console.log(`Web server runing at port:${PORT}`);
});
