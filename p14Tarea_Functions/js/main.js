//TAREA

var bmentorsNames = [
    "Brenda González",
    "Shalem Solis",
    "Jorge Ochoa",
    "Rurick Maqueo",
    "Alex Cruz",
    "Daniel Ortega"
]
var amentorsNames = [
    "Verónica Nemecio",
    "Carolina Gayoso",
    "David Moranchel",
    "Carlos Silva",
    "Michael Villalba",
    "Israel Salinas",
    "Carlos Ramos"
]

//función que me permita ingresar el nombre de un array, y contar cuántos items tiene, si el array no existe, debe enviar un prompt que diga "tu array no existe"

const arraySelector = (array) => {
    if (array == amentorsNames | array == bmentorsNames) {
    console.log (array.length)
    }
    else{
    alert("Tu array no existe")
    }
    }

//función que reciba un array, e imprima los elementos de ese array en orden alfábetico y con la primer palabra en uppercase

const ordenArray = (array) =>{
    array = array.sort() 
    let newArray = [] 
    for(i=0;i<array.length;i++){  
      newArray[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1); 
    }
    return newArray
  }

  
 
  //Función que reciba un array, un número, y debe de imprimir cada uno de los items del array con los caracteres limitados al número ingresado
  
  const slicedArray = (array, num) =>{
    for(i=0;i < array.length; i++){
      var slicedWord = array[i].substring(0, num)
      console.log(slicedWord)
    }
  }
  slicedArray(amentorsNames,2)



//función que reciba una cantidad (número), este número será la cantidad de veces que se solicite al usuario mediante un prompt algún nombre, todos los nombres se deben almacenar en una colección y al finalizar me debe mostrar la lista de nombres, con sus respectivas iniciales


var initials = ""; // ambito global ya que se utiliza en ambas funciones
const getInitials = word => (initials += word.charAt(0) + ". ");

const printNamesInitials = arrayNames => {
    arrayNames.forEach(name => {
      let arrayName = name.split(" ");
      arrayName.forEach(getInitials); // forEach envia por defecto el item si se le pasa una funcion
      console.log(`${name} ${initials}`);
      initials = "";
    });
  };
  
const countName = (num) => {
 for (i=0; i < num; i++ ){
     let name =  prompt("Ingresa tu nombre")
     newArrayName.push(name)
    console.log(newArrayName)
 }
}
getInitials(newArrayName) */