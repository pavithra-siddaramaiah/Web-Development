const fs = require("fs");

fs.writeFile("check.txt", "Hello!!", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile('./check.txt', "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 