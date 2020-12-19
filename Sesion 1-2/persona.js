
class Persona{
    constructor(nombreCompleto){
        this.nombreCompleto = nombreCompleto;
        this.edad = 'Sin Edad';
        this.sexo = 'Sin Sexo';
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getEdad(){
        return this.edad;
    }
    setSexo(sexo) {
        if (sexo !== 'H' && sexo !== 'M'){
            throw "Not a valid sex. Valid arguments include: ['H', 'M'] ";
        }
        this.sexo = sexo;
    }
    getSexo(){
        return this.sexo;
    }
}

/**
 *  Creates an array of Persona objects based on a JSON database of personas. 
 *      @param  {object}            personasDatabase    object that contains the database of persons in JSON format.
 *      @return {Array.<Persona>}   personas            array of Persona objects.
 */
function createPersonasDB(personasDatabase){
    let personas = [];
    nombres = Object.keys(personasDatabase);
    if(nombres.length === 0) throw 'There is no content in the data base!';
    for(i=0; i<nombres.length; i++){
        let nombre = nombres[i];
        let persona = new Persona(nombre);
        persona.setEdad(personasDatabase[nombre].edad);
        persona.setSexo(personasDatabase[nombre].sexo);
        personas[i] = persona;
    }
    return personas;    
}

// Creating list of Persona objects from a JSON database. 
let myPersonasDatabase = {  
                            'Juan Osorio': {edad: 15, sexo: 'H', }, 
                            'Fernanda Alagón': {edad: 21, sexo: 'M'},
                            'Jorge Fernández': {edad: 21, sexo: 'H'}
                        };
personas_test = createPersonasDB({});
console.log(personas_test);
console.log(personas_test[0].nombreCompleto);
