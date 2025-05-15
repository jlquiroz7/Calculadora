# Tutorial: Cómo Crear una Calculadora con HTML y CSS

En este tutorial, aprenderás a crear una calculadora simple utilizando HTML y CSS. Seguiremos un enfoque paso a paso para que puedas entender cada parte del código. ¡Comencemos!

## Paso 1: Estructura Básica del Documento HTML

Primero, necesitamos crear la estructura básica de un documento HTML. Esto incluye la declaración del tipo de documento, el elemento `<html>`, y las secciones `<head>` y `<body>`.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <style>
        /* Aquí añadiremos nuestros estilos CSS */
    </style>
</head>
<body>
    <!-- Aquí añadiremos nuestra calculadora -->
</body>
</html>
```

## Paso 2: Estilos CSS para la Calculadora
Dentro de la etiqueta `<style>`, añadiremos los estilos CSS necesarios para nuestra calculadora.

### Estilo para el Contenedor Principal
El contenedor principal de la calculadora tendrá un tamaño fijo, un color de fondo gris, bordes redondeados y un borde exterior.

```css
.calculadora {
    width: 300px;
    height: 450px;
    background-color: #9f9f9f; /* Color de fondo gris */
    border-radius: 15px; /* Bordes redondeados */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid #182019; /* Borde exterior */
}
```

### Estilo para la Pantalla de la Calculadora
La pantalla de la calculadora tendrá un color de fondo amarillo claro, texto alineado a la derecha y un borde.

```css
.pantalla {
    width: 80%;
    height: 60px;
    background-color: #cfec58; /* Color de fondo amarillo claro */
    margin: 10px;
    text-align: right; /* Texto alineado a la derecha */
    padding: 10px;
    box-sizing: border-box;
    font-size: 24px; /* Tamaño de fuente */
    border-radius: 3px;
    border: 4px solid #182019; /* Borde de la pantalla */
}
```

### Estilo para los Botones de Acción
Los botones de acción (CA, C, =) tendrán un color de texto específico y estarán distribuidos horizontalmente.

```css
.botones-de-accion {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
}
.botones-de-accion button {
    color: #bd7049; /* Color de texto */
}
.botones-de-accion button:nth-child(3) {
    color: #000000; /* Color de texto del botón "=" */
}
```

### Estilo General para los Botones
Todos los botones tendrán un tamaño fijo, un color de fondo gris claro, bordes redondeados y cambiarán el cursor al pasar sobre ellos.

```css
.boton {
    width: 50px;
    height: 50px;
    background-color: #edeaeb; /* Color de fondo gris claro */
    border: 1px solid #a7a7a7; /* Borde de los botones */
    border-radius: 3px;
    font-size: 20px; /* Tamaño de fuente */
    cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
}
```

### Estilo para los Botones Numéricos y de Operaciones
Los botones numéricos estarán organizados en una cuadrícula, mientras que los botones de operaciones estarán en una columna.

```css
.numeros-y-operaciones {
    width: 100%;
    display: flex;
}

.numeros {
    width: 225px;
    height: 290px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #515151; /* Color de fondo */
    padding: 10px;
    border-top-right-radius: 15px;
    column-gap: 15px; /* Espacio entre columnas */
    row-gap: 10px; /* Espacio entre filas */
}
.numeros button:nth-child(10) {
    width: 116px; /* Botón "0" más ancho */
}

.operadores {
    width: 75px;
    height: 290px;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 10px; /* Espacio entre filas */
}
```

## Paso 3: Estructura HTML de la Calculadora
Ahora, añadiremos la estructura HTML de la calculadora dentro del `<body>`.

### Contenedor Principal
El contenedor principal de la calculadora.

```html
<div class="calculadora">
    <!-- Pantalla de la calculadora -->
    <div class="pantalla" id="pantalla">0</div>
    <!-- Botones de acción (CA, C, =) -->
    <div class="botones-de-accion">
        <button class="boton" onclick="sePresiono('CA')">CA</button>
        <button class="boton" onclick="sePresiono('C')">C</button>
        <button class="boton" onclick="sePresiono('=')">=</button>
    </div>
    <!-- Contenedor para los botones numéricos y de operaciones -->
    <div class="numeros-y-operaciones">
        <!-- Botones numéricos -->
        <div class="numeros">
            <button id="7" class="boton" onclick="sePresiono('7')">7</button>
            <button id="8" class="boton" onclick="sePresiono('8')">8</button>
            <button id="9" class="boton" onclick="sePresiono('9')">9</button>
            <button id="4" class="boton" onclick="sePresiono('4')">4</button>
            <button id="5" class="boton" onclick="sePresiono('5')">5</button>
            <button id="6" class="boton" onclick="sePresiono('6')">6</button>
            <button id="1" class="boton" onclick="sePresiono('1')">1</button>
            <button id="2" class="boton" onclick="sePresiono('2')">2</button>
            <button id="3" class="boton" onclick="sePresiono('3')">3</button>
            <button id="0" class="boton" onclick="sePresiono('0')">0</button>
            <button id="." class="boton" onclick="sePresiono('.')">.</button>
        </div>
        <!-- Botones de operaciones -->
        <div class="operadores">
            <button class="boton" onclick="sePresiono('+')">+</button>
            <button class="boton" onclick="sePresiono('-')">-</button>
            <button class="boton" onclick="sePresiono('*')">*</button>
            <button class="boton" onclick="sePresiono('/')">/</button>
        </div>
    </div>
</div>
```

## Paso 4: Añadir Funcionalidad con JavaScript (Opcional)
Para que la calculadora funcione, necesitarás añadir un poco de JavaScript. Aquí hay un ejemplo básico de cómo podrías hacerlo:

```html
<script>
    function sePresiono(valor) {
        // Aquí puedes añadir la lógica para manejar las operaciones de la calculadora
        console.log(valor);
    }
</script>
```

## Archivo Completo index.html

Aquí tienes el archivo completo con todos los pasos combinados:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <style>
        .calculadora {
            width: 300px;
            height: 450px;
            background-color: #9f9f9f;
            border-radius: 15px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 5px solid #182019;
        }
        .pantalla {
            width: 80%;
            height: 60px;
            background-color: #cfec58;
            margin: 10px;
            text-align: right;
            padding: 10px;
            box-sizing: border-box;
            font-size: 24px;
            border-radius: 3px;
            border: 4px solid #182019;
        }
        .botones-de-accion {
            width: 80%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 2px;
        }
        .botones-de-accion button {
            color: #bd7049;
        }
        .botones-de-accion button:nth-child(3) {
            color: #000000;
        }
        .boton {
            width: 50px;
            height: 50px;
            background-color: #edeaeb;
            border: 1px solid #a7a7a7;
            border-radius: 3px;
            font-size: 20px;
            cursor: pointer;
        }
        .numeros-y-operaciones {
            width: 100%;
            display: flex;
        }
        .numeros {
            width: 225px;
            height: 290px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            background-color: #515151;
            padding: 10px;
            border-top-right-radius: 15px;
            column-gap: 15px;
            row-gap: 10px;
        }
        .numeros button:nth-child(10) {
            width: 116px;
        }
        .operadores {
            width: 75px;
            height: 290px;
            padding-top: 10px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            row-gap: 10px;
        }
    </style>
</head>
<body>
    <div class="calculadora">
        <div class="pantalla" id="pantalla">0</div>
        <div class="botones-de-accion">
            <button class="boton" onclick="sePresiono('CA')">CA</button>
            <button class="boton" onclick="sePresiono('C')">C</button>
            <button class="boton" onclick="sePresiono('=')">=</button>
        </div>
        <div class="numeros-y-operaciones">
            <div class="numeros">
                <button id="7" class="boton" onclick="sePresiono('7')">7</button>
                <button id="8" class="boton" onclick="sePresiono('8')">8</button>
                <button id="9" class="boton" onclick="sePresiono('9')">9</button>
                <button id="4" class="boton" onclick="sePresiono('4')">4</button>
                <button id="5" class="boton" onclick="sePresiono('5')">5</button>
                <button id="6" class="boton" onclick="sePresiono('6')">6</button>
                <button id="1" class="boton" onclick="sePresiono('1')">1</button>
                <button id="2" class="boton" onclick="sePresiono('2')">2</button>
                <button id="3" class="boton" onclick="sePresiono('3')">3</button>
                <button id="0" class="boton" onclick="sePresiono('0')">0</button>
                <button id="." class="boton" onclick="sePresiono('.')">.</button>
            </div>
            <div class="operadores">
                <button class="boton" onclick="sePresiono('+')">+</button>
                <button class="boton" onclick="sePresiono('-')">-</button>
                <button class="boton" onclick="sePresiono('*')">*</button>
                <button class="boton" onclick="sePresiono('/')">/</button>
            </div>
        </div>
    </div>
    <script>
        function sePresiono(valor) {
            console.log(valor);
        }
    </script>
</body>
</html>
```