var kodersDb = [
    {
      name: 'Eddy Alexander',
      lastName: 'Ruiz Álvarez',
      deliveredPractices: 9,
      totalAssistance: 22
    },
    {
      name: 'Iván',
      lastName: 'Pedraza Sanchéz',
      deliveredPractices: 12,
      totalAssistance: 25
    }, {
      name: 'Mauricio',
      lastName: 'López Suarez',
      deliveredPractices: 13,
      totalAssistance: 18
    }, {
      name: 'Xabier Enrique',
      lastName: 'Hernández Hernández',
      deliveredPractices: 8,
      totalAssistance: 22
    }, {
      name: 'Raquel Monserrat',
      lastName: 'Cruz Torres',
      deliveredPractices: 15,
      totalAssistance: 19
    }, {
      name: 'Etnar Uriel',
      lastName: 'Sánchez González',
      deliveredPractices: 3,
      totalAssistance: 15
    }, {
      name: 'Gabriela Elvira',
      lastName: 'Camarillo Luna',
      deliveredPractices: 10,
      totalAssistance: 18
    }, {
      name: 'Ana Marcela',
      lastName: 'Casasola López',
      deliveredPractices: 15,
      totalAssistance: 24
    }, {
      name: 'Evelyn Fernanda',
      lastName: 'Palacios Vera',
      deliveredPractices: 8,
      totalAssistance: 18
    }, {
      name: 'Víctor Octavio',
      lastName: 'Torres Jimenez',
      deliveredPractices: 11,
      totalAssistance: 16
    }
  ]
  
  //Práctica 22:
  // 1. Obtener a todos los koders cuyas practicas entregadas (deliveredPractices) sea menor a 10

  /* const arrDeliveredPractices = kodersDb.filter((koder) => {
    if (koder.deliveredPractices < 10) return koder
  }) */
  const arrDeliveredPractices = kodersDb.filter(koder =>koder.deliveredPractices < 10)

  console.log(arrDeliveredPractices)
  
  // 2. Obtener a todos los koders cuya asistencia (totalAssistance) sea menor a 20
  /* const arrTotalAssistance = kodersDb.filter((koder) => {
    if (koder.totalAssistance < 20) return koder
  }) */
  const arrTotalAssistance =kodersDb.filter(koder =>koder.totalAssistance < 20)

  console.log(arrTotalAssistance)

 
  // 3. Obtener el promedio general de prácticas entregadas
  const deliveredPractices = kodersDb.reduce((total, cValue) => {
    return total + cValue.deliveredPractices
  }, 0) 
  const averageDeliveredPractices = deliveredPractices /  kodersDb.length

  console.log(averageDeliveredPractices)
  

  // 4. Obtener el promedio general de asistencias
  const totalAssistance = kodersDb.reduce((total, cValue) => total + cValue.totalAssistance, 0)
  const averageTotalAssistance = totalAssistance /kodersDb.length
  
  console.log(averageTotalAssistance)


  // 5.- En el elemento con el id "practices-container" insertar una fila por cada koder obtenido en el paso 1, debería tener la siguiente estructura:

  //Iterate array
  arrDeliveredPractices.forEach( (koder, index) => {
  let tableRow = document.createElement("tr")

  let tdNumber = document.createElement("td")
  let textTdNumber = document.createTextNode(index + 1)

  let tdName = document.createElement("td")
  let textTdName = document.createTextNode(`${koder.name} ${koder.lastName} `)

  let tdPractices = document.createElement("td")
  let textTdPractices = document.createTextNode(koder.deliveredPractices)

  tdNumber.appendChild(textTdNumber)
  tdName.appendChild(textTdName)
  tdPractices.appendChild(textTdPractices)

  tableRow.appendChild(tdNumber)
  tableRow.appendChild(tdName)
  tableRow.appendChild(tdPractices)

  let containerPractices = document.getElementById("practices-container")
  containerPractices.appendChild(tableRow)
})


  // Otra forma
  // Función para construir un "td" con un valor
  const constructTd = (val) => {
  let td = document.createElement("td")
  let text = document.createTextNode(val)
  td.appendChild(text)
  return td
  }

arrDeliveredPractices.forEach( (koder, index) => {
  let tableRow = document.createElement("tr")
  
  let tdNumber = constructTd(index + 1)
  let tdName = constructTd(`${koder.name} ${koder.lastName}`)
  let tdPractices = constructTd(koder.deliveredPractices)

  tableRow.appendChild(tdNumber)
  tableRow.appendChild(tdName)
  tableRow.appendChild(tdPractices)

 // containerPractices.appendChild(tableRow)
})


arrDeliveredPractices.forEach( (koder, index) => {
  let tableRow = document.createElement("tr")
  let tdNumber = constructTd(index + 1)
  let tdName = constructTd(`${koder.name} ${koder.lastName}`)
  let tdPractices = constructTd(koder.totalAssistance)

  tableRow.appendChild(tdNumber)
  tableRow.appendChild(tdName)
  tableRow.appendChild(tdPractices)

  //containerAssistances.appendChild(tableRow)
})

  
// 6.- En el elemento con el id "assistances-container" insertar una fila por cada koder obtenido en el paso 2, debería tener la siguiente estructura:
//   <tr>
//       <td>{número de koder}</td>
//       <td>{nombre completo del koder}</td>
//       <td>{asistencias del koder}</td>
//   </tr>

  //Iterate array
arrTotalAssistance.forEach( (koder, index) => {
    let tableRow = document.createElement("tr")
  
    let tdNumber = document.createElement("td")
    let textTdNumber = document.createTextNode(index + 1)
  
    let tdName = document.createElement("td")
    let textTdName = document.createTextNode(`${koder.name} ${koder.lastName} `)
  
    let tdAssitance = document.createElement("td")
    let textTdAssitance = document.createTextNode(koder.totalAssistance)
  
    tdNumber.appendChild(textTdNumber)
    tdName.appendChild(textTdName)
    tdAssitance.appendChild(textTdAssitance)
  
    tableRow.appendChild(tdNumber)
    tableRow.appendChild(tdName)
    tableRow.appendChild(tdAssitance)
  
    let containerAssistances = document.getElementById("assistances-container")
    containerAssistances.appendChild(tableRow)
  })


// 7.- En el elemento con el id "practices-average", mostrar el promedio general de prácticas entregadas obtenido en el paso 3
const averagePractices = document.getElementById('practices-average')
const averagePracticesText = document.createTextNode(averageDeliveredPractices) 
averagePractices.appendChild(averagePracticesText)


// 8.- En el elemento con el id "assistance-average", mostrar el promedio general de asistencias entregadas obtenido en el paso 4
 
const averageAssistances = document.getElementById('assistance-average')
const averageAssistancesText = document.createTextNode(averageTotalAssistance) 
averageAssistances.appendChild(averageAssistancesText)


//   ***Notas***
//   Recordemos que podemos acceder a alguna propiedad de un objeto y asignar su valor a una variable con la sintaxis:
  
//       var someVar = objeto.propiedad
  
//   Podemos crear contenido dinámico insertando variables mediante la sintaxis
  
//       ${someVar}
  
//   así que podemos crear un elemento html con contenido dinámico de la siguiente forma:
  
//   var someObject = {
//       songName = "Lago en el cielo",
//       author = "Gustavo Cerati"
//   }
  
//   var mySong = someObject.songName;
//   var songAuthor = someObject.author;
  
//   var someElement = document.createElement("p");
//   -(con esto obtenemos un elemento <p></p>)
  
//   var someText = document.createTextNode(`Mi canción es ${mySong} y el autor es ${songAuthor}`)
//   -(con esto obtenemos un nodo de texto que dice "Mi canción es Lago en el cielo y el autor es Gustavo Cerati")
  
//   y después podemos crear un nodo completo:
  
//   someElement.appendChild(someText)
//   -(con esto obtenemos <p>Mi canción es Lago en el cielo y el autor es Gustavo Cerati</p>)
  
  
//   Happy Hacking!!!







