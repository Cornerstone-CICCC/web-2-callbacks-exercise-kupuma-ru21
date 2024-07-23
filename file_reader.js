const fs = require("fs");

const getFirstName = (getLastName, getAge, getHobbies) => {
  fs.readFile("./firstname.txt", "utf-8", (err, firstName) => {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    getLastName(firstName, getAge, getHobbies);
  });
};

const getLastName = (firstName, getAge, getHobbies) => {
  fs.readFile("./lastname.txt", "utf-8", (err, lastName) => {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    getAge(`${firstName + " " + lastName} is`, getHobbies);
  });
};

const getAge = (fullName, getHobbies) => {
  fs.readFile("./age.txt", "utf-8", (err, age) => {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    getHobbies(`${fullName} ${age} years old`);
  });
};

const getHobbies = (fullNameAndAge) => {
  fs.readFile("./hobbies.txt", "utf-8", (err, hobbies) => {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    const hobbiesArray = JSON.parse(hobbies);
    console.log(
      "result: ",
      `${fullNameAndAge} and his hobbies are ${hobbiesArray.join(" and ")}`
    );
  });
};

getFirstName(getLastName, getAge, getHobbies);
