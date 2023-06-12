# Detrás de cámaras

## User Story Map

Para tener un orden y contar con una visión más amplia del proyecto, cree un mapa de historias de usuario 
<img width="1512" alt="1" src="https://github.com/Crsk/meli/assets/6186848/dae1db6c-7210-4054-a9a5-fb6bee9684ab">
<img width="1031" alt="2" src="https://github.com/Crsk/meli/assets/6186848/aed346e8-df29-4451-9613-c82cd8836280">
<img width="874" alt="3" src="https://github.com/Crsk/meli/assets/6186848/3420f8d5-9c82-4251-ae0d-168b7cb6e1d4">
----
## Estructura de carpetas

Hice un mono repo con `Lerna Nx`

```markdown
Root
├── Server
│   └── src
│       ├── controllers # controla el request y response
│       ├── middlewares # tengo 2, el de firma y otro para retornar error 500 y evitar algo de try-catch
│       ├── routes      # enruta al controlador
│       ├── services    # trae los datos
│       ├── types       # server utility types
│       └── utils       # server utility functions
├── shared
│   └── src
│       ├── abstracts   # color, tipografía, tamaños
│       ├── category    # source models, new models, factory
│       ├── item        # source models, new models, factory
│       ├── types       # tipos compartidos entre proyectos, como la respuesta del backend al frontend
│       └── utils       # round, get-two-decimals, etc
├── ui-kit
│   └── src
│       └── components  # Badge, Button, Icon, Image, Logo, ItemCard, Rating, SearchBar, etc...
└── web
    └── src
        ├── api         # obsoleto, ignorar por favor, lo moví a store manejado por redux toolkit query
        ├── components  # 
        ├── contexts    # solo uso el contexto de tema, storybook me evita la creación de contextos
        ├── pages       # home, search result, item details
        └── store       # aquí va el state management, por ahora solo está el async state management
```

## Estilo de commits

Utilicé semantic commit messages y ramas para los features con mezcla por PR aunque fue raro porque estoy solo 🤷🏿‍♂️
<img width="1090" alt="4" src="https://github.com/Crsk/meli/assets/6186848/f1ef5f32-cb66-490b-865e-15fa3f872a92">

# Diseño

## Mockups

Tanto los mockups en Figma como los componentes en Storybook tienen soporte a Dark y Light mode

<img width="1036" alt="5" src="https://github.com/Crsk/meli/assets/6186848/72f834e1-c884-45f2-8bf7-328df35ed2d0">


## Logo

vi que en el website oficial no tienen el logo vectorizado, hice una búsqueda rápida y recordé que me gusta ilustrar así que aproveché la oportunidad, igualito no?

<img width="1440" alt="6" src="https://github.com/Crsk/meli/assets/6186848/16ab1440-2119-4683-969a-fe39f5c3ce34">


## Atomic Design

Me basé en los principios de atomic design para estructurar la librería de componentes, me ayudé de Storybook para probarlos

<img width="294" alt="7" src="https://github.com/Crsk/meli/assets/6186848/08f1e2a6-37b7-48ed-a202-1e1023a8d9ac">


hablando de probar, escribí los test de los componentes con `React Testing Library` y `Vitest`, aunque en backend y shared library los configuré con `Jest`

<img width="1079" alt="8" src="https://github.com/Crsk/meli/assets/6186848/424ad43a-61b4-4ed8-b7de-c1d1afd480ae">

<img width="570" alt="9" src="https://github.com/Crsk/meli/assets/6186848/863232a3-a813-41df-9f84-ef2441d07085">


## Especificaciones

Creé una base de lineamientos, no es un design system pero algo así

para la paleta de colores, me basé en las especificaciones de WCAG para contraste y accesibilidad

están disponibles como sass variables en shared/abstracts, internamente lo usan los componentes de `ui-kit`, por ejemplo:

```html
 <Text color=”green” theme=”dark” level="tertiary">some text</Text> // verde claro baja opacidad
 <Text color=”green” theme=”light” level="primary">some text</Text> // verde oscuro alta opacidad
```

<img width="1244" alt="10" src="https://github.com/Crsk/meli/assets/6186848/3ab50e39-bfab-4885-aac5-b0a77df14849">


Así definí los niveles de opacidad

<img width="827" alt="11" src="https://github.com/Crsk/meli/assets/6186848/5f516e7c-4906-4519-a87c-e0b54616613e">


Se puede jugar con las combinaciones desde el storybook

<img width="930" alt="12" src="https://github.com/Crsk/meli/assets/6186848/f49fe55d-091a-4124-aef7-0fe1794b4fb7">

<img width="930" alt="13" src="https://github.com/Crsk/meli/assets/6186848/d74fb845-9140-45a1-bae4-9de840f0bafe">

<img width="930" alt="14" src="https://github.com/Crsk/meli/assets/6186848/07c7fae8-3855-4537-a3a0-f5117926d6f0">


Utilizo 2 fuentes según el tamaño del texto, una fuente más contraída para el texto grande

Fuente no contraída, algo así quedaría:

<img width="950" alt="15" src="https://github.com/Crsk/meli/assets/6186848/69a8a623-be4b-47e4-b1c1-e199840f908c">


Fuente contraída, así lo dejé:

<img width="950" alt="16" src="https://github.com/Crsk/meli/assets/6186848/ce487dba-def5-45d9-8a94-e5b67e568f2f">


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

<img width="757" alt="17" src="https://github.com/Crsk/meli/assets/6186848/3b504e66-f1da-4e76-b4e8-f9b747e5a97b">


también antepuse un cero como string ya que Javascript transforma 06 a 6, si guardo 0005 en una variable, este valor pasa a ser 5.

<img width="757" alt="18" src="https://github.com/Crsk/meli/assets/6186848/86e34aee-d295-4d48-ab19-f5e2501f2f84">

<img width="757" alt="19" src="https://github.com/Crsk/meli/assets/6186848/f322d5a3-8ac6-4e89-93a2-3bb0ec2d0a6a">

Aquí lo pruebo en postman

<img width="746" alt="20" src="https://github.com/Crsk/meli/assets/6186848/56d59123-5f68-479d-8f5b-0c3f5a8e1e67">


## OOP vs Functional

Para la construcción de entidades escogí un patrón de diseño `functional composition` sobre `OOP inheritance`, principalmente porque es mucho más modular y está de moda ir funcional por la vida. Si quiero construir algo solo debo tomar las partes que me interesan, en el ejemplo abajo me interesa el item general y su descripción.

<img width="1004" alt="21" src="https://github.com/Crsk/meli/assets/6186848/323641a3-f0f1-481b-bb87-6252b403702f">


## API snake_case, Javascript camelCase

Los tipo de datos que comienzan con Source, por ejemplo `SourceItem`, son tipo de datos provenientes desde el endpoint de producción, los tengo tipado en camelCase, cuando los recibo los identifico como `SnakeCase<SourceSomethig>` y utilizo un utility function para pasarlo a camelCase. Entonces en el caso de ItemDescription existen 3 tipos:

- `SnakeCase<SourceItemDescription>` es el que viene de producción,
- `SourceItemDescription` es el de producción pero en camelCase listo para ser tratado por JS
- `ItemDescription` es el nuevo tipo, el que la nueva API provee

<img width="950" alt="22" src="https://github.com/Crsk/meli/assets/6186848/b8ab9158-bf5e-41ac-ae2b-7130d57023ea">


## Categorias

Me di cuenta de que al usar el endpoint de búsqueda, este -a veces- arroja resultados con un filtro de category ya aplicado, solo si la categoría encontrada es obvia, por ejemplo si busco “iphone” se aplica el filtro de category: teléfonos, en cambio si busco pelota no se aplica ningún filtro pero puedo buscar la moda desde la lista de `available_filters` cuyo integrante id es `category` 

Agregué la propiedad `mostPopularCategory` ya que `categories` es del tipo `string[]` y al decidir filtrar repetidos perdí el conteo desde el front para conocer al más-repetido. 

Otras posibles soluciones habrían sido:

- Cambiar el tipo de `categories` de `string[]` a algo como `{ name: string, results: number }[]` para llevar un conteo
- No filtrar repetidos (opción flayte), así el cliente front-end habría podido contar para llegar al más repetido

```tsx
type PopularCategory = { 
  name: string; // most popular category from available categories or applied category filter
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

<img width="1044" alt="23" src="https://github.com/Crsk/meli/assets/6186848/befe5641-7435-41b5-a209-e166959dc8be">



Aclaración: si el usuario busca algo con categoría obvia, el backend en producción `(https://api.mercadolibre.com/…)` retorna un filtro ya seleccionado si que el usuario haya filtrado `(filters: [...])`, entonces mi método `getCategories` retorna un objeto que contiene categorías como `string[]` y popularCategory el cual contiene `pathFromRoot`

### Caso 2

<img width="1044" alt="24" src="https://github.com/Crsk/meli/assets/6186848/e158428a-b5c2-4050-84cf-ca1f789e704c">


Aclaración: el usuario no buscó algo con categoría obvia, entonces no se aplicó un filtro, pero se lleno una lista de availableFilters en donde uno de ellos tiene el id `category`, este objeto tiene values de donde puedo extraer la lista de categorías 

### Caso 3

<img width="1044" alt="25" src="https://github.com/Crsk/meli/assets/6186848/184babcc-37f0-40d2-83a6-486943561ae5">


Aclaración: no sé si el caso 3 sea posible en algún escenario, ya que supongo que availableFilters siempre entregará información ya que mientras la búsqueda contenga al menos un resultado, de todas maneras dejé una alternativa a obtención de categorías, el problema de esta opción es que no es consistente al obtener los ids de las categorías mientras las otras opciones proveen del nombre, esta opción requiere de un tratamiento posterior pero lo más preocupante es que es propenso a errores debido a la inconsistencia, lo dejo a modo de ejemplo.

Entonces el nuevo endpoint retorna las categorías en arreglo de string como fue solicitado, además de un campo llamado `popularCategory` el cual tiene un `pathFromRoot` que se llena solo si se cumple el caso 1

### Probando respuesta API caso 1

<img width="1440" alt="26" src="https://github.com/Crsk/meli/assets/6186848/0388616d-00ba-4574-b998-eeaa02010340">


### Probando respuesta API caso 2

<img width="1440" alt="27" src="https://github.com/Crsk/meli/assets/6186848/4141e4b4-40ef-4abc-abf6-c168cde1fc77">


### Resultado

Buscando una pelota

<img width="700" alt="28" src="https://github.com/Crsk/meli/assets/6186848/64d51826-2fa6-4685-92b6-97f1f124784f">


Entrando a una pelota

<img width="782" alt="29" src="https://github.com/Crsk/meli/assets/6186848/987a1f8f-5b75-417d-81f5-6f998ff97ff6">


También el path de una categoría puede venir desde la búsqueda, ejemplo buscando una campera (polerón en Argentina).

(Aquí se aprecia el beneficio de no reinventar la rueda armando un nuevo contador de categoría 🙂)

<img width="700" alt="30" src="https://github.com/Crsk/meli/assets/6186848/130c72a7-4d87-41cd-af77-33bce784aff6">


## Número de coincidencias

A pesar de mostrar 4 resultados, incluí la información de coincidencias en header X-Total-Count, para mayor información al usuario

<img width="296" alt="31" src="https://github.com/Crsk/meli/assets/6186848/a2fe0894-05f1-4d02-b637-3351091a7ae5">


Network tab en DevTools muestra que llega el header con la información de resultados

<img width="484" alt="32" src="https://github.com/Crsk/meli/assets/6186848/ae67aaf3-fbd3-468d-bde7-b408b2339e2c">


## Firma

<img width="944" alt="33" src="https://github.com/Crsk/meli/assets/6186848/33754791-d9b2-452f-b84c-106bd97876ae">


Ya que dice “entre la API y el front-end”, lo más “entre” que se me ocurrió fue firma desde un middleware de salida de API response (en vez de firmar en el controlador del backend)

# Resultado final

<img width="1440" alt="34" src="https://github.com/Crsk/meli/assets/6186848/b3155981-2be9-4f3e-9966-d8a9ce0f3d02">

<img width="1440" alt="35" src="https://github.com/Crsk/meli/assets/6186848/017f49c9-fe7f-4a6d-b502-b0ebb56598a8">

<img width="1440" alt="36" src="https://github.com/Crsk/meli/assets/6186848/7f16d5cd-9b98-4c20-bcd4-7f9918ea5924">

<img width="1440" alt="37" src="https://github.com/Crsk/meli/assets/6186848/4bde04fb-780a-4d51-b55c-bf4b024911ed">

<img width="1440" alt="38" src="https://github.com/Crsk/meli/assets/6186848/23a58643-02da-4b79-89ee-a14ffe934c9d">

<img width="1440" alt="39" src="https://github.com/Crsk/meli/assets/6186848/d161022d-26c0-489b-9ea7-9c4b215beddf">
