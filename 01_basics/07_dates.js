let myDate = new Date()
// console.log(myDate.toString()); //Wed Mar 19 2025 10:50:18 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Wed Mar 19 2025
// console.log(myDate.toLocaleString());//19/3/2025, 10:50:18 am
// console.log(typeof myDate) //object

let myCDate = new Date("01-14-2023")
// console.log(myCDate.toDateString())

// let myTimeStamp = Date.now();
// console.log(myCDate.getTime())

let newDate = new Date()
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())
