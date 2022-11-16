# Первое задание 
Валидация формы для номера телефона

## Запуск проекта
### Установка зависимостей
```
npm install
```

### Запуск сервера
```
npm run serve
```
## Структура 
### Краткая структура 
```
.
├── dist
└── src
    ├── modules        
    └── styles
        ├── common
        └── components 
```

### Полная структура 
```
.
├── README.md
├── dist
├── package-lock.json
├── package.json
├── postcss.config.js
├── src
│   ├── index.html
│   ├── index.js
│   ├── index.scss
│   ├── modules
│   │   ├── form-logic.js
│   │   ├── phone-input.js
│   │   └── server.js
│   └── styles
│       ├── common
│       │   └── _reset.scss
│       └── components
│           ├── _base-button.scss
│           ├── _base-input.scss
│           └── _form.scss
└── webpack.config.js
```