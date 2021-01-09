
/*
                    INTRODUCCION A PROGRAMACION FUNCIONAL
    

    CARACTERÍSTICAS:

        - Inmutabilidad de los datos: 
            Se busca no modificar así como eliminar las asignaciones.
            La función debe de encargarse de una sola cosa.
        

        - Funciones puras:
            Toda aquella función cuyo resultado será siempre el mismo para un valor de entrada.
            Depende solo del argumento recibido.
            No tiene efectos colaterales. 
            Un solo argumento de entrada.
            Devuelve un valor.
            No usa variables globales.
            No usa "this". 
            Lo mejor es hacerlo con constantes (inmutables).


        - Funciones de alto orden (superior).
            Reciben una o más funciones como argumentos.
            Regresan funciones como resultados.
            Ejemplos importantes: .MAP, .FILTER, .REDUCE -> se ejecutan sobre Arrays. 

            MAP: 
                Regresa un nuevo arreglo después de aplicar una función aplicada a cada elemento de un 
                único arreglo.
                [arreglo de números].map(función)

            FILTER:
                Regresa un nuevo arreglo con todos los elementos que cumplan con la condición implementada 
                en una función dada.
                [arreglo de números].filter(función)

            REDUCE:
                Aplica una función a un acumulador y a cada valor de un arreglo. 
                El objetivo es reducir la información a un solo valor y regresarlo. 
                [arreglo de números].reduce(función)


        - Arquitectura de aplicaciones. 
*/



/*
                    ARROW FUNCTIONS - PARDIGMAS IMPERATIVO Y DECLARATIVO

    La programación funcional es un paradigma declarativo. 
    Declarative programming is a programming paradigm that expresses the logic of a computation without describing its control flow.
    Imperative programming is a programming paradigm that uses statements that change a program’s state.

*/

const suma = (a, b) => {
    return a + b; 
}
console.log('Resultado de suma: ', suma(1, 2));

// Paradigma Imperativo
let numbers = [1, 2, 3, 4, 5];
let doubles = [];
for(var i = 0; i < numbers.length; i++){
    doubles.push(numbers[i]*2);
}
console.log(numbers, doubles);

// Paradigma funcional (declarativo)
const doblar = (numero) => {
    return 2*numero;
} 
doubles = numbers.map(doblar);
console.log(numbers, doubles);