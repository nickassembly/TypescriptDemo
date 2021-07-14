"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Nick';
// unknown needs a special type check, better to use over 'any'
if (typeof userInput === 'string') {
    userName = userInput;
}
;
// intended to never return anything
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
;
var result = generateError('An error occurred!', 500);
console.log(result);
