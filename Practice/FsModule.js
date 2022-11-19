var fs = require("fs");
var os = require("os");

// var data = fs.readFileSync('input.txt');
// console.log("Output: " + data.toString());

// const data = fs.readFileSync("input.txt", "utf-8");
// console.log(data);

// fs.readFile("input.txt", "utf-8", (err, data) => {
//    console.log(data);
//  });
//  console.log("after the data");

fs.writeFile("input.txt", "today is awesome day :)", (err) => {
  console.log("file is created");
  console.log(err);
});

fs.appendFile("input.txt", "hello hello", (err) => {
  console.log("task completed");
});

// fs.mkdir("NODE", (err) => {
//   console.log("folder created");
// });

// fs.writeFile("input.txt", "my name is himanshu", (err) => {
//   console.log("files created");
// });

// fs.rename("input.txt", "input1.txt", (err) => {
//   console.log("rename done");
// });

// fs.unlink("input.txt", (err) => {
//   console.log("file deleted");
// });

// fs.rmdir("NODE", (err) => {
//   console.log("folder deleted");
// });

fs.readFile("input.txt", "utf8", function (err, data) {
  console.log(data);
});

fs.stat("input.txt", (error, stats) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Details", stats);
  }
});

console.log("CPU architecture: " + os.arch());
console.log("Free RAM: " + os.freemem());
console.log("Total RAM: " + os.totalmem());
console.log("Hostname: " + os.hostname());
console.log("OS Name: " + os.type());
console.log('Platform: ' + os.platform());
console.log('OS release : ' + os.release());

const baz = () => console.log("baz");
const foo = () => console.log("foo");
const zoo = () => console.log("zoo");

const start = () => {
  console.log("start");
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve("bar");
  }).then((resolve) => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};
start();

console.log("Going to open file!");
fs.open("input.txt", "r+", function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully!");
});
