// Elementos a Utilizar
const pantalla = document.getElementById('pantalla');
const botonCA = document.getElementById('boton-ca');
const botonC = document.getElementById('boton-c');
const botonIgual = document.getElementById('boton-igual');
const botonSuma = document.getElementById('boton-suma');
const botonResta = document.getElementById('boton-resta');
const botonMultiplicacion = document.getElementById('boton-multiplicacion');
const botonDivision = document.getElementById('boton-division');
const listaHistorial = document.getElementById('historial');

// Inicialización de variables
let valorEnPantalla = '';
let operaciones = [];
let historialDeOperaciones = [];
let operacionActual = '';

// Expresion regular para Validar los numeros   
const regexNumero = /^[0-9]+$/;

// Expresion regular para Validar los numeros
const regexOperacion = /^[+\-*/]$/;                    

// Funciones
function sePresiono(tecla) {
    if (valorEnPantalla === '0') {
        actualizarValorEnPantalla('');
    }
    if (tecla.match(regexNumero)) {
        actualizarValorEnPantalla(valorEnPantalla + tecla);
        operacionActual += tecla;
    } else if (tecla.match(regexOperacion)) {
        actualizarValorEnPantalla(valorEnPantalla + tecla);
        operaciones.push(tecla);
        operacionActual += ` ${tecla} `;
    } else if (tecla === '=') {
        const ultimoCaracter = valorEnPantalla.slice(-1);
        if (ultimoCaracter.match(regexOperacion)) {
            // Con esto no permito presionar igual después de cualquier operador
            return;
        }
        if (operacionActual === '') {
            // Con esto no permito presionar igual sin ninguna operación
            return;
        }
        const resultado = ejecutarOperaciones();
        historialDeOperaciones.unshift(operacionActual + ' = ' + resultado);
        operacionActual = `${resultado}`;
        mostrarHistorial();
    } else if (tecla === 'CA') {
        actualizarValorEnPantalla('');
        operaciones = [];
        operacionActual = '';
    } else if (tecla === 'C') {
        actualizarValorEnPantalla(valorEnPantalla.slice(0, -1));
        operacionActual = operacionActual.slice(0, -1);
    } else if (tecla === '.') {
        if (validarUltimoValorIncluyePunto()) {
            return;
        }
        actualizarValorEnPantalla(valorEnPantalla + '.');
        operacionActual += '.';
    }
    // Mostrar el símbolo si la última tecla es operador, si no el último número
    const ultimoCaracter = valorEnPantalla.slice(-1);
    if (ultimoCaracter.match(regexOperacion)) {
        pantalla.textContent = ultimoCaracter;
    } else {
        const valores = valorEnPantalla.split(/[+\-*/]/);
        pantalla.textContent = valores[valores.length - 1] || '';
    }
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
    actualizarValorEnPantalla(`${resultado}`);
    operaciones = [];
    return resultado;
}

function ejecutarOperacion(operacion, valor1, valor2) {
    switch (operacion) {
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case '*':
            return valor1 * valor2;
        case '/':
            return valor1 / valor2;
    }
}

function validarUltimoValorIncluyePunto() {
    const valores = valorEnPantalla.split(/[+\-*/]/);
    const ultimoValor = valores[valores.length - 1];
    if (ultimoValor.includes('.')) {
        return true;
    }
    return false;
}

function mostrarHistorial() {
    listaHistorial.innerHTML = '';
    historialDeOperaciones.forEach(operacion => {
        const li = document.createElement('li');
        li.textContent = operacion;
        listaHistorial.appendChild(li);
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Backspace') {
        return;
    }
    const tecla = convertirTecla(event);
    sePresiono(tecla);
});

document.addEventListener('keypress', (event) => {
    const tecla = convertirTecla(event);
    sePresiono(tecla);
});

function convertirTecla(event) {
    const key = event.key;
    let tecla = '';
    switch (key) {
        case 'Enter':
            tecla = '=';
            break;
        case 'Backspace':
            tecla = 'C';
            break;
        case 'Delete':
            tecla = 'CA';
            break;
        default:
            tecla = key;
    }
    return tecla;
}

function actualizarValorEnPantalla(valor) {
    valorEnPantalla = valor;
    actualizarTamañoDeTextoEnPantalla();
}

function actualizarTamañoDeTextoEnPantalla() {
    const longitud = valorEnPantalla.length;
    if (longitud >= 20) {
        pantalla.style.fontSize = '16px';
    } else if (longitud >= 17) {
        pantalla.style.fontSize = '20px';
    } else {
        pantalla.style.fontSize = '24px';
    }
}