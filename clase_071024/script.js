//Agrega el valor a la pantalla de la calculadora 
function appendToDisplay(value){
    document.getElementById('display').value += value;
}
//Borra cualquier dato de la pantalla de la calculadora
function clearDisplay(){
    document.getElementById('display').value = '';
}
//Borra el ultimo valor agregado en la pantalla de la calculadora
function deleteLast(){
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}
//Calcula la operación dada.
function calculateResult(){
    try{
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error){                    //por si el usuario mete un valor que no vale.
        alert('Expresión inválida');
    }
}