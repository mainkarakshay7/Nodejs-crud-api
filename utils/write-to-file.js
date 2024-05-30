const fs = require("fs");
const path = require("path");

module.exports = (data) => {
  try {
    fs.writeFileSync(
      path.join(
        __dirname, //fetchs current directory name
        "..", // Get one level up
        "data", // move to data directory
        "movies.json"
      ), // move to movies.json
      JSON.stringify(data), //data to be added
      "utf-8" // char encoding
    );
  } catch (error) {
    console.log(error);
  }
};
