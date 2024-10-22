// 1. *********************** */

//Función flecha
function fu (a,b){
    return a+b;
}  
console.log(fu(2,3));

// 2. *********************** */
//estructura de función flecha
let salu2 = () => {};

// 3. *********************** */

let saludo = (nombre) => {
    return 'saludos ' + nombre;
}

console.log(saludo('Isaac'));

// 4. *********************** */
saludar = nombre => 'Saludos ' + nombre;

console.log(saludar('Isaac'));

// 5. ********** pasar multiples parametros ************* */
let suma = (a,b) => a + b;
console.log(suma(5,8));

// 6. ********** crear objeto en funcion flecha ************* */
let obj = () => ({nombre: 'Roberto', edad: 20});

//Se llama al objeto y accedemos a la propiedad
let persona = obj().nombre;
console.log(persona);

//7. ********* Arreglos ********
let arrFunc = () => [1,2,3,4,5];

//acceder al arreglo
console.log(arrFunc()[4]);


w