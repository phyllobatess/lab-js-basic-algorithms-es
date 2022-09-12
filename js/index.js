// Iteration 1: Names and Input
let hacker1 = "Ramon";
console.log(`El nombre del conductor es ${hacker1}`);
let hacker2 = "John";
console.log(`El nombre del navegante es ${hacker2}`);
//

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `El conductor tiene el nombre más largo, tiene ${hacker1.length} caracteres`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `Parece que el navegante tiene el nombre más largo, tiene ${hacker2.length}  caracteres`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Vaya, ambos tienen nombres igual de largos, con ${hacker1.length} caracteres`
  );
}

// Iteration 3: Loops:

// 3.1:

let conductorToUpperCase = hacker1.toUpperCase();

let result = "";
let result2 = "";

for (let i = 0; i < conductorToUpperCase.length; i++) {
  result = conductorToUpperCase[i];
  result2 = result2 + result + " ";
}
console.log(result2);

// 3.2:

let conductorToLowerCase = hacker1.toLowerCase();
let result3 = "";
let result4 = "";

for (let i = conductorToLowerCase.length - 1; i >= 0; i--) {
  result3 = conductorToLowerCase[i];
  result4 = result4 + result3;
}
console.log(result4);

// 3.3:
if (hacker1 > hacker2) {
  console.log("El nombre del conductor va primero");
} else if (hacker1 < hacker2) {
  console.log("yo, el navegador va priero definitivamente");
} else console.log("Qué? Los dos tienen el mismo nombre?");


//bonus 1:

//1.1  y 1.2

let contador = 1;
let texto =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis iaculis felis. Nullam sit amet enim in elit tempus molestie vel ac quam. Nunc in nibh eu massa dapibus porttitor. Pellentesque ultricies magna non leo congue viverra. Morbi eget ligula bibendum lacus euismod aliquam. Aenean diam tellus, dapibus non ante id, aliquet ultricies dui. Curabitur mollis quis velit ac mattis. Nam lobortis ante vel tincidunt commodo. Proin vulputate maximus purus ut fringilla. Vestibulum tincidunt tincidunt neque, sit amet sollicitudin dolor sollicitudin et. Morbi commodo hendrerit arcu in aliquet. Curabitur rhoncus et velit convallis tempus. Cras sit amet quam et orci aliquam semper nec tristique neque. Nulla et sapien tempor velit auctor posuere. Ut efficitur feugiat nisi. Cras nunc massa, tempor et augue suscipit, luctus dapibus dui. Aliquam vel odio dignissim, maximus risus sit amet, malesuada lorem. Ut porttitor ipsum id eros imperdiet dapibus. Sed nibh purus, laoreet nec sem non, varius condimentum dui. Aenean ac egestas sem. Curabitur eu tellus aliquet, luctus arcu a, blandit augue. Fusce pharetra consectetur pulvinar. Donec sed rutrum sem, non vulputate diam. Quisque arcu ipsum, tempor sit amet tempus vel, vulputate eu odio. Integer sed felis vitae mauris aliquet viverra id vitae libero. Vestibulum tortor lectus, tempor vel enim lacinia, viverra gravida libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi tempor dictum viverra. Mauris in aliquet sapien, et mollis ipsum. Aliquam fermentum volutpat quam, ac posuere lacus feugiat in. Nulla a massa arcu. Nulla efficitur dolor libero. Fusce nec dolor at lorem sodales tempor at eget odio. Aliquam sit amet mi vitae turpis auctor placerat bibendum vel arcu. Phasellus pellentesque eget urna eget porta. Curabitur vehicula, arcu eget maximus venenatis, dolor felis dictum orci, ut aliquet libero neque nec tellus. Fusce dapibus quam sed interdum sagittis. Integer elit enim, viverra et elementum in, feugiat nec diam. Pellentesque suscipit gravida rhoncus. Phasellus iaculis sodales velit sit amet auctor.";

for (let i = 0; i < texto.length; i++)
{
    if (texto[i] === (" "))
    {
        contador++;
        }
}

console.log(contador);


//1.3: contar las veces que la palabra ET aparece en el texto
let countEt = 0;

for (let i = 0; i < texto.length; i++) {
  if (texto[i] ==="e" && texto[i+1]==="t" && texto[i-1]===" " && texto[i+2]===" " )
    countEt++;
  }

console.log(`La palabra "et" aparece en el texto ${countEt} veces`);



//bono 2:

let phraseToCheck = "amor,roma";
function comprueba(string) {
  for (let i = 0; i <= phraseToCheck.length; i++) {
    if (phraseToCheck[i] === phraseToCheck[phraseToCheck.length - 1 - i]) {
      return true;
    } else {
      console.log("No es un palindromo");
      return false;
    }
  }
  if (comprueba(string) === true) {
    console.log("Es un palindromo")
  }
  else {
    console.log("no es un palindromo")
  }
}

  comprueba("amor,roma");