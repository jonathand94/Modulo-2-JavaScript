
//                          INTRODUCCIÓN FUNCIONES

/**
 *  Realiza la operación de suma entre dos números. 
 *      @param      {Number}    primerNumero    primer número que se va a sumar.
 *      @param      {Number}    segundoNumero   segundo número que se va a sumar.
 *      @returns    {Number}    resultado de la suma entre ambos números. 
 */
function suma(primerNumero, segundoNumero){
    return primerNumero + segundoNumero;
}
console.log('Resultado de la suma: ', suma(5, 3));



//                   EJEMPLO DECLARACIÓN DE FUNCIÓN BÁSICA

let añoActual = 2020;

/**
 *  Calcular la edad de la persona a partir de su año de nacimiento.
 *      @param      {Number}    añoNacimiento   año de nacimiento de la persona.
 *      @returns    {Number}    edad de la persona inferida a partir de su año de nacimiento.
 */
function calcularEdad(añoNacimiento){
    if (añoNacimiento >= añoActual){
        throw('¡No puedes ingresar un año mayor o igual al año actual (%d)!', añoActual);
    }
    else if(añoNacimiento <= 1910){
        throw('¡Eres muy viejo! Dudo que hayas ingresado una edad válida.');
    }
    return añoActual - añoNacimiento;
}
console.log('Tienes %s años.', calcularEdad(1994));



//                   EJEMPLO DECLARACIÓN DE FUNCIÓN ANIDADA

let edadRetiro = 65;

/**
 *  Calcula los años que se necesitan para que se jubile la persona.
 *      @param      {Number}    añoNacimiento   año de nacimiento de la persona.
 *      @param      {String}    nombrePersona   nombre de la persona.
 *      @returns    {Number}    años que tienen que transcurrir para que se jubile la persona.
 */
function calcularAñosParaJubilación(añoNacimiento, nombrePersona){
    // Calculamos la edad que tiene la persona en función de su año de nacimiento
    let edadPersona = calcularEdad(añoNacimiento);
    añosRetiro = edadRetiro - edadPersona;
    console.log('%s se retira en %d años.', nombrePersona, añosRetiro);
}
calcularAñosParaJubilación(1994, 'Jonathan');



//                                  RETO 1

/**
 *  Calcular la edad de la persona a partir de su año de nacimiento y un año determinado en el futuro.
 *      @param      {Number}    añoNacimiento   año de nacimiento de la persona.
 *      @param      {Number}    añObjetivo      año para el cual se quiere calcular la edad de la persona.
 *      @returns    {Number}    edad de la persona que tendrá en el año objetivo. 
 */
function calcularEdadObjetivo(añoObjetivo, añoNacimiento){
    if(añoObjetivo <= añoActual){
        throw('Ingresa un año en el futuro. ¡No puedes ingresar años en el pasado!');
    }
    edadPersona = calcularEdad(añoNacimiento);
    edadCalculada = edadPersona + (añoObjetivo - añoActual);
    console.log('En el año %d vas a tener %d años.', añoObjetivo, edadCalculada);
    return edadCalculada;
}
calcularEdadObjetivo(2057, 1994);


//                     EJEMPLO EXPRESIÓN DE FUNCIONES

// La diferencia de las expresiones de funciones con respecto 
// a la declaración de funciones es que almacenas
// el resultado de la función en la variable. 

/**
 *  Muestra mensajes según la profesión de la persona.
 *      @param      {String}    profesion       profesión a la que se dedica la persona. 
 *      @param      {String}    nombrePersona   nombre de la persona. 
 *      @returns    {String}    mensaje según la profesión de la persona. 
 */
var whatDoYouDo = function(profesion, nombrePersona){
    let msg = nombrePersona + ' is a ' + profesion + ' that';
    switch(profesion){
        case 'developer':
            return msg + ' develops cool apps!';
        case 'designer':
            return msg + ' designs awesome websites!';
        default:
            return msg + ' does something else.';
    }
}
console.log(whatDoYouDo('developer', 'Jonathan')); 
console.log(whatDoYouDo('lawyer', 'María')); 
console.log(whatDoYouDo('designer', 'Jorge')); 



//                                  RETO 2

// Sin error!



//                  IIFE - DECLARACIÓN DE FUNCIONES INVOCADAS INMEDIATAMENTE

// La ejecución de la función es inmediata.
// El patrón de diseño se llama autoejecutable.
// Se envuelve toda la función en un paréntesis. 
// ¡La función se llama así misma!
// La función no tiene nombre porque es temporal. Solo se usa cuando se necesite. 
// Se pueden utilizar cuando la función solo se vaya a ocupar de manera temporal. 

(function(){
    var name = 'John Doe';
    console.log(name);
})();



//                                  RETO 3

let radio = 5;

// Función Declarativa
/**
 *  Calcula el área del círculo en función de un radio especificado por el usuario. 
 *      @param      {Number}    radio       radio del círculo.  
 *      @returns    {Number}    área calculada del círculo en función de un radio específico.
 */
function calcularAreaCirculoDeclarativo(radio){
    if(radio <= 0){
        throw('¡No puedes ingresar radios que sean cero o negativos!');
    }
    return Math.PI * (radio^2);
}
console.log('El área del círculo con radio %d es %f', radio, calcularAreaCirculoDeclarativo(radio));

// Expresión de Función
/**
 *  Calcula el área del círculo en función de un radio especificado por el usuario. 
 *      @param      {Number}    radio       radio del círculo.  
 *      @returns    {Number}    área calculada del círculo en función de un radio específico.
 */
let areaCirculo =function calcularAreaCirculoExpresion(radio){
    if(radio <= 0){
        throw('¡No puedes ingresar radios que sean cero o negativos!');
    }
    return Math.PI * (radio^2);
}
console.log('El área del círculo con radio %d es %f', radio, areaCirculo(radio));

// Función IIFE
/**
 *  Calcula el área del círculo en función de un radio especificado por el usuario. 
 *      @param      {Number}    radio       radio del círculo.  
 *      @returns    {null}      None
 */
(function calcularAreaCirculoIIFE(radio){
    if(radio <= 0){
        throw('¡No puedes ingresar radios que sean cero o negativos!');
    }
    console.log('El área del círculo con radio %d es %f', radio, Math.PI * (radio^2));
})(radio);
