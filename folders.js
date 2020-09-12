// const { fork } = require("child_process");
// this is another way to "import" a dependancy
const fs = require("fs");
// fs comes from the node docs
// this library stands for file system

// creates a new folder called "data"
fs.mkdirSync("data");

"abcdefghijklmnopqrstuvwxyz".split("").forEach((letter) => {
  // I need to write a function that works for every single letter of the Alphabet and creates a folder
  return fs.mkdirSync(`data/${letter}`);
});
