# Второе задание

*Сверстайте виджет быстрого поиска товаров на сайте.*

## Запуск проекта 

### Установка всех зависимостей
```
npm install
```

### Запуск сервера 
После запуска сервера для разработки, можно посмотреть конечный результат на localhost:8080
```
npm run serve
```

## Структура 
### Краткая структура 
```
.
├── dist
└── src
    ├── http
    ├── modules
    ├── services
    ├── styles
    │   ├── common
    │   └── components
    └── views
```

### Полная структура 
```
.
├── README.md
├── package-lock.json
├── package.json
├── postcss.config.js
├── src
│   ├── http
│   │   └── client.js       
│   ├── index.html
│   ├── index.js
│   ├── index.scss
│   ├── modules
│   │   ├── data.js
│   │   └── render.js
│   ├── services
│   │   └── products.js
│   ├── styles
│   │   ├── common
│   │   │   ├── _reset.scss
│   │   │   └── _vars.scss
│   │   └── components
│   │       ├── _base-input.scss
│   │       ├── _product-card.scss
│   │       ├── _shop.scss
│   │       └── _sidebar.scss
│   └── views
│       └── product-page.html
└── webpack.config.js
```