const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Contacts API",
      version: "1.0.0",
      description: "API to manage professional contact cards",
    },
    servers: [
      {
        url: "https://cse341-project-w01.onrender.com/",
      },
    ],
    components: {
      schemas: {
        Contact: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              description: "Unique identifier for the contact",
              example: "60d0fe4f5311236168a109ca"
            },
            firstName: {
              type: "string",
              description: "First name of the contact",
              example: "John"
            },
            lastName: {
              type: "string",
              description: "Last name of the contact",
              example: "Doe"
            },
            email: {
              type: "string",
              description: "Email address",
              example: "john.doe@example.com"
            },
            favoriteColor: {
              type: "string",
              description: "Favorite color of the contact",
              example: "blue"
            },
            birthday: {
              type: "string",
              format: "date",
              description: "Birthday of the contact",
              example: "1990-01-01"
            }
          },
        },
      },
    },
  },
  apis: ["./frontend/routers/*.js"], 
};

const swaggerSpec = swaggerJSDoc(options);

function setupSwaggerDocs(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwaggerDocs;

