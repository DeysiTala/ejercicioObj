var assert = require("assert");


//Ejercicio 2
  function Pasatiempo(nombre,edad,pasatiempo2){

  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo2 = pasatiempo2;
  this.hablar = function(){
    return ("Hola soy " + this.nombre + " tengo "+ this.edad + " años y me gusta " + this.pasatiempo2);
  }

}
var respuesta = new Pasatiempo("Deysi", 24, "jugar voley");


//Ejercicio 1
function rectangulo(base,altura) {
  this.base = base;
  this.altura = altura;


this.area = function () { return (this.base*this.altura);
 }

}
var respuesta1 = new rectangulo(2,4);

//Ejercicio 3
function QueEdad(nombre,dia,mes,anioNacimiento,anioActual) {
  this.nombre = nombre;
  this.dia = dia;
  this.mes = mes;
  this.anioNacimiento = anioNacimiento;
  this.anioActual = anioActual;



this.edad = function () { return (this.anioActual-this.anioNacimiento);
 }

}
var respuesta2 = new QueEdad("susan",29,3,1990,2017);


//definiendo la prueba unitaria
describe ("Ejercicio objeto", function(){
  describe("Ejercicio 3", function(){
    it("Prueba deysi, 24 jugar voley",function(){
      assert.equal("Hola soy Deysi tengo 24 años y me gusta jugar voley", respuesta.hablar());
    });
  });
});

describe ("Ejercicio objeto", function(){
  describe("Ejercicio 1", function(){
    it("Prueba rectangulo, (2,4)",function(){
      assert.equal((2*4), respuesta1.area());
    });
  });
});
describe ("Ejercicio objeto", function(){
  describe("Ejercicio 2", function(){
    it("Prueba edad,susan 29,3,1990,2017",function(){
      assert.equal("La actual edad de susan es 27", respuesta2.edad());
    });
  });
});
