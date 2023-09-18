/*
            Задание 1:
            Добавьте возможность сохранить выбранный цвет страницы в cookies сроком на 1 неделю.
            Добавьте восстановление выбранного цвета из cookies, если они есть, после загрузки документа.
        */
// let color = getCookie('color');
// if(color){
//     document.body.style.backgroundColor = color;
// }

// document.querySelector("#saveButton").addEventListener("click", function () {
//     const form = document.forms[0];
//     let selectedColor = form.color.value;
//     setCookie('color', selectedColor, 7 * 24 * 60 * 60);

//     document.body.style.backgroundColor = selectedColor;

// });

// function setCookie(name, value, maxAge){
//     let encodeValue = encodeURIComponent(value);
//     document.cookie = `${name}=${encodeValue};max-age=${maxAge}`;
// }

// function getCookie(name){
//     let cookie = document.cookie;
//     let pos = cookie.indexOf(name + '=');

//     if(pos != -1){
//         let start = pos + name.length + 1;
//         let end = cookie.indexOf(';', start);

//         if(end == -1){
//             end = cookie.length;
//         }
//         let value = cookie.substring(start, end);

//         return decodeURIComponent(value);
//     }
// }

/////////////////////////////////////////////////

/*
        Задание 2:
        Сделайте так чтобы значение, введенное в поле ввода на данной странице, сохранялось при каждом изменении.
        Когда пользователь повторно зайдет на эту страницу, поле ввода должно содержать последнее введенное значение.
        */

// let textarea = document.querySelector('#textarea');

// let isValue = getTextarea('text');
// if(isValue){
//     textarea.textContent = isValue;
// }

// document.querySelector('#textarea').addEventListener('input', function(){
//     localStorage.setItem('text', textarea.value);
// });

// document.querySelector('#delete').addEventListener('click', function(){
//     localStorage.removeItem('text');
//     textarea.value = '';
// })

// function getTextarea(name){
//     return localStorage.getItem(name);
// }

/////////////////////////////////////////////////

/*
        Задание 3:
        Добавьте на страницу кнопку "Показать все". При клике по этой кнопке на странице
        должна появится или обновляется таблица с содержимым localStorrage. Первая колонка таблицы - ключ, вторая - значение.
        
        Добавьте на страницу кнопку "Очистить localStorage". При нажатии на кнопку localStorage должен быть очищен.
        */
// const form = document.forms.writeForm;
// let showAllButtonIsPressed = false;
// let localStorageLength;

// document.forms.writeForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     let key = form.keyInput.value;
//     let value = form.valueInput.value;

//     localStorage.setItem(key, value);
//     form.reset();
// });

// document.forms.readForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const form = document.forms.readForm;
//     const keyInput = form.keyInput;
//     let key = form.keyInput.value;

//     let value = localStorage.getItem(key);
//     alert(value);
//     keyInput.value = '';
// });

        /*
        Задание 3:
        Добавьте на страницу кнопку "Показать все". При клике по этой кнопке на странице
        должна появится или обновляется таблица с содержимым localStorrage. Первая колонка таблицы - ключ, вторая - значение.
        
        Добавьте на страницу кнопку "Очистить localStorage". При нажатии на кнопку localStorage должен быть очищен.
        */
        document.forms.writeForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const form = document.forms.writeForm;

            let key = form.keyInput.value;
            let value = form.valueInput.value;

            localStorage.setItem(key, value); 
            form.reset();
        });

        document.forms.readForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const form = document.forms.readForm;
            let key = form.keyInput.value;

            let value = localStorage.getItem(key); 
            alert(value);
        });

        document.querySelector("#showAllButton").addEventListener("click", function () {
            showContentLocalStorage();
        });

        document.querySelector("#deleteAllButton").addEventListener("click", function (){
            localStorage.clear();
            showContentLocalStorage();
        });    

        function showContentLocalStorage(){
            const table = document.querySelector("#localStorageContent");

            table.innerHTML = '';
            
            for(let i = 0; i < localStorage.length; i++){
                let key = localStorage.key(i);
                let value = localStorage.getItem(key);

                table.insertAdjacentHTML('beforeend', `<tr><td>${key}</td><td>${value}</td></tr>`);
            }
        }