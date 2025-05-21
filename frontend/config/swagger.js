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
  },
  apis: ["./frontend/routers/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

function setupSwaggerDocs(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwaggerDocs;

