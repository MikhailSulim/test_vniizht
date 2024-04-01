# Тестовое задание на позицию фронтенд разработчика в ВНИИЖТ

## Постановка задачи
Требуется создать фронтенд приложение на React.js. Изначально в окне должна быть нередактируемая таблица со списком поездов. Данные необходимо получить по ссылке (https://gist.githubusercontent.com/allbel/ae2f8ead09baf7bb66d281e3a6050261/raw/4c898f101913cd7918ab1dbfce008fa12c6d4838/mock.json). 
При клике на строку с поездом должна появляться еще одна таблица — с характеристиками, которые соответствуют выбранному поезду. Характеристика представляет собой массив объектов с тремя полями: скорость в км/ч, сила тяги в кН и ток двигателя в А. Все ячейки таблицы характеристик должны быть доступны пользователю для редактирования. Программа же должна проверять пользовательский ввод на соответствие следующим условиям:
•	скорость — неотрицательное целое число;
•	сила тяги — положительное число с плавающей запятой;
•	ток двигателя — положительное целое число;
Гарантируется, что загружаемые данные валидны.
Если в таблице присутствуют значения, которые не проходят валидацию, то они подсвечиваются красным, а кнопка «Отправить данные» становится неактивной (на неё нельзя нажать).
Если данные проходят валидацию, то при нажатии пользователем на кнопку «Отправить данные» в консоли браузера выводится список скоростных ограничений, отсортированных по возрастанию. 

Обязательные требования
•	Приложение должно быть реализовано на Typescript с использованием React 16+ и Redux.
•	Верстка таблиц должна быть реализована через table (не div-ми).

Будет плюсом
•	Оптимизировать количество перерисовок компонентов.
•	Не использовать тип any.

## Реализация 
### Используемые технологии
### Установка и запуск проекта

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
