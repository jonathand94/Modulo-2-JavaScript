
//                          INTRODUCCIÓN ARREGLOS Y OBJETOS

let frutas = ['manzanas', 'pera', 'naranja', 'plátano'];
let persona = {nombre: 'Jonathan', edad: 25, profesion: 'desarrollador'};
let animales = ['perro', 'gato', 'lagartija', 'oso', 'unicornio bebé mutante'];

console.log(persona.nombre, persona.edad, persona.profesion);



//                          FUNCIONES Y ARREGLOS

/**
 *  Multiplica cada número por 2.
 *      @param      {Array.Number}    numbers   números que se van a multiplicar por dos.
 *      @returns    {Array.Number}    arreglo con los números multiplicados por 2.
 */
function multiplyByTwo(numbers){
    let multipliedNumbers = [];
    for(var i=0; i < numbers.length; i++){
        multipliedNumbers.push(numbers[i] * 2);
    }
    return multipliedNumbers;
}
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(multiplyByTwo(numbers));



//                          RETO 1

let inputFrutas = ['Melón', 'Plátano', 'Durazno'];
console.log(inputFrutas);
inputFrutas.push('Sandía');
console.log(inputFrutas);



//                          OBJETOS

// único tipo de dato que almacena propiedades y valores
let car = {
    brand: 'Nissan',
    modelo: 'Versa',
    año: 2021, 
    color: 'azul',
    lucesPrendidas: true
}

let Astronauta = {
    nombre: 'Bob',
    naveEspacial: 'Estrella de la Muerte',
    alias: 'Darth Vader',
    edad: 24,
    colorTraje: 'gris',
    peso: 65,
    altura: 1.78
}
console.log(Astronauta.nombre)

let Persona = {
    nombre: 'Jonathan',
    profesion: 'desarrollador',
    edad: 26,
    peso: 70,
    altura: 1.78
}
console.log(Persona.profesion)