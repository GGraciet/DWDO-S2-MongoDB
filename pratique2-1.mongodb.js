// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("bank");

// Create a new document in the collection.
db.getCollection("customers").insertMany([
  {
    firstname: "John",
    lastname: "Doe",
    email: "john@doe.com",
    phone: "555-555-5555",
    categories: ["individual", "investor"],
    balance: 10000,
    operations: [
      {
        date: new Date(),
        amount: 1023.54,
        type: "IN",
      },
    ],
  },
  {
    organizationName: "Doe & Sons & Fils",
    email: "contact@doe.business",
    phone: "555-555-5555",
    categories: ["business", "large_account"],
    balance: 20000000,
    operations: [
      {
        date: new Date(),
        amount: 12000000,
        type: "IN",
      },
      {
        date: new Date(),
        amount: 1000000,
        type: "OUT",
      },
    ],
  },
  {
    firstname: "Jane",
    lastname: "Doe",
    email: "jane@doe.com",
    phone: "555-555-5555",
    categories: ["individual"],
    balance: 500,
    operations: [
      {
        date: new Date(),
        amount: 500,
        type: "IN",
      },
    ],
  },
  {
    organizationName: "Doe charity",
    email: "donate@doe.org",
    phone: "555-555-5555",
    categories: ["association"],
    balance: 100000,
    operations: [
      {
        date: new Date(),
        amount: 100000,
        type: "IN",
      },
      {
        date: new Date(),
        amount: 10000,
        type: "OUT",
      },
    ],
  },
  {
    firstname: "Jack",
    lastname: "Russel",
    email: "jack.russel@gmail.com",
    phone: "555-555-5555",
    categories: ["individual", "independant_pro"],
    balance: 400,
    operations: [
      {
        date: new Date(),
        amount: 400,
        type: "IN",
      },
    ],
  },
]);
