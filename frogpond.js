let numFrogs = prompt("how many frogs are about to jump in?"); //string
const toocrowded = 15; //number
let istoocrowded = numFrogs >= toocrowded; //boolean
let messagetoprint = istoocrowded ? "it's too crowded!" : "come on in!"; //ternary operator
print(messagetoprint); //print message