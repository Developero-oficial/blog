---
title: Php MVC framework tutorial
date: "2020-07-02T22:12:03.284Z"
description: "En este tutorial de mvc y php vamos a aprender a hacer un framework desde cero usando php vanilla."
coverImage: "php-mvc-framework-tutorial.jpg"
---

En este tutorial de mvc y php vamos a hacer un mini framework de php vanila (puro) desde cero, sin dependencias de otras librerías.

¿Por qué es buena idea hacer una librería desde cero?

> Como desarrollador, deberías crear por lo menos una librería porque mejoras tu habilidad de abstraer y crear código modularizable y por lo tanto, reusable.

Este mini framework es sólo para propósitos educativos y no recomiendo utilizarlo para apps en producción.

Todo el código fuente lo encuentras en [este repositorio](https://github.com/Developero-oficial/php-mvc).

## Patrón MVC php

En este primer vídeo te explico qué es el patrón MVC, hacemos el setup inicial del ambiente de desarrollo y una muestra del resultado final.

`video: https://www.youtube.com/watch?v=OW19Xrvb21I&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=1`

## Php y htaccess para urls amigables en mvc

En este vídeo se explica qué es y cómo configurar el archivo .htaccess de modo que nuestro servidor redireccione todas las peticiones a un archivo index.php, pues ese será el archivo contenedor de toda nuestra app.

`video: https://www.youtube.com/watch?v=CRiG3xW6Ss8&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=2`

## La clase Router

En este vídeo vamos a crear la clase Router cuya responsabilidad es ejecutar el controlador correspondiente según la uri que recibamos en la petición.

Por ejemplo, la uri: http://localhost/home nos ejecutará el controlador Home.

`video: https://www.youtube.com/watch?v=WTJIETc1rmU&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=3`

## Php archivo de configuración para el framework

En frameworks para desarrollo de apps (sea de php, python, etc), es común que exista un archivo donde haces configuraciones como las credenciales de conexión a la DB, claves de apis y demás valores del entorno.

En este vídeo crearemos ese archivo que nos servirá también para indicarle al mini framework en dónde encuentra los módulos del sistema, como la clase Router, los controladores, modelos y más.

`video: https://www.youtube.com/watch?v=6nL_aX3dDt8&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=4`

## Clase Controller en el patrón MVC

En este vídeo crearemos nuestra clase abstracta Controller, que será la clase madre a partir de la cuál nuestros controladores de implementación hereden.

En realidad, en este mini framework será una clase sencilla que solamente tenga el método render que será quien renderice la vista correspondiente y el método abstracto exec, que veremos para qué nos sirve.

`video: https://www.youtube.com/watch?v=wP_joE6KEo4&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=5`

## Php autoload para incluir archivos dinámicos

En php, autoload es un archivo responsable de cargar las clases dinámicamente conforme se invocan.

Este archivo es crucial para que podamos utilizar nuestros controladores (y otros elementos) de manera dinámica, pues la manera en que este mini framework funciona es que de manera dinámica, según la uri, vamos a ejecutar un controlador u otro.

`video: https://www.youtube.com/watch?v=WIEcd5IKnIU&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=6`

## Implementación de clase Controller

Ahora vamos a implementar el primer controlador implementador que herede de la clase abstracta Controller.

Además, vamos a diferenciar entre el mini framework y la implementación de dicho micro framework.

`video: https://www.youtube.com/watch?v=XAfsN5fiUxU&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=7`

## La clase View en el patrón MVC

Ahora vamos a crear la clase View en la que nos ingeniaremos para renderizar vistas con variables de php inyectadas por el controlador correspondiente.

Cabe destacar que no usamos un motor de plantilla sino php puro y duro.

`video: https://www.youtube.com/watch?v=TZToGyeMaHc&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=8`

## Clase View con Bootstrap

Ahora que tenemos nuestra clase View, vamos a hacer nuestra implementación de la misma para que ahora mostremos un template real.

Para facilitarnos la cuestión del CSS, vamos a usar Bootstrap.

`video: https://www.youtube.com/watch?v=7ygnv8I6kh4&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=9`

## Clase View con parámetros de la URI

Ya vimos cómo renderizar la clase View del MVC con Php e incluyendo Bootstrap.

Ahora lo que haremos es enviar parámetros por la URI y poder usarlos para añadir comportamiento en la vista como mostrarlos como parte de las variables.

`video: https://www.youtube.com/watch?v=hT_toKigy0E&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=10`

## Clase Model en el patrón MVC

Hemos llegado a una de mis partes preferidas del mini framework. Vamos a crear nuestra última clase del core MVC.

Normalmente en un framework, se usa un ORM (Object Relation Mapping) que es un tipo de librería que desacopla todas nuestras operaciones a una DB y las expresamos en forma de clases y objetos.

En nuestro caso, no haremos un ORM desde cero.

Nosotros vamos a crear un wrapper de la clase Mysqli.

`video: https://www.youtube.com/watch?v=lzyC10bITrc&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=11`

## Refactor de nuestro código

Ya tenemos un prototipo funcional de nuestro mini framework de MVC.

Es hora de hacer unas mejoras en el código.

`video: https://www.youtube.com/watch?v=ReI2A-OqQYo&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=12`

## Login con sesiones en MVC

Por demanda popular decidí agregar un ejemplo de cómo hacer un login con este mini framework.

Obviamente, será 100% orientado a objetos creando una clase Session.

`video: https://www.youtube.com/watch?v=TfrysM0kKW4&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=13`

## Login con sesiones, controlador

Ahora vamos a preparar un controlador para ejecutar nuestro inicio de sesión del login. Aquí colocaremos la lógica de cómo hacer login.

`video: https://www.youtube.com/watch?v=Q0KGbsmY-vo&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=14`

## Login con sesiones, consulta a la DB con modelo

En este vídeo vamos a realizar la consulta a la DB de nuestro login revisando además, aspectos importantes de seguridad.

`video: https://www.youtube.com/watch?v=dsdH-48eK8k&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=15`

## Clase Session en el patrón MVC

Ya tenemos nuestro login terminado. Sólo hace falta crear la sesión para que permanezca autenticado en nuestra app.

`video: https://www.youtube.com/watch?v=3l6fJ1a5bo0&list=PLkr7dGY4D2sMoOv1gKEVO2P-XMYdf28BQ&index=16`

## Conclusión al hacer un mini frameork de php con MVC desde cero

En esta serie de vídeos creamos todo desde cero con php puro.

Está claro que existen muchas librerías y frameworks open source que resuelven mejor los problemas que hemos enfrentado aquí; pero es de vital importancia que nosotros sepamos cómo resolverlos con nuestro propio cerebro 😜
