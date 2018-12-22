# Примеры

## Обычная иконка
Укажите имя иконки, используя свойство `name`:
```vue
<template>
  <vue-simple-icon name="GitHub" />
</template>
```

## Пользовательский цвет
Вы можете выбрать цвет иконки с помощью свойства `color`:
```vue
<template>
  <vue-simple-icon name="GitHub" color="green" />
  <vue-simple-icon name="GitHub" color="red" />
</template>
```

## Пользовательский заголовок
Вы можете изменить значение `<title>` с помощью свойства `title`:
```vue
<template>
  <vue-simple-icon name="Travis CI" title="Build passed" />
</template>
```

## Размер
Вы можете изменять размер иконки:
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
Узнайте больше о размерах иконок в [описании API](/API.md)
:::
