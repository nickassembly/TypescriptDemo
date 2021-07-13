let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Nick';

// unknown needs a special type check, better to use over 'any'
if(typeof userInput === 'string') {
    userName = userInput;
};

// intended to never return anything
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
};

const result = generateError('An error occurred!', 500);
console.log(result);