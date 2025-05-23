const mongoose = require("mongoose");
/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - professionalName
 *         - nameLink
 *       properties:
 *         _id:
 *           type: string
 *           description: MongoDB ObjectId
 *         professionalName:
 *           type: string
 *         nameLink:
 *           type: object
 *           properties:
 *             firstName:
 *               type: string
 *             url:
 *               type: string
 *         linkedInLink:
 *           type: object
 *           properties:
 *             text:
 *               type: string
 *             link:
 *               type: string
 *         githubLink:
 *           type: object
 *           properties:
 *             text:
 *               type: string
 *             link:
 *               type: string
 *         base64Image:
 *           type: string
 *         primaryDescription:
 *           type: string
 *         workDescription1:
 *           type: string
 *         workDescription2:
 *           type: string
 *         linkTitleText:
 *           type: string
 */
const personSchema = new mongoose.Schema({
  professionalName: String,
  base64Image: String,
  nameLink: {
    firstName: String,
    url: String,
  },
  primaryDescription: String,
  workDescription1: String,
  workDescription2: String,
  linkTitleText: String,
  linkedInLink: {
    text: String,
    link: String,
  },
  githubLink: {
    text: String,
    link: String,
  },
});

module.exports = mongoose.model("Person", personSchema);
