
const colors = require('colors/safe'); //Call package colors
const readline = require('readline');  //Call package readline

//Instantiate createInterface for getting name
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

// Create a function that prints a greeting 
const sayHi = (name)=>{
    console.log(colors.rainbow(`Hola ${name}`))
}

//Getting name in console 
rl.question('Hola Koder ¿Cuál es tu nombre? ', (answer) => {
    sayHi(answer)
    rl.close();
});
