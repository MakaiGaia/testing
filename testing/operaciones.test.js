//Importando las funciones sobre las que vamos a hacer testing
// {Nombre de lo importado} = requiere(Ruta del archivo sin extensión)
const {add, substract, multiply, divide, residuo} = require ("../operaciones");
//1. Describir que es lo que va a hacer el test
describe("Probando la funcion suma", () =>{
    //test()
    test("Probando que en la funcion add 2 + 2 = 4", () => {
        expect(add(2,2)).toBe(4);
    });
    test("Probando que retorne underfined si ingresamos un string", () => {
        expect(add("4",2)).toBeUndefined();
    });

    test("Probando que retorne un valor falsy", () => {
        expect(add(false, 4)).toBeFalsy();
    });
});

//Funcion Resta
describe("Pruebas sobre la funcion substract", () => {
    test("Probando que una resta de numeros positivos sea mayor que 0", () => {
        expect(substract(10,5)).toBeGreaterThan(0);
    });
    test("Probando la resta de negativos no sea posible, devuelva cero", () => {
        expect(substract((-5),(-5))).toBe(0);
    });
    test("Probando que retorne underfined si es ingresada una cadena", () => {
        expect(substract("-3",5)).toBeUndefined();
    });
    
});

//Funcion multiplicación
describe("Pruebas de funcion multiply", () => {
    test("Probando la multiplicacion de dos numeros positivos sea mayor que cero", () => {
        expect(multiply(5,5)).toBeGreaterThan(0);    
    });
    test("Probando la multiplicación de un numero negativo y positivo, sea menor que cero", () => {
        expect(multiply(-3,5)).toBeLessThan(0);
    });
    test("Multiplicación de numeros negativos de positivo", () => {
        expect(multiply(-3,-5)).toBeGreaterThan(0);
    });
    test("Multiplicacion de 3 y 5 sea 15", () => {
        expect(multiply(3,5)).toBe(15);
    });

});

//Función dividir
describe("Pruebas de funcion divide", () => {
    test("Probando si el divisor es cero, hace no hace la división", () => {
        expect(divide(2,0)).toBeUndefined();    
    });
    test("Probando si tanto el divisor y dividendo es cero, regresa un aviso", () => {
        expect(divide(0,0)).toMatch("poner 0");
    });
    test("Probando que si divide 10 entre 2 devuelva 5 ", () => {
        expect(divide(10,2)).toBe(5);
    });
    test("Probando si el divisor y dividendo es el mismo, resulte 1 ", () => {
        expect(divide(10,10)).toBe(1);
    });

});

//Funcion residuo
describe("Pruebas de funcion residuo", () => {
    test("Probando que si el divisor es cero, no realize el modulo", () => {
        expect(residuo(10,0)).toBeUndefined();    
    });
    test("Residuo de 10/2 sea 0", () => {
        expect(residuo(10,2)).toBe(0);
    });
    test("Residuo de 10/20 sea 10", () => {
        expect(residuo(10,20)).toBe(10);
    });
    test("Residuo de 50/3 sea mayor que cero", () => {
        expect(residuo(50,3)).toBeGreaterThan(0);
    });

});