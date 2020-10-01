---
title: React js tutorial español 2020
date: "2020-07-05T22:12:03.284Z"
description: "En este tutorial de React js en español vamos a ver qué es, conceptos básicos, hooks, manejo de formularios, tips y más."
coverImage: "react-tutorial-espanol-2020.png"
---

# ¿Que es react js?

**React js** es una librería desarrollada por facebook y sirve para hacer interfaces de usuario de una manera sencilla, declarativa y basada en componentes.

Lo puedes comenzar a usar tanto en un proyecto ya iniciado como en uno nuevo desde cero, sea desde agregar elementos simples (como un botón) hasta una app robusta y compleja con mucha interacción y dinamismo.

A continuación tienes un vistazo general de las principales características y casos de uso prácticos para que puedas tener una idea clara de qué y cómo puedes sacar provecho a react js.

# Conceptos básicos de react js

En esta sección vas a aprender los conceptos básicos de react js. Si nunca has usado react, esta sección es tu punto de partida, iremos paso a paso para que nuestras bases sean muy sólidas y podamos pasar al siguiente nivel.

## React y jsx

**Jsx** es una sintaxis que nos permite escribir componentes de react de una manera más declarativa.

Todos los ejemplos que veremos en este apartado son definiciones de componentes en React. Profundizaremos más sobre los componentes en los siguientes apartados.

```js
const myComponent = () => <h1>Componente declarado con JSX</h1>
```

Parece HTML, pero **en realidad es Javascript**. Lo que estamos indicando aquí es: Crea en la interfaz de usuario un elemento h1 cuyo contenido sea “Componente declarado con JSX”.

Pero el navegador no sabe cómo interpretar la sintaxis de JSX. Por lo tanto, recurrimos a herramientas como webpack y babel para que nos transforme nuestro código en JSX en una sintaxis que el navegador si pueda reconocer.

Como ejemplo, este es el equivalente transpilado del código mostrado anteriormente.

```js
const myComponent = () => <h1>Componente declarado con JSX</h1>

// equivale a

const myComponent = () =>
  React.createElement("h1", null, "Componente declarado con JSX")
```

No es obligatorio usar React con JSX pero es lo recomendado debido a que nos simplifica bastante el código que tenemos que escribir para declarar nuestros componentes.

**Tips:**

- Usa jsx como estándar en tus proyectos debido a que es lo más popular cuando veas el código de terceros, documentación y tutoriales.

## Jsx y expresiones de javascript

Ya que Jsx es javascript puro, es posible **ejecutar expresiones de javascript** dentro del mismo.

Una expresión de javascript es una sentencia del tipo:

```js
1 + 1
‘hello’
5 > 4
```

Considera este ejemplo.

```js
const name = "john"

const Grettings = () => <h1>Hello, {name}</h1>

// equivalente transpilado sólo como ejemplo

const name = "john"

const Grettings = () => React.createElement("h1", null, "Hello, ", name)
```

Como puedes apreciar, para colocar expresiones se hace entre llaves ({}).

**Tips:**

- Utiliza expresiones de javascript para aplicar lógica en jsx. De esto veremos más adelante.

## Jsx if y else

Podemos usar **condicionales dentro de la sintaxis Jsx**.

```js
const Grettings = name => {
  if (name) {
    return <h1>Hello {name}</h1>
  } else {
    return <h1>Hello?</h1>
  }
}
```

En este ejemplo, estamos pasando por parámetro la variable name y en la condición mostramos un mensaje u otro según si name tiene valor o no.

Más adelante vamos a ver diferentes maneras de renderizado condicional.

## Jsx y atributos

Ya que usamos Jsx para declarar elementos a mostrar en el navegador, también podemos especificar los **atributos** de dichos elementos.

```js
const myElement = <div id="element">Mi elemento</div>

// equivalente transpilado

const myElement = React.createElement(
  "div",
  {
    id: "element",
  },
  "Mi elemento"
)
```

Como puedes ver, nos resulta muy familiar la sintaxis de Jsx pero recuerda que Jsx es javascript puro, no html, es por ello que he colocado el equivalente transpilado.

Otros ejemplos.

```js
const Avatar = user => <img src={user.photo} />

const getSum = (n1, n2) => n1 + n2

const Result = () => <h1>{getSum(1, 2)}</h1>
```

**Tips:**

- Usa comillas para valores que son una cadena
- Usa llaves para valores diferentes a una cadena como un número, una función, propiedad de un objeto, etc.

## Jsx y childrens o hijos.

Podemos anidar tantos elementos como deseemos con jsx.

```js
const myElement = post => {
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>post.subtitle</h2>
      <img src={post.img} />
    </div>
  )
}
```

En este ejemplo estamos colocando elementos h1 y h2 de manera normal, pero nota que el img no tiene una etiqueta de cierre. Esto es debido a que no es necesario declararla porque no vamos a definir ningún valor.

Esta es una gran diferencia entre html y jsx.

**Tips:**

- Solo coloca etiquetas de cierre cuando realmente sean necesarias. Es válido que una etiqueta se cierre del tipo `<img /> en lugar de <img></img>`

# React components

Un **componente** es una pieza independiente de nuestra UI y tiene las siguientes características:

- Es aislado.
- Reusable.
- Define la estructura (html), el estilo (css) y el comportamiento (js).

Una analogía de los componentes son las piezas de lego. Una pieza de lego es independiente, reusable y tiene su propia estructura (forma y color).

Un componente puede estar constituido por una o más unidades llamadas elementos. Por ejemplo, el div, img, span, p, h1, todos estos son elementos.

Y con jsx, podemos usar tanto elementos como componentes definidos por nosotros.

```js
const Title = () => <h1>My Title</h1>

const Header = () => {
  return (
    <header>
      <Title />
    </header>
  )
}
```

Más adelante profundizaremos en la composición de componentes, es decir, la manera en que podemos usar los componentes para formar otros componentes en el mismo sentido que podemos usar piezas de lego para formar otras piezas más grandes.

**Tips:**

- Define tus componentes siempre con letra mayúscula, esto le indica a React que es un componente y no un elemento html como un div, img, etc. Ejemplo: React va a tratar a div como un elemento html mientras que Title como un componente.

Por último, los dos tipos irreductibles de componentes básicos de React son:

- Componentes funcionales. Definidos por medio de una función de javascript.
- Componentes clase. Definidos por medio de clases de ES6.

A partir de estos dos tipos de componentes, existen más categorías que veremos en la parte de Tipos de componentes.

```js
// componente funcional
const myComponent = () => <p>Hello world</p>

// componente de clase
class OtherComponent extends React.Component {
  render() {
    return <p>Hello world</p>
  }
}
```

Ambos ejemplos anteriores son equivalentes a la hora de definir un componente.
Vamos a profundizar más en el componente de tipo clase en la parte de estado y ciclos de vida.

## Renderizar componentes

La manera de **renderizar un componente** en una aplicación es por medio de una utilidad llamada **ReactDOM**.

```js
const MyComponent = () => <h1>Mi componente</h1>;

ReactDOM.render(<MyComponent />, document.getElementById(‘root’));
```

render acepta dos parámetros: un componente y el lugar del DOM donde queremos que se monte.

**Tips:**

- Comúnmente se usa el div con id igual a root y es lo recomendado.
- Si estás creando una app de React desde cero, define un solo render para tu app.
- Si estás integrando React a una app existente, es válido y común que existan varios render con diferentes divs e ids.

## React Props

También podemos hacer una analogía de los componentes como una función.

Una función puede recibir parámetros y ejecutar operaciones o procesos.

Podemos dividir a las funciones como puras y dinámicas.

Las funciones puras son aquellas que dados los mismos parámetros, obtendremos siempre el mismo output o resultado. Ejemplo: `F (x) = x + 1`, significa que si x es igual a 10, entonces siempre obtendremos 11 de resultado (se le suma más uno a x).

Las funciones dinámicas son aquellas que dados los mismos parámetros, no siempre obtendremos el mismo resultado. Ejemplo: una función que ejecute Date, Math.rand (para obtener números random), llamadas a una api externa (puede retornar errores de servidor), etc.

¿Y esto qué tiene que ver con los componentes?

Si vemos a los componentes como funciones puras, podemos crear piezas más reutilizables en nuestra UI.

El ejemplo más claro es un componente que tenga un mensaje de bienvenida a un usuario.

```js
const Greetings = () => <h1>Hola Fulano!</h1>
```

Si queremos saludar a un usuario con otro nombre, no vamos a crear otro componente. Imagina tener 1000 usuarios con diferentes nombres, crear 1000 componentes solo para eso no es para nada óptimo.

Lo que hacemos es crear un solo componente que nos permita pasar por parámetro el valor que deseemos.

```js
const Greetings = (props) => <h1>Hola {props.name}!</h1>

// implementación

<Greetings name=”perengano” />
```

Este ejemplo de componente es como una función pura debido a que dado el mismo parámetro, siempre obtendremos el mismo resultado.

Pues bien, **los props es un objeto de javascript que es pasado como un parámetro a un componente** tal y como lo hicimos en el ejemplo anterior. **Props viene de properties o propiedades**.

Con esto ya has aprendido lo que son los props!

**Tips:**

- Los props son solo de lectura, esto significa que no debes cambiarles su valor.
- Ya que props es un objeto, puedes lo puedes desestructurar del modo: `const MyComp = ({ name }) => <h1>{name}</h1>`.
- Los valores de los props pueden ser: un objeto, array, cadena, número, función, incluso componentes o elementos.
  También hay un prop especial llamado children que es el contenido hijo de un componente, ejemplo: `<Title>Mi título <Title />`, accederias: `const Title = (props) => <h1>{props.children}</h1>` donde children es igual a “Mi título”.
- Existe una herramienta llamada prop-types qué nos sirve para validar el tipado de los props que recibe un componente, úsala siempre.

# State y ciclo de vida de un componente

**El estado de un componente** es la manera en que un componente puede controlar valores privados o internos.

A diferencia de los props que son solo de lectura y no pueden ser modificados por el componente directamente, el estado es un valor que si es controlado por el componente y es modificado por el mismo.

Actualmente existen dos maneras de definir el estado:
Por medio del hook useState (lo verás en la parte de react hooks, useState)
Por medio de componentes definidos con clases de ES6 (lo verás más a detalle en la parte de tipos de componentes).

Vamos a ver un ejemplo de un componente que actualizará estado cada segundo solo como ejemplo.

```js
class Counter extends React.Component {
  constructor(props) {
    super(props)
    // definimos el estado como un objeto que tiene solo una propiedad (pero no es limitado a una)
    this.state = {
      counter: 0,
    }

    // esto es solo como ejemplo, vamos a cambiarlo a continuación
    // actualizamos usando la función this.setState
    setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000)
  }

  // este método es obligatorio para componentes tipo clase y debe retornar un elemento válido
  render() {
    return <h1>Counter: {this.state.counter}</h1>
  }
}

React.render(<Counter />, document.getElementById("app"))
```

Corriendo el ejemplo anterior, vamos a notar que el componente actualiza el contador de manera correcta!

Nota: no es recomendable usar el setInterval en el constructor, vamos a cambiarlo a continuación.

**Tips:**

- Modifica el estado solamente con setState. Si modificas el estado directamente, el componente no se volverá a renderizar.
- Considera que la actualización del estado puede ser asíncrona.
- Por performance, internamente React puede agrupar varias llamadas de setState, por lo que this.setState({ counter: this.state.counter + 1 }) podría tener una version del estado counter diferente al que esperamos.
  Para solucionar lo anterior, setState acepta una función como primer argumento en lugar de un objeto: this.setState((state) => ({ counter: state.counter + 1 })).
- Las actualizaciones del estado se fusionan. Ejemplo: puedes tener tu estado como this.state = { valueA: ‘’, valueB: ‘’ }, si haces this.setState({ valueA: ‘some’ }) React va actualizar solamente valueA pero dejará intacto a valueB.

## Ciclo de vida de un componente

Una gran diferencia entre un componente de tipo clase y uno de tipo function es que en el de tipo clase nos da acceso a unos métodos reservados que nos permiten acceder al **ciclo de vida del componente**.

> Nota: en la parte de React hooks veremos cómo podemos replicar el mismo comportamiento en componentes de tipo function.

El ciclo de vida más común de un componente consiste en:

- Antes de montarse en el DOM.
- Cuando ya se montó en el DOM.
- Cuando se ha actualizado el componente (la actualización de un prop o del state).
- Cuando se va a desmontar del DOM.

Veamos un ejemplo en código.

```js
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    console.log(‘constructor’);
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.setState({ name: 'John Doe'})
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    return (<h1>{this.state.name}</h1>);
  }
}
```

Al ejecutar este código, veremos los console logs en la consola del navegador.

Este es el orden en que se ejecuta este componente:

- El **constructor** es llamado antes de que el componente sea montado.
- Se ejecuta el método **render**.
- **componentDidMount** se ejecuta inmediatamente después de que se ha montado el componente.
- Ya que en **componentDidMount** estamos actualizando el estado, hace que ahora se ejecute el método **componentDidUpdate**.
- Se vuelve a ejecutar el método **render**.
- Ya que no estamos removiendo el componente del DOM, **componentWillUnmount** no se ejecutará hasta que explícitamente lo hagamos.

**Tips en el constructor**:
-Si no inicializas estado y no haces bind de métodos, no necesitas implementar el constructor.
Siempre debes ejecutar super(props) en el constructor para que this.props exista en el componente.
-No debes llamar setState en el constructor, llama this.state para asignar valores la estado directamente.
-No implementes lógica que haga efectos secundarios como una llamada a una api en el constructor.
-No copies los valores de los props en el estado. this.state = { name: props.name } es una mala practica. Cuando se actualice el prop, no se verá reflejado en el state. Mejor usa los props directamente.

- Sin embargo, es válido asignar al state el valor de un prop si tu intención es asignar un valor inicial o default. this.state = { name: props.initialName } tiene mas sentido.

**Tips en componentDidMount**:

- Es el lugar adecuado para llamadas a apis. Ejemplo: cuando consumes una api para cargar y mostrar los datos en tu componente.
- Es buen lugar para crear suscripciones.

**Tips en componentDidUpdate**:

- Toma en cuenta que no se ejecuta la primera vez que se monta el componente.
- Buen lugar para optimizar las llamadas a apis solo si es realmente necesario.
- Incluso si aqui actualizas el estado, este método se volverá a ejecutar. Para evitar loops infinitos de actualizaciones, coloca una condición antes de actualizar el estado.

**Tips en componentWillUnmount**:

- Buen lugar para limpiar las suscripciones que hayas hecho en componentDidMount.
- No llames setState aquí debido a que el componente será desmontado y no seguirá existiendo.

## React list

La manera de **renderizar un listado de elementos en react** es por medio de arrays y el método map (propio del prototype de Array de javascript).

```js
const ListNames = () => {
  const names = ["John", "Smith", "Lulu"]

  return (
    <ul>
      {names.map(name => (
        <li>{name}</li>
      ))}
    </ul>
  )
}
```

Si corremos este código, veremos que funciona correctamente.

Pero veremos un warning en la consola:

> Warning: Each child in a list should have a unique "key" prop.

Esto es debido a que necesitamos proporcionar el **prop key** en los elementos de la lista, en este caso, los <li>.

```js
const ListNames = () => {
  const names = ["John", "Smith", "Lulu"]

  return (
    <ul>
      {names.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  )
}
```

Las **keys** existen para indicarle a React qué elementos han cambiado, han sido agregados o han sido removidos.

También puedes asignar el resultado de un map a una variable y luego usar esa variable para renderizar el contenido:

```js
const ListNames = () => {
  const names = ["John", "Smith", "Lulu"]
  const listNames = names.map(name => <li key={name}>{name}</li>)

  return <ul>{listNames}</ul>
}
```

Recordemos que jsx nos permite usar expresiones de javascript.

**Tips:**

- Cuando hagas listas de elementos (independientemente de que los elementos sean li, p, h1, componentes, etc;) siempre proporciona el prop key.
- Los valores de las keys deben ser únicos entre hermanos.
- Si los datos que estas listando provienen de una api, por lo común tendrán una propiedad de id, ese lo puedes usar como valor de key. Ejemplo: `values: [{ id: 1, name: ‘john’ }, { id: 2, name ‘joana’ }]`.

## React js formularios

La manera básica y más común de manejar formularios en React consiste en hacer formularios controlados.

Un **formulario controlado** consiste en un formulario cuyos valores y eventos son controlados por React.

Vamos a ver un ejemplo de un formulario que no está siendo controlado por React y después vamos a controlarlo progresivamente.

```js
const Form = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
```

Hasta aquí nada nuevo, esto tiene el comportamiento por default de un formulario en html.

Para controlar los valores del formulario, necesitamos usar el estado del componente. En este ejemplo, va a ser con un componente de tipo clase.

```js
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
    }
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
```

Vamos a notar que cuando escribimos en el input, no actualiza ningún valor. Incluso en la consola marca warning:

> Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.

Necesitamos agregar un manejador del evento change en el input para que se actualice el estado.

```js
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
    }
  }

  handleChange = e => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    alert(Object.values(this.state))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
```

`onChange` es el manejador del evento change del input y cuando el usuario modifique el valor del mismo, va a ejecutar el callback que en este caso es `this.handleChange`.

Ya que es un manejador de evento, recibe por valor el objeto event que contiene todo lo relativo al evento desencadenado. En este caso, el objeto event tiene una propiedad target que a su vez es un objeto que tiene la propiedad value.

`e.target.value` es el valor del input que desencadenó el evento.

Para el evento submit usamos `this.handleSubmit`. En este caso ejecutamos `e.preventDefault`, una función del objeto event para prevenir que se ejecute el comportamiento default (recargar la página). Después ejecutamos un alert con los valores del estado.

## React formulario con múltiples inputs

Para un **formulario que contiene múltiples inputs**, podemos hacer lo siguiente:

```js
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      address: "",
      age: "",
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    alert(Object.values(this.state))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          address:
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
        </p>
        <p>
          age:
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
        </p>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
```

La clave aquí es el `handleChange`. Lo que hacemos es dinámicamente cambiar el contenido de state.

Considera:

```
this.setState({ [e.target.name]: e.target.value });
```

Esta sintaxis es propia de javascript.

`e.target.name` va a ser igual al valor name que tenga el input, lo que equivale a:

```
this.setState({ [‘address’]: e.target.value });
```

Suponiendo que haya sido el input `address` el que haya sido modificado. Los corchetes es una manera de indicar la propiedad del objeto.

```js
this.setState({ [‘address’]: e.target.value });

this.setState({ address: e.target.value });
```

Estos dos ejemplos son equivalentes e igualmente válidos.

Entonces, cuando otro input sea cambiado, e.target.name tendra el nombre del input que hizo el cambio. De esta manera estamos actualizando el estado de manera dinámica.

**Tips:**

- Saca provecho de las propiedades name y value del objeto e.target para actualizar el estado de un formulario de manera dinámica.
- Recuerda que hay eventos (onChange, onSubmit, etc) y manejadores de eventos que son funciones donde nosotros colocamos la lógica de lo que queremos hacer con el formulario.

En la parte de React hooks vamos a ver este mismo ejemplo pero usando los hooks de react.

## Tipos de componentes de React

Existen dos tipos de componentes básicos:

- De tipo clase.
- De tipo function.

Y de estos podemos derivar varias clasificaciones de componentes.

React provee dos tipos de componentes a elegir al momento de crear un componente de tipo clase: **Component** y **PureComponent**.

**Component** es el que permite usar todas las características de React en una clase de javascript (ES6).

**PureComponent** es parecido a Component pero internamente usa una optimización para evitar renders innecesarios.

Hasta antes de la llegada de los hooks de React, a los componentes de tipo clase se les llamaba **state components (componentes de estado)** y los de tipo **function stateless components (componentes sin estado)**.

Sin embargo, actualmente ya no es válida esa separación debido a que un componente tipo function ya puede tener un estado usando el hook useState.

## Smart y Dumb components

Esta categorización de componentes es meramente conceptual y se basa en separar los componentes por el tipo de responsabilidad que se les asigna.

Fue presentado por **Dan Abramov**, coautor de **react redux** y **create-react-app**.

Los **Dumb o presentational components**, en pocas palabras, son componentes que sólo presentan la UI pero no manejan ninguna lógica sobre qué, cómo y cuándo se debe presentar un componente.

Los **Smart components** tienen la responsabilidad de manejar toda la lógica de que debe mostrarse, cómo y cuándo. Pueden tener como hijos a otros smart components y a presentational components.

Sin embargo, el propio Dan Abramov ha comentado que con la llegada de los hooks **ya no es necesario hacer esta separación.**

Por lo que no ahondaremos demasiado en este aspecto.

## React hooks tutorial

Los **hooks** fueron introducidos en la versión 16.8 de React y nos permiten usar las características de React sin tener que escribir una clase.

Los **hooks** son opcionales y no hacen rupturas con los componentes de tipo clase, no es necesario reemplazar código de componentes clase con hooks.

Los Hooks te permiten reutilizar lógica entre componentes.

Nota: aquí veremos solamente los dos principales hooks que son los que necesitarás en la mayoría de las veces.

A continuación veremos los principales hooks con ejemplos.

### React hooks useState

Este hook te permite declarar un estado en un componente de tipo function, cosa que antes era posible solo en componentes de tipo clase.

```js
import React, { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click me!</button>
      <div>Clicked times: {counter}</div>
    </div>
  )
}
```

El **hook useState** es una función que retorna un array con dos valores. En el primer índice del array tenemos la variable de estado, en el segundo índice tenemos a una función que nos permite actualizar dicho estado.

Esto es equivalente a:

```js
import React, { useState } from "react"

const Counter = () => {
  const state = useState(0)
  return (
    <div>
      <button onClick={() => state[1](state[0] + 1)}>Click me!</button>
      <div>Clicked times: {state[0]}</div>
    </div>
  )
}
```

Pero no es tan legible, por lo que usamos la desestructuración de los array en javascript para hacerlo más legible.

El único argumento para useState es el valor del estado inicial. En este ejemplo, el valor inicial es 0 pero un estado inicial puede ser cualquier tipo de variable primitiva, array y objeto.

**Tips:**

- Puedes usar más de una vez el hook useState. De este modo puedes separar la lógica de actualizar diferentes tipos de estado.
- El valor del estado permanecerá entre re renderizaciones.

### React hooks useEffect

El **hook useEffect** te permite ejecutar “efectos secundarios”. Un efecto secundario consiste en cualquier operación que pueda afectar a los componentes y que no puedas ejecutar durante el renderizado. Ejemplos: consumo de apis, suscripciones y modificaciones manuales del DOM.

Este hook consolida los ciclos **componentDidMount**, **componentDidUpdate** y **componentWillUnmount** de las clases en un solo lugar y aquí puedes hacer lo mismo que harías en cualquiera de esos ciclos.

```js
import React, { useEffect } from "react"

const HelloWorld = () => {
  useEffect(() => console.log("useEffect"))

  return <h1>Hello world</h1>
}
```

El **hook useEffect** recibe como primer argumento un callback que de manera predeterminada, será ejecutado cada vez que se haga un render del componente. Se debe declarar siempre dentro del componente para poder acceder a los props y el estado del componente.

Otro caso de uso es el crear suscripciones y limpiarlas.

```js
import React, { useEffect } from "react"

// ejemplo de un objeto que nos permite suscribirnos
const fakeSuscription = {
  subscribe() {},
  unsubscribe() {},
}

const HelloWorld = () => {
  useEffect(() => {
    // suscribete
    fakeSuscription.subscribe()

    // remueve la suscripción antes de desmontar el componente
    return () => fakeSuscription.unsubscribe()
  })

  return <h1>Hello world</h1>
}
```

Este es solo un ejemplo de una posible manera en la que puedes implementar una suscripción y des suscripción.

Cuando el hook useEffect retorna una función, React ejecutará dicha función antes de desmontar el componente.

El hook useEffect también puede recibir **un array como segundo parámetro**. Este array nos sirve para indicarle a React que ejecute el efecto si y sólo si alguno de los valores del array es actualizado.

```js
const HelloWorld = props => {
  useEffect(() => {
    // suscribete
    fakeSuscription.suscribe(props.id)

    // remueve la suscripción antes de desmontar el componente
    return () => fakeSuscription.unsubscribe()
  }, [props.id])

  return <h1>Hello world</h1>
}
```

Si solo pasas un array vacío, entonces el efecto se ejecutará una vez solamente.

**Tips:**

- Puedes declarar más de un useEffect en un componente. Separa responsabilidades creando efectos separados donde manejen su propia lógica.
- **Usa un array vacío como segundo parámetro para emular componentDidMount**.
- Recuerda siempre limpiar las suscripciones que llegues a realizar retornando una función con la lógica para limpiar las suscripciones.
- Recuerda que el comportamiento predeterminado de useEffect es ejecutarse cada que se haga un render. Si lo deseas, puedes controlar esto pasando las dependencias de ese efecto dentro del array como segundo parámetro para que se ejecute solo si una dependencia cambia.

### Siguientes pasos.

¡Felicidades por haber recorrido todo este camino hasta aquí! Ya conoces lo básico de React para comenzar a crear tus propias aplicaciones.

Puedes usar esto como una guía y regresar para consultar algo cada que lo necesites.

Te recomiendo que comiences a crear apps pequeñas para aplicar y experimentar lo aprendido.
