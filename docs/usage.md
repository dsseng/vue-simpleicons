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
  <vue-simple-icon name="Vue.js" color="green" />
</template>
```

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
  <vue-simple-icon name="Travis CI" small />
  <vue-simple-icon name="Travis CI" medium />
  <vue-simple-icon name="Travis CI" large />
  <vue-simple-icon name="Travis CI" xLarge />
</template>
```

Or to a custom value:
```vue
<template>
  <vue-simple-icon name="Travis CI" size="100px" />
</template>
```

::: tip
Any unit for sizes can be used, e.g. `px`, `em`, or `cm`.
:::
