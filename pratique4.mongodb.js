/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "bank";
const collection = "customers";

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection, {
  validator: {
    $jsonSchema: {
      title: "Customers validation",
      bsonType: "object",

      // Required properties
      required: ["email"],

      // Properties validation
      properties: {
        // Email
        email: {
          bsonType: "string",
          pattern:
            "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
          description: "'email' must be a valid email string RF2822 compliant",
        },

        // Balance
        balance: {
          bsonType: "number",
          minimum: -20000,
          description: "'balance' must be a number and greater than -20000",
        },

        // Categories
        categories: {
          bsonType: "array",
          items: {
            bsonType: "string",
            enum: [
              "independent_pro",
              "individual",
              "business",
              "association",
              "large_account",
              "investor",
            ],
          },
          description: "'categories' must be an array of valid categories.",
        },

        // Opetations,
        operations: {
          bsonType: "array",
          description: "'operations' must be an array.",
        },

        // firstname
        firstname: {
          bsonType: "string",
          description: "'firstname' must be a string.",
        },

        // lastname
        lastname: {
          bsonType: "string",
          description: "'lastname' must be a string.",
        },

        // organization
        organization: {
          bsonType: "string",
          description: "'organization' must be a string.",
        },
      },
    },
  },
});
