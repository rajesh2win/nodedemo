/**
 * Created by KH998 on 5/8/2015.
 */
var fs = require("fs");
var data = '';
//create a readable stream
var readerStream = fs.createReadStream('test');

//set the encoding to be utf8.
readerStream.setEncoding('UTF8');

//handle stream events
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});
console.log("readerStream Ended");


var data = 'Trying node js examples';
//create a writable stream
var writerStream = fs.createWriteStream('test1.txt');

//write the data to stream
//set the encoding to be utf8.
writerStream.write(data,'UTF8');

//mark the end of file
writerStream.end();

//handle stream events
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("writerStream ended");




//Asynchronous read
fs.readFile('test.txt', function (err, data) {
    if (err) return console.error(err);
    console.log("Asynchronous read: " + data.toString());
});

//Synchronous read
var data = fs.readFileSync('test.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");


/*//create a readable stream
var readerStream = fs.createReadStream('test');

//create a writable stream
var writerStream = fs.createWriteStream('test1.txt');

//pipe the read and write operations
//read test.txt and write data to test2.txt
readerStream.pipe(writerStream);*/

console.log("Program Ended");