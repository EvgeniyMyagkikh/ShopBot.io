let tg = window.Telegram.WebApp;

tg.expand();

sessionStorage.clear();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#4169E1";

function show_btn() {
    tg.MainButton.setText("Перейти к оплате");
    tg.MainButton.show();
}

// Обработка нажатия на кнопку выбора сиропа
function btn_syrup_click(this_btn) {
    const syrup_select_container = this_btn.parentElement.parentElement;
    const text_price_item = syrup_select_container.querySelector(".item__text_price");
    let sum = Number(text_price_item.textContent);

    text_price_item.textContent = String(sum);
}


// Обработка нажатия на кнопку выбора размера
async function btn_size_click(this_btn) {
    const button_container = this_btn.parentElement;
    const syrup_select = button_container.parentElement.querySelector(".syrup_select_form");
    const buttons = button_container.querySelectorAll(".btn__size");
    const button_buy = button_container.querySelector(".btn__buy");
    const text_price_item = button_container.parentElement.querySelector(".item__text_price")

    if (!button_buy.classList.contains("_active")) {

        buttons.forEach(function (i) {
            if (i !== this_btn) {
                i.classList.remove("_active");
            }
        });

        this_btn.classList.toggle("_active");

        const response = await fetch('json/prices.json');
        const prices = await response.json();

        switch (this_btn) {
            case buttons[0]:
                text_price_item.textContent = prices[this_btn.parentElement.parentElement.classList]["S"];
                break
            case buttons[1]:
                text_price_item.textContent = prices[this_btn.parentElement.parentElement.classList]["M"];
                break
            case buttons[2]:
                text_price_item.textContent = prices[this_btn.parentElement.parentElement.classList]["L"];
                break
        }

        if (syrup_select.value !== "Нет") {
            text_price_item.textContent = String(Number(text_price_item.textContent) + 20)
        }

        if (!this_btn.classList.contains("_active")) {
            text_price_item.textContent = "0";
            syrup_select.classList.remove("_active")
        } else {
            syrup_select.classList.add("_active")
        }
    }

}

// Обработка нажатия на кнопку добавления
function btn_buy_click(this_btn) {
    const button_container = this_btn.parentElement;
    const buttons = button_container.querySelectorAll(".btn__size");
    const text_price_item = button_container.parentElement.querySelector(".item__text_price");
    const average_price = document.querySelector(".average-price_text");
    const syrup_container = button_container.parentElement.querySelector(".syrup_select_form");
    const button_buy = button_container.querySelector(".btn__buy");

    buttons.forEach(function (i) {
        if (i.classList.contains("_active")) {
            this_btn.closest(".btn__buy").classList.toggle("_active");
            const item_title = button_container.parentElement.querySelector(".item__title").textContent;
            if (this_btn.classList.contains("_active")) {
                const item_size = i.dataset.bid;
                const syrup = syrup_container.value;
                const price = text_price_item.textContent;

                let card_info = item_size + " " + syrup + " " + price;

                this_btn.querySelector(".btn__text_buy").textContent = "Убрать";
                average_price.textContent = String(Number(average_price.textContent) + Number(text_price_item.textContent));

                sessionStorage.setItem(item_title, JSON.stringify(card_info));
                show_btn();
            } else {

                this_btn.querySelector(".btn__text_buy").textContent = "Добавить";
                average_price.textContent = String(Number(average_price.textContent) - Number(text_price_item.textContent));

                text_price_item.textContent = "0";
                syrup_container.value = "Нет";
                syrup_container.classList.remove("_active");

                sessionStorage.removeItem(item_title);

                let counter_active_btn_buy;

                button_buy.forEach(function (i){
                    if (i.classList.contains(("_active"))){
                        counter_active_btn_buy += 1
                    }
                })

                if (counter_active_btn_buy === 0){
                    tg.MainButton.hide();
                }

                // Убираем класс _active с кнопок размера
                buttons.forEach(function (j) {
                    j.classList.remove("_active");
                });
            }
        }
    });
}


Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(sessionStorage);
});




