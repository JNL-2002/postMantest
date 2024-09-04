var figlet = require("figlet");

figlet("ddddddddfefefeeefefeef", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});