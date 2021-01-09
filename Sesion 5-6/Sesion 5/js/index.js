 
 /*
            OBJETOS LITERALES
 */

let pelicula1 = { 
    id: 1,
    nombre: "El Señor de los Anillos",
    
    reproduciendoPelicula(){
        return `Reproduciendo la película: ${this.nombre}`;
    }
}

let pelicula2 = { 
    id: 1,
    nombre: "La Vida es Bella",
    
    reproduciendoPelicula(){
        return `Reproduciendo la película: ${this.nombre}`;
    }
}

const usuario1 = {
    id: 1,
    nombre: 'Jorge',
    apellidos: 'Villareal González',
    edad: 25,

    mostrarNombreCompleto(){
        return `Nombre completo: ${this.nombre} ${this.apellidos}`;
    },

    mostrarEdad(){
        return `Edad: ${this.edad} años`;
    }
}

/* console.log(pelicula1.reproduciendoPelicula());
console.log(pelicula2.reproduciendoPelicula());
console.log(usuario1.mostrarNombreCompleto());
console.log(usuario1.mostrarEdad()); */

 

 /*
            CLASES Y OBJETOS
 */

/*  class Animal{

    constructor(nombre, sonido){
        this.nombre = nombre;
        this.sonido = sonido;
    }

    emitirSonido(){
        return this.sonido;
    }
 } */

/*  let animal1 = new Animal('paloma', 'pew, pew');
 console.log(`El animal ${animal1.nombre} emite el sonido: ${animal1.emitirSonido()}`)

 let animal2 = new Animal('gallina', 'kikirikiki');
 console.log(`El animal ${animal2.nombre} emite el sonido: ${animal2.emitirSonido()}`) */
 


  /*
            HERENCIA Y POLIMORFISMO
 */

 class Animal{
    constructor(nombre, sonido){
        this.nombre = nombre;
        this.sonido = sonido;
    }
    emitirSonido(){
        return this.sonido;
    }
 }

 class Pajaro extends Animal{
    constructor(nombre, puedeVolar=true){
        super(nombre, 'pew, pew');
        this.puedeVolar = puedeVolar;
    }
 }

 class Perro extends Animal{
    constructor(nombre, color){
        super(nombre, 'guau, guau');
        this.color = color;
    }
 }

/* let pajaro1 = new Pajaro('paloma', true);
if(pajaro1.puedeVolar){
    console.log(`El animal ${pajaro1.nombre} emite el sonido "${pajaro1.emitirSonido()}" y sí puede volar`);
}
else{
    console.log(`El animal ${pajaro1.nombre} emite el sonido: ${pajaro1.emitirSonido()} y no puede volar`);
}
let perro1 = new Perro('salchicha', 'café');
console.log(`El animal ${perro1.nombre} emite el sonido: ${perro1.emitirSonido()}`); */



  /*
            EJEMPLOS CLASES Y OBJETOS
 */

class Video{
    constructor(id, nombre, duracion){
        this.id = id;
        this.nombre = nombre;
        this.duracion = duracion;
     }
     reproducir(){
        return `Reproduciendo el audiovisual "${this.nombre}"`;
    }
}

class Pelicula extends Video{
     constructor(id, nombre, año, genero, duracion){
        super(id, nombre, duracion);
        this.año = año; 
        this.genero = genero;
     }
     reproducir(){
         return `Reproduciendo la película "${this.nombre}" del año ${this.año} y género ${this.genero}`;
     }
 }

 class Capitulo extends Video{
    constructor(id, nombre, duracion, serie){
        super(id, nombre, duracion);
        this.serie = serie;
    }
    reproducir(){
        return `Reproduciendo el capítulo ${this.id} "${this.nombre}" con duración de ${this.duracion} minutos de la serie "${this.serie}".`
    }
}

class Serie{
    constructor(id, nombre, genero, año, capitulos){
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
        this.año = año;
        this.capitulos = capitulos;
    }
    reproducirCapitulo(idCapitulo){
        let capitulo = this.capitulos[idCapitulo-1];
        return capitulo.reproducir();
    }
    mostrarInformacion(){
        return `Serie ${this.nombre} del año ${this.año} y género ${this.genero}`
    }
 }

let pelicula3 = new Pelicula(3, 'La Vida es Bella', 1997, 'Drama', 95);
let pelicula4 = new Pelicula(4, 'El Señor de los Anillos: La Comunidad del Anillo', 2001, 'Aventura', 155);
console.log(pelicula3.reproducir());
console.log(pelicula4.reproducir());

let nombreSerie = 'Cobra Kai';
let capitulo1 = new Capitulo(1, 'El renacer del karate', 35, nombreSerie);
let capitulo2 = new Capitulo(2, 'La venganza del sensei.', 28, nombreSerie);
capitulos_serie = [capitulo1, capitulo2];
let serie1 = new Serie(1, nombreSerie, 'Acción', 2018, capitulos_serie);
console.log('INFORMACIÓN: ', serie1.mostrarInformacion());
console.log('REPRODUCCIÓN: ', serie1.reproducirCapitulo(1));