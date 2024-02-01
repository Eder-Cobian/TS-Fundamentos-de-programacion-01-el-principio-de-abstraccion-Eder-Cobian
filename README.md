![Points badge](../../blob/badges/.github/badges/points.svg)

![Logo UCOL](img/ucol-logo.jpg)

# 🥷 Reto de aprendizaje

# 📘 Introducción a la POO

El propósito de este ejercicio es familiarizarse con los fundamentos de la
programación orientada a objetos, incluyendo:

- **Clase:** Comprender qué es una clase y cómo se utiliza para modelar objetos.
- **Objeto:** Identificar la naturaleza de los objetos y cómo se crean a partir
  de clases.
- **Método:** Entender la función de los métodos y cómo se implementan en la
  programación orientada a objetos.
- **Atributo:** Reconocer la importancia de los atributos para describir las
  características de un objeto.
- **Método Constructor:** Aprender el papel del método constructor en la
  inicialización de objetos.

# 📋 Instrucciones

1. Utilizando `JavaScript`, escribe el código correspondiente para implementar
   las clases mencionadas en la sección de `Requerimientos Funcionales`.
2. Asegúrate de que las clases, métodos y atributos tengan los nombres
   especificados, así como el número y tipo de parámetros indicados en los
   requisitos.
3. Sigue las convenciones de estilo para clases, métodos, atributos, parámetros
   y variables en tu código.
4. Realiza pruebas manuales para demostrar el correcto funcionamiento de las
   funciones implementadas.
5. Ejecuta las pruebas automatizadas para asegurar el correcto funcionamiento de
   las funciones implementadas.
6. Asegúrate de que el programa funcione correctamente en la consola.
7. Para que el ejercicio sea considerado válido, tu repositorio debe tener al
   menos 1 commit por cada método implementado.
8. Los repositorios que no tengan una historia de commits considerable NO serán
   considerados válidos y recibirán una calificación de cero.

# 📥 Entregable

- Código fuente de la solución a los requerimientos planteados en la sección
  `requerimientos funcionales` en este repositorio

# 💻 Requerimientos funcionales

Para ejecutar un programa utiliza el siguiente comando:

```bash
node archivo
```

Para ejecutar la prueba de un método en particular utiliza el siguiente comando:

```bash
npm test clase.metodo
```

### ⭐ 1. Programar la clase `Plane` (44 Puntos)

#### Atributos

| Nombre      | Tipo     | Descripción                                    |
| ----------- | -------- | ---------------------------------------------- |
| `positionX` | `Number` | Posición horizontal del avión en el escenario. |
| `positionY` | `Number` | Posición vertical del avión en el escenario.   |

#### Métodos

| Nombre             | Descripción                                                                                                                 | Puntos |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- | ------ |
| `constructor()`    | Inicializa la posición del avión con valores para `positionX` y `positionY`.                                                | 8      |
| `fire(type)`       | Retorna el mensaje `fire + el valor de type!`. Por ejemplo, si `type=bullet`, retorna `fire bullet!`.                       | 8      |
| `moveUp(value)`    | Incrementa el valor de `positionY` en `value` veces y retorna el valor actualizado.                                         | 7      |
| `moveDown(value)`  | Decrementa el valor de `positionY` en `value` veces y retorna el valor actualizado. El valor mínimo de `positionY` es cero. | 7      |
| `moveLeft(value)`  | Decrementa el valor de `positionX` en `value` veces y retorna el valor actualizado. El valor mínimo de `positionX` es cero. | 7      |
| `moveRight(value)` | Incrementa el valor de `positionX` en `value` veces y retorna el valor actualizado. El valor máximo de `positionX` es 80.   | 7      |

### ⭐ 2. Programar la clase `Property` (28 Puntos)

#### Atributos

| Nombre    | Tipo     | Descripción                                |
| --------- | -------- | ------------------------------------------ |
| `width`   | `Number` | Ancho de la propiedad.                     |
| `height`  | `Number` | Altura de la propiedad.                    |
| `priceM2` | `Number` | Precio por metro cuadrado de la propiedad. |
| `address` | `String` | Dirección de la propiedad.                 |

#### Métodos

| Nombre           | Descripción                                                                        | Puntos |
| ---------------- | ---------------------------------------------------------------------------------- | ------ |
| `constructor()`  | Inicializa la propiedad con valores para `width`, `height`, `priceM2` y `address`. | 7      |
| `getArea()`      | Retorna el tamaño del área de la propiedad.                                        | 7      |
| `getPerimeter()` | Retorna el tamaño del perímetro de la propiedad.                                   | 7      |
| `getPrice()`     | Retorna el precio de la propiedad.                                                 | 7      |

### ⭐ 3. Programar la clase `Number` (28 puntos)

#### Atributos

| Nombre  | Tipo     | Descripción       |
| ------- | -------- | ----------------- |
| `value` | `Number` | Valor del número. |

#### Métodos

| Nombre          | Descripción                                                     | Puntos |
| --------------- | --------------------------------------------------------------- | ------ |
| `constructor()` | Inicializa el número con un valor inicial para `value`.         | 7      |
| `isEven()`      | Retorna `true` si el `value` es par o `false` si no es.         | 7      |
| `isPrime()`     | Retorna `true` si el `value` es primo o `false` si no es.       | 7      |
| `isPositive()`  | Retorna `true` si el `value` es positivo o `false` si no lo es. | 7      |

Shield: [![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

Esta obra está bajo una
[Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
