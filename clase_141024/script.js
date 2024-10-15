//FUNCIONES
/*function hello() {
    console.log('Hola Js');    
}
hello();

function hello(){
    return 'Hola Js'
}

const result = hello();
console.log(result);

hello();

//retorna objeto vacio
function hello() {
    return{};    
}
console.log(hello());

function hello() {
    return{
        nombre: 'Raul'
    }    
}

console.log(hello());

function hello() {
    return function (){
        return 'Hola Js'
    }    
}

console.log(hello()());

//uso de parametros de funciones
function helloconJS(name){
    return 'Hola ' + name
}
console.log('Antonio');

function helloconJS(x,y) {
    return x + y;    
}

console.log(helloconJS(10,20));

//control de errores de parametros
function hello(x,y=0) {
    return x + y;    
}
console.log(hello(10));
*/
const user ={
    nombre: 'Isaac',
    apellidoM: 'Montes',
    edad: 15,
    edoCivil: 'soltero',
    domicilio:{
        ciudad: 'CDMX',
        calle: 'NOSE',
        numero: 123
    },
    amigos:['Angel', 'Eduardo'],
    activo:true,
    sendMensaje: function mame() {
        return 'mensaje enviado'
    }
}
//alert ciudad, calle, numero...
//consola, los amigos
//alert activo o no
//consola nombre, apellidoM, edoCivil
//alert (estado del mensaje)
alert(`${user.domicilio.ciudad}, ${user.domicilio.calle} ${user.domicilio.numero}`)
console.log(user.amigos);
alert(user.activo)
console.log(`${user.nombre} ${user.apellidoM}, ${user.estadoCivil}`);
alert(user.sendMensaje())