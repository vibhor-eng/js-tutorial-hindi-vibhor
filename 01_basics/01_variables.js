const accountId = "234234";
let accountEmail = "test@yopmail.com";
var accountPassword = "111111";
accountCity = "Jaipur"
let accountState;

// accountId = '22222222'; //not allowed giving error becase digne constant on top

accountEmail = "test123@yopmail.com";
accountPassword = "55555";
accountCity = "Delhi"

console.log(accountId);

// to print multiple variable together in js console.table([]);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/