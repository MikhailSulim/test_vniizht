# Тестовое задание на позицию фронтенд разработчика в ВНИИЖТ

## Постановка задачи

Требуется создать фронтенд приложение на React.js. Изначально в окне должна быть нередактируемая таблица со списком поездов. Данные необходимо получить по ссылке (https://gist.githubusercontent.com/allbel/ae2f8ead09baf7bb66d281e3a6050261/raw/4c898f101913cd7918ab1dbfce008fa12c6d4838/mock.json).
При клике на строку с поездом должна появляться еще одна таблица — с характеристиками, которые соответствуют выбранному поезду. Характеристика представляет собой массив объектов с тремя полями: скорость в км/ч, сила тяги в кН и ток двигателя в А. Все ячейки таблицы характеристик должны быть доступны пользователю для редактирования. Программа же должна проверять пользовательский ввод на соответствие следующим условиям:
• скорость — неотрицательное целое число;
• сила тяги — положительное число с плавающей запятой;
• ток двигателя — положительное целое число;
Гарантируется, что загружаемые данные валидны.
Если в таблице присутствуют значения, которые не проходят валидацию, то они подсвечиваются красным, а кнопка «Отправить данные» становится неактивной (на неё нельзя нажать).
Если данные проходят валидацию, то при нажатии пользователем на кнопку «Отправить данные» в консоли браузера выводится список скоростных ограничений, отсортированных по возрастанию.

Обязательные требования
• Приложение должно быть реализовано на Typescript с использованием React 16+ и Redux.
• Верстка таблиц должна быть реализована через table (не div-ми).

Будет плюсом
• Оптимизировать количество перерисовок компонентов.
• Не использовать тип any.

## Реализация

### Ссылка

Готовая реализация находится по адресу:
https://mikhailsulim.github.io/test_vniizht/

### Функционал

Тестовое задание было выполнено в соответствии с ТЗ с незначительными отклонениями:

- при начальной загрузке страницы производится обращение к серверу за JSON с данными поездов, в течение времени загрузки отображается надпись "Загрузка данных...";
- после получения ответа с сервера данные выводятся в виде таблицы (созданной с помощью соответствующих тегов table, thead, tbody, tr, th, td);
- при клике по строке таблицы с определённым поездом появляется вторая таблица с его характеристиками;
- в таблице с характеристиками возможно их редактирование:
    - поля могут принять только символы цифр и дробного разделителя для невозможности ввода отрицательных значений или буквенных символов (Данное решение было принято для облегчения и уменьшения кода. Реализация подсветки некорректных данных, как написано в ТЗ, мне показалась излишней, поскольку речь идёт о простых числовых данных, валидный диапазон которых можно задать используя стандартные методы компонента Input.);
    - поля колонки "Сила тяги" могут принимать дробные значения, колонок "Скорость" и "Ток двигателя" — только целочисленные;
    - при пустом значении поле ввода окрашивается в красный цвет;
- во второй таблице также расположена кнопка отправить данные, при нажатии на которую в консоль выводится список отредактированных характеристик поезда, отсортированный по возрастанию параметра "скорость";
- кнопка недоступна в случае наличия незаполненных полей, а также в случае отсутствия изменений в характеристиках по сравнению с изначальными данными.

### Используемые технологии

При реализации данного тестового задания были задействованы следующие технологии:

- React 18;
- TypeScript;
- Redux Toolkit;
- SCSS;
- BEM;
- GitHub Pages.

### Установка и запуск проекта

Для установки и запуска проекта необходимо выполнить следующие команды:

- клонировать репозиторий
  ```
  git clone https://github.com/MikhailSulim/test_vniizht.git
  ```
- перейти в папку с проектом
  ```
  cd test_vniizht
  ```
- установить зависимости
  ```
  npm i
  ```
- запустить в режиме разработки
  ```
  npm run start
  ```
- открыть в браузере [http://localhost:3000](http://localhost:3000)
