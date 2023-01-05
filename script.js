// Attention, vous n’avez pas le droit d’utilisez de fonctions préféfinies

// 1. Créez une fonction qui prend deux nombres en entrée et qui renvoie leur somme. Appelez cette fonction avec différentes valeurs 
// pour vérifier que le résultat est correct.

function sum(a,b){
    return a + b;
}

console.log(sum(2,3));

// 2. Créez une fonction qui prend une chaîne de caractères en entrée et qui renvoie la chaîne inversée. Par exemple, "bonjour" deviendrait
//  "ruojnob". Appelez cette fonction avec différentes chaînes de caractères pour vérifier que le résultat est correct.

function reverseWord(word){
    let newWord = '';
    for(let i in word){
        newWord = word[i] + newWord;
    }  
    return newWord;
}

console.log(reverseWord("bonjour"));

// 3. Créez une fonction qui prend un tableau de nombres en entrée et qui renvoie le nombre le plus grand. Appelez cette fonction avec différents
//  tableaux pour vérifier que le résultat est correct.

const testArray = [70,5,223,2,5,6];

function theBiggestNumber(array){
  let comparator = array[0];
  for(let i in array){
    if(array[i] >= comparator){
      comparator = array[i];
    }
  }
  return comparator;
}

console.log(theBiggestNumber(testArray));


// 4. Créez une fonction qui prend un nombre en entrée et qui renvoie la somme de tous les nombres entiers de 1 à ce nombre. Par exemple, si le
//  nombre est 5, la fonction doit renvoyer 15 (1 + 2 + 3 + 4 + 5). Appelez cette fonction avec différents nombres pour vérifier que le résultat est correct.

function factorialSum(number){
  let sum = 0;
  while(number !== 0 ){
    sum = number + sum;
    number = number - 1;
  }
  return sum;
}

console.log(factorialSum(6));


// 5. Créez une fonction qui prend un tableau de chaînes de caractères en entrée et qui renvoie une chaîne de caractères qui contient toutes les
//  chaînes de caractères du tableau concaténées et séparées par une virgule. Par exemple, ["Bonjour", "Hello", "Hola"] deviendrait
//   "Bonjour, Hello, Hola". Appelez cette fonction avec différents tableaux pour vérifier que le résultat est correct.

const ArrayTest = ["Bonjour", "Hello", "Hola"]

function linkedArray(array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += array[i];
    if (i < array.length - 1) {
      result += ", ";
    }
  }
  return result;
}

console.log(linkedArray(ArrayTest));









