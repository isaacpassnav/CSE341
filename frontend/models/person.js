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
 *       example:
 *         _id: "68281cd4229dcbc8410e54b7"
 *         professionalName: "Juan Pérez"
 *         nameLink:
 *           firstName: "Juan"
 *           url: "https://portafolio.com/juanperez"
 *         linkedInLink:
 *           text: "LinkedIn"
 *           link: "https://linkedin.com/in/juanperez"
 *         githubLink:
 *           text: "My GitHub"
 *           link: "https://github.com/juanperez"
 *         base64Image: "iVBORw0KGgoAAAANSUhEUgAAAAUA..."
 *         primaryDescription: "Updated description for Juan Perez"
 *         workDescription1: "Experiencia en Node.js, Express, y bases de datos NoSQL."
 *         workDescription2: "Apasionado por resolver problemas y construir soluciones eficientes."
 *         linkTitleText: "Conecta conmigo:"
 */
const personSchema = new mongoose.Schema({
  professionalName: {
    type: String,
    require: [true, "Profesional name is require"],
    trim: true
  },
  base64Image: String,
  nameLink: {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true
    },
    url: {
      type: String,
      required: [true, "URL is required"],
      trim: true
    },
  },
  primaryDescription: {
    type: String,
    maxlength: [500, "Primary description must be under 500 characters"]
  },
  workDescription1: String,
  workDescription2: String,
  linkTitleText: String,
  linkedInLink: {
    text: String,
    link: {
      type: String,
      validate: {
        validator: (v) => /^https?:\/\/.+$/.test(v),
        message: props => `${props.value} is not a valid LinkedIn URL`
      }
    },
  },
  githubLink: {
    text: String,
    link: {
      type: String,
      validate: {
        validator: (v) => /^https?:\/\/.+$/.test(v),
        message: props => `${props.value} is not a valid GitHub URL`
      }
    },
  },
});

module.exports = mongoose.model("Person", personSchema);
