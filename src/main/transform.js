/**
 *
 * @param {String} str
 */
const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "./index.jsx"), (err, data) => {
  if (err) {
    console.log(err);
  }
  let datas = data.toString().split("\n");

  datas = datas.map((da) => {
    let match = da.match(/style=".+"/);
    if (!match) {
      return da;
    }
    let target = match[0];
    let ret = "";
    for (let i = 0; i < target.length; i++) {
      switch (target.charAt(i)) {
        case "=":
          ret += "={{";
          i++;
          break;
        case '"':
          ret += '"}}';
          break;
        case "-":
          ret += target.charAt(i + 1).toUpperCase();
          i++;
          break;
        case ";":
          ret += '",';
          break;
        case ":":
          ret += ':"';
          break;
        default:
          ret += target.charAt(i);
          break;
      }
    }
    return da.replace(/style=".+"/, ret);
  });
  fs.writeFile(path.join(__dirname, "./index.jsx"), datas.join("\n"), (err) => {
    if (err) {
      console.log(err);
    }
  });
});
