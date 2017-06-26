function ejercicio2(_telefonos,_filtro)
{
     return _telefonos.filter(function(a){
      var primera = a.toString().substr(0,3);
      var ultimas = a.toString().substr(6);
      return (primeras == filtro|| ultimas ==_filtro);
    });


  }

  function Pasatiempo(nombre,edad,pasatiempo2){

  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo2 = pasatiempo2;
  this.hablar = function(){
    return ("Hola soy " + this.nombre + " tengo "+ this.edad + " años y me gusta " + this.pasatiempo2);
  }

}
var respuesta = new Pasatiempo("Deysi", 24, "jugar voley");




//definiendo la prueba unitaria
describe ("Ejercicio objeto", function(){
  describe("Ejercicio 1", function(){
    it("Prueba deysi, 24 jugar voley",function(){
      assert.equal("Hola soy Deysi tengo 24 años y me gusta jugar voley", respuesta.hablar());
    });
  });
});
