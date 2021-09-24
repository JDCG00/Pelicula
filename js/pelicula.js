'use strict'

//console.log('Cargado JS');

class Pelicula {
  constructor(){
    //console.log('Se ha creado una película');

    //this es el objeto que ejecuta el código
    this.titulo = 'Tiroteo en Misisissippi'                                               //Tipo string
    this.pueblo = new Pueblo ('TodoPolvo', 'muy polvoriento, en mitad del desierto')      //Tipo objeto
    this.narrador = new Narrador()
    this.paco = new PersonajeBueno('Paco')
    this.maria = new PersonajeBueno('Maria')
    this.morgan = new PersonajeMalo('Morgan')
    this.arma = new Arma()

    this.iniciar()
  }

  iniciar(){
    document.write(`<h1>${this.titulo}</h1>`)
    document.write(`<p>${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}.</p>`)
    this.narrador.hablar('Era una soleada mañana')
    this.paco.hablar(`Hola ${this.maria.nombre}. Hoy hace un día espléndido.`)
    this.maria.hablar(`Hola ${this.paco.nombre}. La verdad es que si.`)
    this.narrador.hablar('Ambos se miraron un instante y siguieron su camino...')
    this.morgan.hablar('Vaya pueblo más...polvoriento')
    this.morgan.hablar('¡Eh tú! ¡Pringao! Dame tu caballo y la cartera')
    this.arma.disparar()
    this.narrador.hablar('Se hace el silencio, no se sabe de donde proviene el disparo')
    this.narrador.hablar('Morgan se mira el abdomen, tiene una profunda herida de bala y se está <span class=sangre>desangrando</span>')
  }
}

class Pueblo {
  constructor(nombre, descripcion) {
    this.nombre = nombre
    this.descripcion = descripcion
  }
}

class Narrador {
  hablar(texto){
    document.write(`- ${texto}.</br></br>`)
  }
}

class Personaje{
  constructor(nombre){
    this.nombre = nombre
    this.arma = new Arma()
  }
}

class PersonajeBueno extends Personaje{
  hablar(texto){
    document.write(`<p class=bueno><span> ${this.nombre}:</span> ${texto}</p>`)
  }
}

class PersonajeMalo extends Personaje{
  hablar(texto){
    document.write(`<p class=malo><span> ${this.nombre}:</span>GRRRRR... ${texto}</p>`)
  }
}

class Arma {
  disparar() {
    document.write(`<p class=disparar>¡¡PUM!!</p>`)
  }
}
/*
class Arma {
  disparar() {
    document.write(`<p class=disparar><span> ${this.nombre}</span> dispara           ¡¡PUM!!</p>`)
  }
}
*/
new Pelicula()
