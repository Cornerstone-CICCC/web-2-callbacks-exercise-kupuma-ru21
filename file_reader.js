const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, firstname) => {
  if (err) throw err;
  fs.readFile("./lastname.txt", "utf-8", (err, lastname) => {
    if (err) throw err;
    fs.readFile("./age.txt", "utf-8", (err, age) => {
      if (err) throw err;
      fs.readFile("./hobbies.txt", "utf-8", (err, hobbies) => {
        if (err) throw err;
        const hobbiesArray = JSON.parse(hobbies);
        console.log(
          `${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbiesArray[0]} and ${hobbiesArray[1]}`
        );
      });
    });
  });
});
