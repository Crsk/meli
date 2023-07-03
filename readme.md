# Desafío

La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de resultados, y la descripción del detalle del producto.

Cliente: HTML, JS (React), CSS (Sass)
Servidor: Node.js, Express

# Resultado

[Video](https://youtu.be/7f_ewG5KUAk)

# Desarrollo

## User Story Map

Para tener un orden y contar con una visión más amplia del proyecto, cree un mapa de historias de usuario
<img width="1512" alt="1" src="./assets/1.png">
<img width="1031" alt="2" src="./assets/2.png">
<img width="874" alt="3" src="./assets/3.png">

---

## Estructura de carpetas

Hice un mono repo con `Lerna Nx`

```markdown
Root
├── Server
│ └── src
│ ├── controllers # controla el request y response
│ ├── middlewares # tengo 2, el de firma y otro para retornar error 500 y evitar algo de try-catch
│ ├── routes # enruta al controlador
│ ├── services # trae los datos
│ ├── types # server utility types
│ └── utils # server utility functions
├── shared
│ └── src
│ ├── abstracts # color, tipografía, tamaños
│ ├── category # source models, new models, factory
│ ├── item # source models, new models, factory
│ ├── types # tipos compartidos entre proyectos, como la respuesta del backend al frontend
│ └── utils # round, get-two-decimals, etc
├── ui-kit
│ └── src
│ └── components # Badge, Button, Icon, Image, Logo, ItemCard, Rating, SearchBar, etc...
└── web
└── src
├── api # obsoleto, ignorar por favor, lo moví a store manejado por redux toolkit query
├── components #
├── contexts # solo uso el contexto de tema, storybook me evita la creación de contextos
├── pages # home, search result, item details
└── store # aquí va el state management, por ahora solo está el async state management
```

## Estilo de commits

Utilicé semantic commit messages y ramas para los features con mezcla por PR aunque fue raro porque estoy solo 🤷🏿‍♂️
<img width="1090" alt="4" src="./assets/4.png">

# Diseño

## Mockups

Tanto los mockups en Figma como los componentes en Storybook tienen soporte a Dark y Light mode

<img width="1036" alt="5" src="./assets/5.png">

## Logo

vi que en el website oficial no tienen el logo vectorizado, hice una búsqueda rápida y recordé que me gusta ilustrar así que aproveché la oportunidad, igualito no?

<img width="1440" alt="6" src="./assets/6.png">

## Atomic Design

Me basé en los principios de atomic design para estructurar la librería de componentes, me ayudé de Storybook para probarlos

<img width="294" alt="7" src="./assets/7.png">

hablando de probar, escribí los test de los componentes con `React Testing Library` y `Vitest`, aunque en backend y shared library los configuré con `Jest`

<img width="1079" alt="8" src="./assets/8.png">

<img width="570" alt="9" src="./assets/9.png">

## Especificaciones

Creé una base de lineamientos, no es un design system pero algo así

para la paleta de colores, me basé en las especificaciones de WCAG para contraste y accesibilidad

están disponibles como sass variables en shared/abstracts, internamente lo usan los componentes de `ui-kit`, por ejemplo:

```html
<Text color="”green”" theme="”dark”" level="tertiary">some text</Text> // verde claro baja opacidad
<Text color="”green”" theme="”light”" level="primary">some text</Text> // verde oscuro alta opacidad
```

<img width="1244" alt="10" src="./assets/10.png">

Así definí los niveles de opacidad

<img width="827" alt="11" src="./assets/11.png">

Se puede jugar con las combinaciones desde el storybook

<img width="930" alt="12" src="./assets/12.png">

<img width="930" alt="13" src="./assets/13.png">

<img width="930" alt="14" src="./assets/14.png">

Utilizo 2 fuentes según el tamaño del texto, una fuente más contraída para el texto grande

Fuente no contraída, algo así quedaría:

<img width="950" alt="15" src="./assets/15.png">

Fuente contraída, así lo dejé:

<img width="950" alt="16" src="./assets/16.png">

Para el cambio de fuente utilicé Sass como se pidió, aquí un ejemplo con el componente de texto

```sass
// esto está en shared/abstracts
@mixin font-family($font-type) {
  @if $font-type == 'condensed' {
    font-family: $font-family-condensed;
    font-stretch: condensed;
  } @else {
    font-family: $font-family-regular;
    font-stretch: normal;
  }
}

// esto está en ui-kit/text-component
.text {
  @include font-family('regular');
  @each $size, $value in $font-sizes {
    &--#{$size} {
      font-size: $value;

      @if $size == xl or $size == xxl {
        @include font-family('condensed');
      }
    }
  }

  @each $color, $themes in $color-map {
    @each $theme, $levels in $themes {
      @each $level, $color-value in $levels {
        &--#{$color}--#{$theme}--#{$level} {
          color: $color-value;
        }
      }
    }
  }
}
```

# Desafíos

## Decimal

En algunos países como en Argentina, los precios pueden tener decimal, el delimitador también varía según la región.

Esto no lo controlé del todo, ya que podría requerir de más tiempo, pero dejé una base usando `Intl` el cual es nativo de Javascript y se encarga del formateo de número según la región

<img width="757" alt="17" src="./assets/17.png">

también antepuse un cero como string ya que Javascript transforma 06 a 6, si guardo 0005 en una variable, este valor pasa a ser 5.

<img width="757" alt="18" src="./assets/18.png">

<img width="757" alt="19" src="./assets/19.png">

Aquí lo pruebo en postman

<img width="746" alt="20" src="./assets/20.png">

## OOP vs Functional

Para la construcción de entidades escogí un patrón de diseño `functional composition` sobre `OOP inheritance`, principalmente porque es mucho más modular y está de moda ir funcional por la vida. Si quiero construir algo solo debo tomar las partes que me interesan, en el ejemplo abajo me interesa el item general y su descripción.

<img width="1004" alt="21" src="./assets/21.png">

## API snake_case, Javascript camelCase

Los tipo de datos que comienzan con Source, por ejemplo `SourceItem`, son tipo de datos provenientes desde el endpoint de producción, los tengo tipado en camelCase, cuando los recibo los identifico como `SnakeCase<SourceSomethig>` y utilizo un utility function para pasarlo a camelCase. Entonces en el caso de ItemDescription existen 3 tipos:

- `SnakeCase<SourceItemDescription>` es el que viene de producción,
- `SourceItemDescription` es el de producción pero en camelCase listo para ser tratado por JS
- `ItemDescription` es el nuevo tipo, el que la nueva API provee

<img width="950" alt="22" src="./assets/22.png">

## Categorias

Me di cuenta de que al usar el endpoint de búsqueda, este -a veces- arroja resultados con un filtro de category ya aplicado, solo si la categoría encontrada es obvia, por ejemplo si busco “iphone” se aplica el filtro de category: teléfonos, en cambio si busco pelota no se aplica ningún filtro pero puedo buscar la moda desde la lista de `available_filters` cuyo integrante id es `category`

Agregué la propiedad `mostPopularCategory` ya que `categories` es del tipo `string[]` y al decidir filtrar repetidos perdí el conteo desde el front para conocer al más-repetido.

Otras posibles soluciones habrían sido:

- Cambiar el tipo de `categories` de `string[]` a algo como `{ name: string, results: number }[]` para llevar un conteo
- No filtrar repetidos (opción flayte), así el cliente front-end habría podido contar para llegar al más repetido

```tsx
type PopularCategory = {
  name: string // most popular category from available categories or applied category filter
  pathFromRoot: PathFromRoot | null // most popular categories path from applied category filter. null if no filter applied
}
```

Entonces creé un tipo `InferedCategory`

```tsx
type InferedCategory = { categories: string[]; popularCategory: PopularCategory | null }
```

el cual almacena categoría según 1 de 3 posibles escenarios:

1. la respuesta del endpoint viene con filtro de categoría, lo llamo `categoriesFromApliedFilter`
2. la respuesta del endpoint viene con `categoriesFromAvailableFilters`
3. ninguno de los anteriores, entonces se obtiene iterando los items en la respuesta del endpoint, lo llamo `categoriesFromItems`

Creo que el test lo explica mejor

### Caso 1

<img width="1044" alt="23" src="./assets/23.png">

Aclaración: si el usuario busca algo con categoría obvia, el backend en producción `(https://api.mercadolibre.com/…)` retorna un filtro ya seleccionado si que el usuario haya filtrado `(filters: [...])`, entonces mi método `getCategories` retorna un objeto que contiene categorías como `string[]` y popularCategory el cual contiene `pathFromRoot`

### Caso 2

<img width="1044" alt="24" src="./assets/24.png">

Aclaración: el usuario no buscó algo con categoría obvia, entonces no se aplicó un filtro, pero se lleno una lista de availableFilters en donde uno de ellos tiene el id `category`, este objeto tiene values de donde puedo extraer la lista de categorías

### Caso 3

<img width="1044" alt="25" src="./assets/25.png">

Aclaración: no sé si el caso 3 sea posible en algún escenario, ya que supongo que availableFilters siempre entregará información ya que mientras la búsqueda contenga al menos un resultado, de todas maneras dejé una alternativa a obtención de categorías, el problema de esta opción es que no es consistente al obtener los ids de las categorías mientras las otras opciones proveen del nombre, esta opción requiere de un tratamiento posterior pero lo más preocupante es que es propenso a errores debido a la inconsistencia, lo dejo a modo de ejemplo.

Entonces el nuevo endpoint retorna las categorías en arreglo de string como fue solicitado, además de un campo llamado `popularCategory` el cual tiene un `pathFromRoot` que se llena solo si se cumple el caso 1

### Probando respuesta API caso 1

<img width="1440" alt="26" src="./assets/26.png">

### Probando respuesta API caso 2

<img width="1440" alt="27" src="./assets/27.png">

### Resultado

Buscando una pelota

<img width="700" alt="28" src="./assets/28.png">

Entrando a una pelota

<img width="782" alt="29" src="./assets/29.png">

También el path de una categoría puede venir desde la búsqueda, ejemplo buscando una campera (polerón en Argentina).

(Aquí se aprecia el beneficio de no reinventar la rueda armando un nuevo contador de categoría 🙂)

<img width="700" alt="30" src="./assets/30.png">

## Número de coincidencias

A pesar de mostrar 4 resultados, incluí la información de coincidencias en header X-Total-Count, para mayor información al usuario

<img width="296" alt="31" src="./assets/31.png">

Network tab en DevTools muestra que llega el header con la información de resultados

<img width="484" alt="32" src="./assets/32.png">

## Firma

<img width="944" alt="33" src="./assets/33.png">

Ya que dice “entre la API y el front-end”, lo más “entre” que se me ocurrió fue firma desde un middleware de salida de API response (en vez de firmar en el controlador del backend)

# Resultado final

<img width="1440" alt="34" src="./assets/34.png">

<img width="1440" alt="35" src="./assets/35.png">

<img width="1440" alt="36" src="./assets/36.png">

<img width="1440" alt="37" src="./assets/37.png">

<img width="1440" alt="38" src="./assets/38.png">

<img width="1440" alt="39" src="./assets/39.png">
