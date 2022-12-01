  // Задача №1
  (function changeSquareBGColor() {
    // Ищем на странице блок с id = square
    let square = document.getElementById("square");
    // прикрепляем к блоку слушатель событий движения мыши
    square.addEventListener("mouseover", () => {
      // интенсивность красного цвета (случайное значение в интервале от 0 до 255)
      let redIntensity = 255 * Math.random();
      // интенсивность зеленого цвета (случайное значение в интервале от 0 до 255)
      let greenIntensity = 255 * Math.random();
      // интенсивность голубого цвета (случайное значение в интервале от 0 до 255)
      let blueIntensity = 255 * Math.random();
      // Устанавливаем блоку цвет фона
      square.style.backgroundColor = `rgb(${redIntensity}, ${greenIntensity}, ${blueIntensity})`;
      // Формируем и выводим в блок текст с формулой цвета его фона
      square.innerText =
        "#" + 
        toHex(redIntensity) +
        toHex(greenIntensity) +
        toHex(blueIntensity);
    });

    //Функция преобразования десятичного значения в шестнадцатиричное
    function toHex(d) {
      return ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
    }
  })(); // осуществляем самозапуск этой функции


  // Задача №2
  function changeSrcForImages(newUrl) {
    // Находим блок main
    let main = document.getElementById("main");
    // В блоке main находим все изображения
    let images = main.getElementsByTagName("img");
    // Заменяем источники для первых 5-и картинок
    for (let i = 0; i < 5; i++) {
      images[i].setAttribute("src", newUrl);
    }
  }
  // Вызываем функцию замена изображений
  changeSrcForImages("https://via.placeholder.com/100/0000D0/ffffff");


  // Задача №3
  (function showImagesGalery() {
    // Находим контейнер для отображения миниатюр изображений
    let imagesWrapper = document.getElementById("imagesList");
    // Находим контейнер для вывода большого изобрежения
    let imgFullSizeContainer = document.getElementById("imgFullSizeContainer");
    // Создаем элемент для вывода большого изображения
    let fullSizeImg = document.createElement("img");
    // Указываем для этого атрибут id, чтобы к нему потом можно было проще обращаться
    fullSizeImg.setAttribute("id", "full-size-img");
    // Указываем стартовое значение
    fullSizeImg.setAttribute(
      "src",
      "https://via.placeholder.com/100/330099/ffffff"
    );
    // Устанавливаем размер для отображения этого изображения
    fullSizeImg.style.width = "300px";
    // Добавляем этот элемент в контейнер
    imgFullSizeContainer.appendChild(fullSizeImg);

    // Массив изображений
    let imgSrc = [
      "https://via.placeholder.com/100/330099/ffffff",
      "https://via.placeholder.com/100/FF00FF/ffffff",
      "https://via.placeholder.com/100/FFFF00/000090",
      "https://via.placeholder.com/100/CC0000/ffffff",
      "https://via.placeholder.com/100/0099CC/ffffff",
      "https://via.placeholder.com/100/00CC66/ffffff",
      "https://via.placeholder.com/100/999900/ffffff",
    ];
    // Длина массива изображений
    let imgSrcLength = imgSrc.length;
    // Создаем массив для хранения изображений
    let images = new Array(imgSrcLength);
    // Отображаем миниатюры изображений
    for (let i = 0; i < imgSrcLength; i++) {
      // Создаем элемент для вывода изображения
      images[i] = document.createElement("img");
      // Указываем для этого элемента источник картинки
      images[i].setAttribute("src", imgSrc[i]);
      // Прикрепляем слушатель событий к миниатюре изображения
      images[i].addEventListener("click", () => {
        document
          .getElementById("full-size-img")
          .setAttribute("src", imgSrc[i]);
      });
      // Добавляем элемент в контейнер миниатюр
      imagesWrapper.appendChild(images[i]);
    }
  })();

  // Задача №4
  // Определяем массив объектов с данными о товарах
  let offers = [
    { 
      title: "Offer title 1", 
      unit_price: 23.49, 
      count: 10 
    },
    { 
      title: "Offer title 2", 
      unit_price: 120.19, 
      count: 15 
    },
    {
      title: "Offer title 3",
      unit_price: 100.49,
      count: 35,
    },
  ];

  // Формируем таблицу и ее заголовок
  let table =
    "<table width='400px'>" +
    "<tr>" +
      "<th>Title</th>" +
      "<th>Price</th>" +
      "<th>Count</th>" +
      "<th>Amount</th>" + 
    "</tr>";
  // Определяем переменные для расчета количества единиц товаров и их общей стоимости
  let itemsAmount = 0;
  let itemsTotalCost = 0;
  // Формируем строку таблицы с данными
  for (let i = 0; i < offers.length; i++) {
    table +=
      "<tr><td>" +
      offers[i].title +
      "</td>" +
      "<td align='right'>" +
      offers[i].unit_price +
      "</td>" +
      "<td align='right'>" +
      offers[i].count +
      "</td>" +
      "<td align='right'>" +
      (offers[i].unit_price * offers[i].count).toFixed(2) +
      "</td></tr>";
    itemsAmount += offers[i].count;
    itemsTotalCost += offers[i].unit_price * offers[i].count;
  }
  // Формируем итоговую строку таблицы
  table +=
    "<tr><td colspan = '2'>Total: </td>" +
    "<td align='right'>" +
    itemsAmount +
    "</td>" +
    "<td align='right'>" +
    itemsTotalCost.toFixed(2) +
    "</td></tr>";
  // Закрываем таблицу
  table += "</table>";

  // Выводим таблицу с данными
  document.getElementById("offersList").innerHTML = table;
