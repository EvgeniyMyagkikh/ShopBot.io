const products = document.querySelector(".products");

getting_data();

async function getting_data() {
  const response = await fetch('json/products.json');
  const products_data_array = await response.json();

  insert_data(products_data_array);
}

function insert_data(products_data_array) {
  products_data_array.forEach(function (item) {
    const html_product = `<article id="${item.id}" class="item ${item.class}" xmlns="http://www.w3.org/1999/html">
      <h5 class="item__title title_item title_${item.class}">${item.title}</h5>
      <div class="item__label_price">
        <h5 class="item__text_price">0</h5>
      </div>
      <div class="syrup_select_container"
        <label>
          <select class="syrup_select_form" onchange="btn_syrup_click(this)">
            <option selected value="Нет">Без сиропа</option>
            <option value="Ваниль">Ваниль</option>
            <option value="Карамель">Карамель</option>
            <option value="Миндаль">Миндаль</option>
            <option value="Шокол.печенье">Шоколадное печенье</option>
            <option value="Кокос">Кокос</option>
            <option value="Черн.маффин">Черничный маффин</option>
            <option value="Лесн.орех">Лесной орех</option>
            <option value="Солен.карамель">Соленая карамель</option>
            <option value="Клубника">Клубника</option>
            <option value="Мята">Мята</option>
            <option value="Банан">Банан</option>
            <option value="Айриш">Айриш</option>
            <option value="Лаванда">Лаванда</option>
          </select>
        </label>
      </div>
      <img src="${item.img}" alt="">
      <div class="buttons">
        <a onclick="btn_size_click(this)" class="btn__size" data-bid="S">
          <div class="btn__text_size">S</div>
        </a>
        <a onclick="btn_size_click(this)" class="btn__size" data-bid="M">
          <div class="btn__text_size">M</div>
        </a>
        <a onclick="btn_size_click(this)" class="btn__size" data-bid="L">
          <div class="btn__text_size">L</div>
        </a>
        <a onclick="btn_buy_click(this)" class="btn__buy">
        <div class="btn__text_buy">Добавить</div>
        </a>
      </div>
    </article>`;
    products.insertAdjacentHTML("beforeend", html_product);
  });
  const html_americano = `<article id="6" class="item americano">
      <h5 class="item__title title_item title_americano">Американо</h5>
      <div class="item__label_price">
        <h5 class="item__text_price">0</h5>
      </div>
      <div class="syrup_select_container"
        <label>
          <select class="syrup_select_form" onchange="btn_syrup_click(this)">
            <option selected value="Нет">Без сиропа</option>
            <option value="Ваниль">Ваниль</option>
            <option value="Карамель">Карамель</option>
            <option value="Миндаль">Миндаль</option>
            <option value="Шокол.печенье">Шоколадное печенье</option>
            <option value="Кокос">Кокос</option>
            <option value="Черн.маффин">Черничный маффин</option>
            <option value="Лесн.орех">Лесной орех</option>
            <option value="Солен.карамель">Соленая карамель</option>
            <option value="Клубника">Клубника</option>
            <option value="Мята">Мята</option>
            <option value="Банан">Банан</option>
            <option value="Айриш">Айриш</option>
            <option value="Лаванда">Лаванда</option>
          </select>
        </label>
      </div>
      <div class="buttons">
        <a onclick="btn_size_click(this)" class="btn__size two_size_s" data-bid="S">
          <div class="btn__text_size">S</div>
        </a>
        <a onclick="btn_size_click(this)" class="btn__size two_size_m" data-bid="M">
          <div class="btn__text_size">M</div>
        </a>
        <a onclick="btn_buy_click(this)" class="btn__buy">
        <div class="btn__text_buy">Добавить</div>
        </a>
      </div>
    </article>`;
  const html_espresso = `<article id="7" class="item espresso">
      <h5 class="item__title title_item title_espresso">Эспрессо</h5>
      <div class="item__label_price">
        <h5 class="item__text_price">0</h5>
      </div>
      <div class="syrup_select_container"
        <label>
          <select class="syrup_select_form" onchange="btn_syrup_click(this)">
            <option selected value="Нет">Без сиропа</option>
            <option value="Ваниль">Ваниль</option>
            <option value="Карамель">Карамель</option>
            <option value="Миндаль">Миндаль</option>
            <option value="Шокол.печенье">Шоколадное печенье</option>
            <option value="Кокос">Кокос</option>
            <option value="Черн.маффин">Черничный маффин</option>
            <option value="Лесн.орех">Лесной орех</option>
            <option value="Солен.карамель">Соленая карамель</option>
            <option value="Клубника">Клубника</option>
            <option value="Мята">Мята</option>
            <option value="Банан">Банан</option>
            <option value="Айриш">Айриш</option>
            <option value="Лаванда">Лаванда</option>
          </select>
        </label>
      </div>
      <div class="buttons">
        <a onclick="btn_size_click(this)" class="btn__size two_size_s" data-bid="S">
          <div class="btn__text_size">S</div>
        </a>
        <a onclick="btn_size_click(this)" class="btn__size two_size_m" data-bid="M">
          <div class="btn__text_size">M</div>
        </a>
        <a onclick="btn_buy_click(this)" class="btn__buy">
        <div class="btn__text_buy">Добавить</div>
        </a>
      </div>
    </article>`;
  const html_flatwhite = `<article id="8" class="item flatwhite">
      <h5 class="item__title title_item title_flatwhite">Флэт Уайт</h5>
      <div class="item__label_price">
        <h5 class="item__text_price">0</h5>
      </div>
      <div class="syrup_select_container"
        <label>
          <select class="syrup_select_form" onchange="btn_syrup_click(this)">
            <option selected value="Нет">Без сиропа</option>
            <option value="Ваниль">Ваниль</option>
            <option value="Карамель">Карамель</option>
            <option value="Миндаль">Миндаль</option>
            <option value="Шокол.печенье">Шоколадное печенье</option>
            <option value="Кокос">Кокос</option>
            <option value="Черн.маффин">Черничный маффин</option>
            <option value="Лесн.орех">Лесной орех</option>
            <option value="Солен.карамель">Соленая карамель</option>
            <option value="Клубника">Клубника</option>
            <option value="Мята">Мята</option>
            <option value="Банан">Банан</option>
            <option value="Айриш">Айриш</option>
            <option value="Лаванда">Лаванда</option>
          </select>
        </label>
      </div>
      <div class="buttons">
      <a onclick="btn_size_click(this)" class="btn__size one_size" data-bid="S">
          <div class="btn__text_size">S</div>
        </a>
        <a onclick="btn_buy_click(this)" class="btn__buy">
        <div class="btn__text_buy">Добавить</div>
        </a>
      </div>
    </article>`;
  const html_tea = `<article id="9" class="item tea">
      <h5 class="item__title title_item title_tea">Чай</h5>
      <div class="item__label_price">
        <h5 class="item__text_price">0</h5>
      </div>
      <div class="syrup_select_container"
        <label>
          <select class="syrup_select_form" onchange="btn_syrup_click(this)">
            <option selected value="Нет">Без сиропа</option>
          </select>
        </label>
      </div>
      <div class="buttons">
      <a onclick="btn_size_click(this)" class="btn__size one_size" data-bid="L">
          <div class="btn__text_size">L</div>
        </a>
        <a onclick="btn_buy_click(this)" class="btn__buy">
        <div class="btn__text_buy">Добавить</div>
        </a>
      </div>
    </article>`;
  const products_array = [html_americano,html_espresso,html_flatwhite,html_tea];
  products_array.forEach(function (item) {
    products.insertAdjacentHTML("beforeend", item);
  });
}
