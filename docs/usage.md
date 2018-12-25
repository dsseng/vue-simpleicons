# Usage examples

## Basic icon
Provide icon name via the `name` property:
```vue
<template>
  <vue-simple-icon name="GitHub" />
</template>
```

## Custom color
You can use `color` property to set icon color:
```vue
<template>
  <vue-simple-icon name="GitHub" color="green" />
  <vue-simple-icon name="GitHub" color="red" />
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
You can change icon size:
```vue
<template>
  <vue-simple-icon name="Travis CI" small />
  <vue-simple-icon name="Travis CI" medium />
  <vue-simple-icon name="Travis CI" large />
  <vue-simple-icon name="Travis CI" xLarge />
  <vue-simple-icon name="Travis CI" size="100" />
</template>
```

::: tip
Learn more about custom size in our [API docs](/API.md)
:::
