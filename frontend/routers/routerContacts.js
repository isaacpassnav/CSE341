const express = require("express");
const router = express.Router();
const contactController = require("../controllers/controllerContact")


router.get("/", contactController.getAllContacts);
router.get("/:id", contactController.getContactById);

//Post route
router.post("/", contactController.createContact);

module.exports = router;
