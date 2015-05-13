/**
 * Created by KH998 on 5/8/2015.
 */

var counter = 10;

console.log("Counter: %d", counter);

console.time("Getting data");
    //make a database call to retrive the data
    //getDataFromDataBase();
console.timeEnd('Getting data');

console.info("Program Ended!")
