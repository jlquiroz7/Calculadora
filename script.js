// Sistema de gestión de calculadora

// Inicialización de elementos
const pantalla = document.getElementById('pantalla');
const botonCA = document.getElementById('boton-ca');
const botonC = document.getElementById('boton-c');
const botonIgual = document.getElementById('boton-igual');
const botonSuma = document.getElementById('boton-suma');
const botonResta = document.getElementById('boton-resta');
const botonMultiplicacion = document.getElementById('boton-multiplicacion');
const botonDivision = document.getElementById('boton-division');

// Inicialización de variables
let valorEnPantalla = '0';
let operaciones = [];

// Regex
const regexNumero = /^[0-9]+$/;
const regexOperacion = /^[+\-*/]$/;

// Funciones
function sePresiono(tecla) {
    if (valorEnPantalla === '0') {
        valorEnPantalla = '';
    }
    if (tecla.match(regexNumero)) {
        valorEnPantalla += tecla;
    } else if (tecla.match(regexOperacion)) {
        valorEnPantalla += tecla;
        operaciones.push(tecla);
    } else if (tecla === '=') {
        ejecutarOperaciones();
    } else if (tecla === 'CA') {
        valorEnPantalla = '0';
        operaciones = [];
    } else if (tecla === 'C') {
        valorEnPantalla = valorEnPantalla.slice(0, -1);
    } else if (tecla === '.') {
        if (validarUltimoValorIncluyePunto()) {
            return;
        }
        valorEnPantalla += '.';
    }
    pantalla.textContent = valorEnPantalla;
}

function ejecutarOperaciones() {
    const valores = valorEnPantalla.split(/[+\-*/]/);
    if (valores.length !== operaciones.length + 1) {
        return;
    }

    let resultado = parseFloat(valores[0]);
    for (let i = 0; i < operaciones.length; i++) {
        const siguienteValor = parseFloat(valores[i + 1]);
        resultado = ejecutarOperacion(operaciones[i], resultado, siguienteValor);
    }
    valorEnPantalla = `${resultado}`;
    operaciones = [];
}

function ejecutarOperacion(operacion, valor1, valor2) {
    let resultado;
    switch (operacion) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor1 / valor2;
            break;
    }
    return resultado;
}

function validarUltimoValorIncluyePunto() {
    const valores = valorEnPantalla.split(/[+\-*/]/);
    const ultimoValor = valores[valores.length - 1];
    if (ultimoValor.includes('.')) {
        return true;
    }
    return false;
}