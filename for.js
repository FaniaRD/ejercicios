console.log("Esto es un ejemplo de for")

for (var i = 0; i < 4 ; i++) {
  console.log(`Inicia ciclo no. ${i} del primer for`)
  for (var j = 0; j < 4 ; j++) {
    console.log(`Inicia ciclo no. ${j} del segundo for`)
    let resultado
    resultado = i*j
    console.log(`La multiplicación de ${i} por ${j} es ${resultado}`)
    console.log(`Termina ciclo no. ${j} del segundo for`) 
  }
  console.log(`Termina ciclo no.${i} de primer for`) 
}


