var a = 6;
var b = 8;
console.log(`La valeur de a : ${a}`);
console.log(`La valeur de b : ${b}`); 
if ( a > b ) {
    console.log(`${a} est plus grand que ${b}`);
} else {
    console.log(`${b} est plus grand que ${a}`);
};

if ( a > b ) {
    console.log(`${b} est plus petit que ${a}`);
} else {
    console.log(`${a} est plus petit que ${b}`);
};

var c = a;
a = b;
b = c; 

console.log(`La valeur de a : ${a}`);
console.log(`La valeur de b : ${b}`); 


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};

console.log("Nombre aleatoire entre 1 et 100 :");
console.log(Math.round(getRandomArbitrary(1, 101)));
console.log("Nombre aleatoire entre 5 et 50 :");
console.log(Math.round(getRandomArbitrary(5, 51)));

console.log("fonction addition :");
var add = addFunction(2, 3); 

function addFunction(a, b) {    
    return a + b;
}
console.log(add);

var resultat = Math.round(getRandomArbitrary(1,101));

if (resultat > 50) {
    console.log(`Je suis nul`);
} else if (resultat < 50) {
    console.log(`Je suis bon`);
};


function nombreAleatoire(x) {
    var x = Math.round(getRandomArbitrary(0, 6));

    if (x === 1) {
        console.log(`AAAA`);
    } else if (x === 2) {
        console.log(`BBBB`);
    } else if (x === 3) {
        console.log(`CCCC`);
    } else if (x === 4) {
        console.log(`DDDD`);
    } else {
        console.log(`Je suis une peruche`);
    }
};

console.log(nombreAleatoire());

switch (Math.round(getRandomArbitrary(0, 6))) {
    case 1:
        console.log(`AAAA`);
      break;
    case 2:
        console.log(`BBBB`);
      break;    
    case 3:
        console.log(`CCCC`);
      break;
    case 4:
        console.log(`DDDD`);
      break;
    default:
        console.log(`Je suis une peruche`);
      break;
  }

  for (let i = 0; i < 10; i++) { 
      console.log(Math.round(getRandomArbitrary(0, 1001)));
  };

 var tableau = new Array();
 for (i=0; i<10; i++) {
    tableau[i]=Math.round(getRandomArbitrary(0, 1001));
  }

  var addi = 0
 for (i=0; i<10; i++) {
    addi += tableau[i];
 }
 console.log(` la somme du tableau est égal a : ${addi}`);