

const  {
    fromEuroToDollar,
    fromEuroToYen,
    fromEuroToGBP
  }  = require('./app.js');


  // EURO A DOLLAR
test('3 dlls igual a 3.21', () =>{
    expect(fromEuroToDollar(3)).toBe(3.21);
})

test('1 dlls igual a 1.07', () =>{
    expect(fromEuroToDollar(1)).toBe(1.07);
})

test('0 dlls igual a 0', () =>{
    expect(fromEuroToDollar(0)).toBe(0);
})

test('7.55 dlls igual a 8.0785', () =>{
    expect(fromEuroToDollar(7.55)).toBe(8.0785);
})

// EURO A YEN

test('1 dlls igual a 156.5', () =>{
    expect(fromEuroToYen(1)).toBe(156.5);
})

test('0 dlls igual a 0', () =>{
    expect(fromEuroToYen(0)).toBe(0);
})

test('5 dlls igual a 782.5', () =>{
    expect(fromEuroToYen(5)).toBe(782.5);
})

test('11.5 dlls igual a 1799.75', () =>{
    expect(fromEuroToYen(11.5)).toBe(1799.75);
})

// EURO A GBP

test('1 dlls igual a 0.87', () =>{
    expect(fromEuroToGBP(1)).toBe(0.87);
})

test('0 dlls igual a 0', () =>{
    expect(fromEuroToGBP(0)).toBe(0);
})

test('8 dlls igual a 6.96', () =>{
    expect(fromEuroToGBP(8)).toBe(6.96);
})

test('4.2 dlls igual a 3.654', () =>{
    expect(fromEuroToGBP(4.2)).toBe(3.654);
})