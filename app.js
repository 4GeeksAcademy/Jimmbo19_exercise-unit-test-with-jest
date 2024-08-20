// Contenido de app.js 



  // One euro is:
//let oneEuroIs = {
 // "JPY": 156.5, // japan yen
  //"USD": 1.07, // us dollar
  //"GBP": 0.87, // british pound
//}
 
  // We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
 
  let valueInDollar = valueInEuro * 1.07;
  
  return valueInDollar;
}


const fromEuroToYen = function(valueInEuro) {

  let valueInyen = valueInEuro * 156.5;
  
  return valueInyen;
}


const fromEuroToGBP = function(valueInEuro) {
 
  let valueInGBP = valueInEuro * 0.87;
  
  return valueInGBP;
}
module.exports = {
  fromEuroToDollar,
  fromEuroToYen,
  fromEuroToGBP
};