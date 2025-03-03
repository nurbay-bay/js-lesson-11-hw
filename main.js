class Product {
  constructor(id, name, price, category, description, stock, quantity, image, favorite) {
    this.id = id
    this.name = name
    this.price = price
    this.category = category
    this.description = description
    this.stock = stock
    this.quantity = quantity
    this.image = image
    this.favorite = favorite
  }

  showProduct() {
    const container = document.getElementById("items")
    const card = document.createElement("div")
    card.classList.add("item-container");
    card.innerHTML = `
        <img src="${this.image}" alt="${this.name}">
        <h3>${this.name}</h3>
        <p>${this.description} </p>
        <h2>${this.price.toLocaleString("ru-RU")} ₸</h2>
        <p>Кол-во на складе: ${this.stock.toLocaleString("ru-RU")} </p>
        <div class="button-container">
        <img class="fav-icon" src="${this.favorite ? "images/fav.svg" : "images/nofav.svg"}">
        <button id="${this.id}" class="to-cart" type="button">to cart</button>
        </div>`

    container.appendChild(card)

    const favIcon = card.querySelector(".fav-icon")
    favIcon.addEventListener("click", () => {
      this.favorite = !this.favorite
      favIcon.src = this.favorite ? "images/fav.svg" : "images/nofav.svg"
    })
  }

  addFunc() {
    this.quantity += 1
    card_inner()
  }

  subFunc() {
    this.quantity -= 1
    card_inner()
  }

  delToCart() {
    selected_item_id = selected_item_id.filter((number) => number !== this.id);
    this.quantity = 0
    card_inner()
  }
}

function showCategories(item) {
  const container = document.getElementById("categories-list")
  const card = document.createElement("li")
  card.classList.add("categories-item")
  card.innerHTML = `${item}`
  container.appendChild(card)
}

function add_to_cart() {
  const btn = document.querySelectorAll(".to-cart")
  const container = document.getElementById("cartblock")
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e) => {
      if (selected_item_id.includes(e.target.id)) products.find(product => product.id === e.target.id).addFunc()
      else {
        selected_item_id.push(e.target.id)
        products.find(product => product.id === e.target.id).addFunc()
      }
      container.innerHTML = ''
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < selected_item_id.length; j++) {
          if (products[i].id == selected_item_id[j]) {
            const cart = document.createElement("div")
            cart.classList.add("cart-item");
            cart.innerHTML = `
                <div class="name">${products[i].name}</div>
                <div class="price">${products[i].price.toLocaleString("ru-RU")} тг</div>
                <div class="quantity">
                  <button onclick="products[${i}].subFunc()" class="sub btn" type="button">-</button>
                  ${products[i].quantity.toLocaleString("ru-RU")}
                  <button onclick="products[${i}].addFunc()" class="add btn" type="button">+</button>
                </div>
                <div class="sum">${(products[i].quantity * parseInt(products[i].price)).toLocaleString("ru-RU")} тг</div>
                <div class="delete-container"><button onclick="products[${i}].delToCart()" id="${selected_item_id[j]}" class="delete btn" type="button">&#215;</button></div>`
            container.appendChild(cart)
          }
        }
      }
    })
  }
}

function card_inner() {
  const container = document.getElementById("cartblock")
  container.innerHTML = ''
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < selected_item_id.length; j++) {
      if (products[i].id == selected_item_id[j]) {
        const cart = document.createElement("div")
        cart.classList.add("cart-item");
        cart.innerHTML = `
            <div class="name">${products[i].name}</div>
            <div class="price">${products[i].price.toLocaleString("ru-RU")} тг</div>
            <div class="quantity">
              <button onclick="products[${i}].subFunc()" class="sub btn" type="button">-</button>
              ${products[i].quantity.toLocaleString("ru-RU")}
              <button onclick="products[${i}].addFunc()" class="add btn" type="button">+</button>
            </div>
            <div class="sum">${(products[i].quantity * parseInt(products[i].price)).toLocaleString("ru-RU")} тг</div>
            <div class="delete-container"><button onclick="products[${i}].delToCart()" id="${selected_item_id[j]}" class="delete btn" type="button">&#215;</button></div>`
        container.appendChild(cart)
      }
    }
  }
}

const categories = [
  "Электроника",
  "Одежда",
  "Книги",
  "Продукты питания"
]

let products = [
  // constructor(id, name, price, category, description, stock, image, favorite)

// Электроника
new Product("0001", "Наушники Apple AirPods 4", 99990, "Электроника", "Беспроводные наушники с шумоподавлением.", 23, 0, "images/1.webp", false),
new Product("0002", "Смартфон Apple iPhone 13 128Gb", 270890, "Электроника", "Современный смартфон с мощной камерой.", 9, 0, "images/2.jpg", false),
new Product("0003", "Умная колонка Яндекс Станция Мини", 39000, "Электроника", "Колонка с голосовым помощником Алиса.", 40, 0, "images/3.jpg", false),
new Product("0004", "Игровая приставка Sony PlayStation 5", 299990, "Электроника", "Консоль нового поколения с мощной графикой.", 5, 0, "images/4.jpg", false),
new Product("0005", "Ноутбук Apple MacBook Air M2", 499990, "Электроника", "Лёгкий и мощный ноутбук с чипом M2.", 12, 0, "images/5.jpg", false),
new Product("0006", "Смарт-часы Samsung Galaxy Watch 5", 79990, "Электроника", "Функциональные часы с мониторингом здоровья.", 18, 0, "images/6.jpg", false),

// Одежда
new Product("1001", "Футболка мужская Nike", 12990, "Одежда", "Классическая хлопковая футболка с логотипом Nike.", 50, 0, "images/7.jpg", false),
new Product("1002", "Джинсы Levi's 501", 45990, "Одежда", "Оригинальные джинсы Levi's классического кроя.", 30, 0, "images/8.jpg", false),
new Product("1003", "Кроссовки Adidas Ultraboost", 79990, "Одежда", "Легкие кроссовки для активного образа жизни.", 20, 0, "images/9.jpg", false),
new Product("1004", "Куртка зимняя Columbia", 99990, "Одежда", "Тёплая и водонепроницаемая куртка.", 15, 0, "images/10.jpg", false),
new Product("1005", "Спортивные брюки Puma", 24990, "Одежда", "Удобные штаны для спорта и прогулок.", 35, 0, "images/11.jpg", false),
new Product("1006", "Шапка шерстяная The North Face", 9990, "Одежда", "Тёплая шапка для холодной погоды.", 40, 0, "images/12.jpg", false),

// Книги
new Product("2001", "1984 - Джордж Оруэлл", 6500, "Книги", "Роман-антиутопия о тоталитарном будущем.", 100, 0, "images/13.jpg", false),
new Product("2002", "Война и мир - Лев Толстой", 14500, "Книги", "Эпическое произведение о войне и судьбе России.", 15, 0, "images/14.jpg", false),
new Product("2003", "Гарри Поттер и философский камень", 9990, "Книги", "Первая книга культовой серии о Гарри Поттере.", 50, 0, "images/15.jpg", false),
new Product("2004", "Сила привычки - Чарльз Дахигг", 8500, "Книги", "Как формируются привычки и как их менять.", 30, 0, "images/16.jpg", false),
new Product("2005", "Думай и богатей - Наполеон Хилл", 7990, "Книги", "Книга о психологии успеха и финансовой независимости.", 25, 0, "images/17.jpg", false),
new Product("2006", "Атлант расправил плечи - Айн Рэнд", 18990, "Книги", "Философский роман о силе разума и индивидуализме.", 10, 0, "images/18.jpg", false),

// Продукты питания
new Product("3001", "Молоко 2.5% 1л", 550, "Продукты питания", "Натуральное молоко без добавок.", 200, 0, "images/19.jpg", false),
new Product("3002", "Шоколад Milka 90г", 790, "Продукты питания", "Молочный шоколад с альпийским молоком.", 500, 0, "images/20.webp", false),
new Product("3003", "Яблоки Гренни Смит 1кг", 1290, "Продукты питания", "Кисло-сладкие яблоки.", 300, 0, "images/21.jpg", false),
new Product("3004", "Хлеб бородинский 500г", 350, "Продукты питания", "Ароматный ржаной хлеб с кориандром.", 250, 0, "images/22.webp", false),
new Product("3005", "Колбаса Докторская 1кг", 2990, "Продукты питания", "Классическая варёная колбаса без сои.", 150, 0, "images/23.png", false),
new Product("3006", "Сыр Гауда 45% 200г", 1990, "Продукты питания", "Полутвёрдый сыр с насыщенным вкусом.", 100, 0, "images/24.png", false)
]

let selected_item_id = []

categories.forEach(category => showCategories(category))
products.forEach(product => product.showProduct())
add_to_cart()

const block_items = document.querySelector("#items")
const category = document.querySelectorAll(".categories-item")


for (let i = 0; i < category.length; i++) {
  category[i].addEventListener("click", (e) => {
    block_items.innerHTML = ""
    for (let i = 0; i < products.length; i++) {
      if (e.target.textContent === products[i].category) {
        products[i].showProduct()
      }
      else if (e.target.textContent === "Все товары") {
        products[i].showProduct()
      }
      else if (e.target.textContent === "Избранные") {
        if (products[i].favorite) {
          products[i].showProduct()
        }
      }
    }
    add_to_cart()
  })
}


// ---------------------------------------------------


function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function arrFilling(len) {
  let arr = []
  for (let i = 0; i < len; i++) {
    arr.push(randomInteger(-100, 100))
  }
  return arr
}



function func1() {
  arr = arrFilling(10)
  console.log(arr)
  return (`Наибольший элемент массива = ${Math.max(...arr)} и наименьший элемент массива = ${Math.min(...arr)}`)
}

function func2() {
  let arr = []
  for (let i = 0; i < 5; i++) {
    arr.push(parseInt(prompt("Введите любое число")))
  }
  console.log(arr)
  let result = arr.reduce((acc, num) => acc + num, 0)
  let midle = (result / arr.length).toFixed(2)
  return (`Сумма элементов массива = ${result}, среднее арифметическое значение массива = ${midle}`)
}

function func3() {
  arr1 = arrFilling(7)
  arr2 = arrFilling(7)

  for (let i = 0; i < 7; i++) {
    console.group(`Итерация ${i}`)
    arr1[i] > arr2[i] ? console.log(`Значение arr1[${i}] = ${arr1[i]} больше чем arr2[${i}] = ${arr2[i]}`)
    :arr1[i] < arr2[i] ? console.log(`Значение arr1[${i}] = ${arr1[i]} меньше чем arr2[${i}] = ${arr2[i]}`)
    :console.log(`Значение ${i}-х  элементов массивов равны!`)
    console.groupEnd()
  }

  return ("Конец сравнения")
}

function func4() {
  arr = arrFilling(10)
  console.log(arr)
  result = []
  for (let i = 0; i < 10; i++) {
    arr[i] % 2 === 0 && result.push(arr[i])
  }
  return (result)
}