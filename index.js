const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "supleman@hack2build", // update me
      password: "Stcc1234" // update me
    },
    type: "default"
  },
  server: "hack2build.database.windows.net", // update me
  options: {
    database: "vrock_db", //update me
    encrypt: true
  }
};



const connection = new Connection(config);


connection.connect(console.log("Connect Success"));

