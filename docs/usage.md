# Usage examples

## Basic icon
Provide icon name via the `name` property:
```vue
<template>
  <vue-simple-icon name="GitHub" />
  <vue-simple-icon name="Vue.js" />
</template>
```

## Custom color
You can use `color` property to set icon color:
```vue
<template>
  <vue-simple-icon name="GitHub" color="black" />
  <vue-simple-icon name="Vue.js" color="#00FF00" />
  <vue-simple-icon name="rollup.js" color="rgb(255, 0, 0)" />
</template>
```

::: warning
SVGs do not (officially) support all CSS color units. See [the specification](https://www.w3.org/TR/SVGColor12/#icc-colors) for details.
:::

## Custom title
You can change `<title>` value using `title` property:
```vue
<template>
  <vue-simple-icon name="Travis CI" title="Build passed" />
</template>
```

## Sizes
You can change the icon size to predefined values:
```vue
<template>
  <vue-simple-icon name="GitHub" small />
  <vue-simple-icon name="Vue.js" medium />
  <vue-simple-icon name="rollup.js" large />
  <vue-simple-icon name="Travis CI" xLarge />
</template>
```

Or to a custom value:
```vue
<template>
  <vue-simple-icon name="Simple Icons" size="100px" />
</template>
```

::: tip
Any unit for sizes can be used, e.g. `px`, `em`, or `cm`.
:::
