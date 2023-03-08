// Origen de las promesas
  "ECMASCRIPT"
    "ECMA INTERTATIONAL"
      "Javascript-2015"

  "CALLBACKS"
    "Es una función que llama a otra función como parametro(retorna)"
    
  functionResultadoDatos(function (resultadoDatos){
    functionPagarTarjeta(resultadoDatos,function(resultadoTarjeta){
      console.log(resultadoTarjeta);
    })
  })

// Que es la promesa
// Concepto: Es un objeto que nos trae un resultado(exitoso y no exitoso)
// Resolve: Es una función que nos va a traer el resultado exitoso
// Reject: Es una función que nos va a traer un resultado no exitoso

const promesa = () =>{
  return new Promise((resolve, reject)=>{
    if(false){
      resolve("Yeii, el resultado fue exitoso");
    }else{
      reject("Upss, no fue exitoso.");
    }
  })
}

promesa().then( response => {
  console.log(response);
}).catch( error => {
  console.log(error);
})

const promesaAll = () =>{
  return Promise.all([
    new Promise( function(resolve, reject){
      resolve("Exitoso 1");
    }),
    new Promise( function(resolve, reject){
      resolve("exitoso 2");
    })
  ])
}

promesaAll().then( responseAll =>
  {
    console.log("Las promesas que se ejecutaron fueron:", responseAll)
  }
);