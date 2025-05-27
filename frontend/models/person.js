const mongoose = require("mongoose");
/**
 * @swagger
 * components:
 *   schemas:
 *     Person:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - favoriteColor
 *         - birthday
 *       properties:
 *         _id:
 *           type: string
 *           description: MongoDB ObjectId
 *         firstName:
 *           type: string
 *           example: Juan
 *         lastName:
 *           type: string
 *           example: Pérez
 *         email:
 *           type: string
 *           example: juan.perez@example.com
 *         favoriteColor:
 *           type: string
 *           example: blue
 *         birthday:
 *           type: string
 *           format: date
 *           example: 1995-07-15
 *         url:
 *           type: string
 *           example: https://portafolio.com/juanperez
 */

const personSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Email is invalid"]
  },
  favoriteColor: {
    type: String,
    required: [true, "Favorite color is required"],
    trim: true
  },
  birthday: {
    type: Date,
    required: [true, "Birthday is required"]
  },
  url: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return !v || /^https?:\/\/.+/.test(v); 
      },
      message: (props) => `${props.value} is not a valid URL`
    }
  }
});

module.exports = mongoose.model("Person", personSchema);
