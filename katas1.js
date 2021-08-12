function oneThroughTwenty() {
    
    let Progre = [];
    for (let i=0; i<=19; i++){

      
      Progre.push(i+1);

      
    }
    return Progre
}
console.log(oneThroughTwenty())

// //--------------------------------------

 function evensToTwenty() {
    
  let pares =  [];
  for(i=2; i<=20; i=i+2){
    
    pares.push(i)

  }
   return pares
}
console.log(evensToTwenty())

// //--------------------------------------


function oddsToTwenty() {
    
  let impares =  [];
  for(i=1; i<=20; i=i+2){
    
    impares.push(i)

  }
   return impares
}
console.log(oddsToTwenty())

// //--------------------------------------


function multiplesOfFive() {

     qint = []
     for (let i=5; i<=100; i=i+5){
    qint.push(i)
    }
    
  return qint
}
console.log(multiplesOfFive())



// //--------------------------------------


function squareNumbers() {
  
  let sqr = ''
  let perf = []
  for(let i=1; i<=100; i++) {
    sqr = Math.sqrt(i)
    if(sqr%1 === 0) {
    perf.push(i)
    }
  }
  return  perf
}
console.log(squareNumbers())

// //--------------------------------------


function countingBackwards() {

  let back = []
  for(i=20; i>0; i--){ 
  back.push(i)
  }
  return back

}
console.log(countingBackwards())


//--------------------------------------


function evenNumbersBackwards() {
  let even = []
  for(let i=20; i>=0; i=i-2){
    even.push(i)
  }
  return even
}
console.log(evenNumbersBackwards())

//--------------------------------------


function oddNumbersBackwards() {
    
  let odd = []
  for(let i=19; i>=0; i=i-2){
    odd.push(i)
  }
  return odd
}
console.log(oddNumbersBackwards())

//--------------------------------------


function multiplesOfFiveBackwards() {

  let bqint = []
  for(let i=100; i>=5; i=i-5){
    bqint.push(i)

  }
  return bqint
}
console.log(multiplesOfFiveBackwards())

//--------------------------------------


function squareNumbersBackwards() {
    
    
    let bsqr = ""
    let bperf = []
    for(i=100; i>=1; i--) {
      bsqr = Math.sqrt(i)
      if(bsqr%1 === 0) {
      bperf.push(i)
      }
    }
    return  bperf
}
console.log(squareNumbersBackwards())


// // //call function squareNumbersBackwards
