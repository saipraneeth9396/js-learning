const accountId = 1
let accountEmail = "praneeth@gmail.com"
var accountPassword = 12345
accountCity = "Hyd"

let accountState;

// cant use : accountState, must use let

// accountId = 2 not allowed because constant

/* 
prefer not to use var
because of block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);