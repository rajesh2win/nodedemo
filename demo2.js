/**
 * Created by KH998 on 5/7/2015.
 */

/*var fs = require("fs");
var data = fs.readFileSync('test');
console.log(data.toString());
console.log("Program Ended");*/



var fs = require("fs");

fs.readFile('test', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("Program Ended");
