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

/////////////////////////////////////////////////

        /*
        Задание 3:
        Добавьте на страницу кнопку "Показать все". При клике по этой кнопке на странице
        должна появится или обновляется таблица с содержимым localStorrage. Первая колонка таблицы - ключ, вторая - значение.
        Добавьте на страницу кнопку "Очистить localStorage". При нажатии на кнопку localStorage должен быть очищен.
        */

        // document.forms.writeForm.addEventListener("submit", function (e) {
        //     e.preventDefault();
        //     const form = document.forms.writeForm;

        //     let key = form.keyInput.value;
        //     let value = form.valueInput.value;

        //     localStorage.setItem(key, value); 
        //     form.reset();
        // });

        // document.forms.readForm.addEventListener("submit", function (e) {
        //     e.preventDefault();

        //     const form = document.forms.readForm;
        //     let key = form.keyInput.value;

        //     let value = localStorage.getItem(key); 
        //     alert(value);
        // });

        // document.querySelector("#showAllButton").addEventListener("click", function () {
        //     showContentLocalStorage();
        // });

        // document.querySelector("#deleteAllButton").addEventListener("click", function (){
        //     localStorage.clear();
        //     showContentLocalStorage();
        // });    

        // function showContentLocalStorage(){
        //     const table = document.querySelector("#localStorageContent");

        //     table.innerHTML = '';
            
        //     for(let i = 0; i < localStorage.length; i++){
        //         let key = localStorage.key(i);
        //         let value = localStorage.getItem(key);

        //         table.insertAdjacentHTML('beforeend', `<tr><td>${key}</td><td>${value}</td></tr>`);
        //     }
        // }
        
/////////////////////////////////////////////////


        /*
            Задание 4:
            Сделайте так, чтобы изменения, сделанные для массива users, сохранялись и были доступны
            даже после закрытия и повторного открытия браузера.
        */
            let users = [
                {
                    balance: '1250.89',
                    age: 24,
                    name: {
                        first: 'Golden',
                        last: 'Clements'
                    },
                    company: 'EWAVES',
                    email: 'golden.clements@ewaves.io'
                },
                {
                    balance: '3637.94',
                    age: 23,
                    name: {
                        first: 'Francis',
                        last: 'Hebert'
                    },
                    company: 'XPLOR',
                    email: 'francis.hebert@xplor.biz'
                },
                {
                    balance: '1106.44',
                    age: 31,
                    name: {
                        first: 'Hale',
                        last: 'Cross'
                    },
                    company: 'EARTHPURE',
                    email: 'hale.cross@earthpure.us'
                },
                {
                    balance: '2502.43',
                    age: 25,
                    name: {
                        first: 'Delores',
                        last: 'Sykes'
                    },
                    company: 'ASSITIA',
                    email: 'delores.sykes@assitia.com'
                },
                {
                    balance: '3651.54',
                    age: 21,
                    name: {
                        first: 'Ryan',
                        last: 'Bolton'
                    },
                    company: 'MOLTONIC',
                    email: 'ryan.bolton@moltonic.biz'
                },
                {
                    balance: '1345.79',
                    age: 21,
                    name: {
                        first: 'Carey',
                        last: 'Schwartz'
                    },
                    company: 'UXMOX',
                    email: 'carey.schwartz@uxmox.info'
                },
                {
                    balance: '3261.11',
                    age: 30,
                    name: {
                        first: 'Trevino',
                        last: 'Mullins'
                    },
                    company: 'TERRASYS',
                    email: 'trevino.mullins@terrasys.org'
                },
                {
                    balance: '1659.17',
                    age: 20,
                    name: {
                        first: 'Gilliam',
                        last: 'Mendez'
                    },
                    company: 'ZENTHALL',
                    email: 'gilliam.mendez@zenthall.tv'
                },
                {
                    balance: '2340.54',
                    age: 32,
                    name: {
                        first: 'Brewer',
                        last: 'Vargas'
                    },
                    company: 'QIMONK',
                    email: 'brewer.vargas@qimonk.co.uk'
                },
                {
                    balance: '1736.91',
                    age: 24,
                    name: {
                        first: 'Newman',
                        last: 'Wynn'
                    },
                    company: 'VISALIA',
                    email: 'newman.wynn@visalia.name'
                }
            ];
    
            // класс для вывода информации в UL
            class ListService {
                selectedData;
                data;
                listElement;
    
                constructor(data, listElement, displayFn) {
                    this.data = data;
                    this.listElement = listElement;
    
                    for (let index = 0; index < data.length; index++) {
                        const currentData = data[index];
    
                        let li = document.createElement("li");
                        li.textContent = displayFn(currentData);
                        currentData.id = index; // для каждого пользователя указываем id, который совпадает с id в разметке
                        li.dataset.id = index;
    
                        this.listElement.append(li);
                    }
                }
    
                select(id) {
                    this.selectedData = this.data.filter(x => x.id == id)[0];
                    this.deselectAll();
    
                    const index = this.data.indexOf(this.selectedData);
                    this.listElement.children[index].classList.add("selected");
                }
    
                deselectAll() {
                    for (let i = 0; i < this.listElement.children.length; i++) {
                        const child = this.listElement.children[i];
                        child.classList.remove("selected");
                    }
                }
    
                // удаление данных из разметки и массива
                deleteSelectedItem() {
                    const index = this.data.indexOf(this.selectedData);
                    if (index != -1) {
                        this.listElement.children[index].remove();
                        this.data.splice(index, 1);
                    }
                    localStorage.setItem('users', JSON.stringify(users))
                }
            }
    
            // Класс для работы с формой, редактирующей информацию о пользователе
            class UserFormService {
                currentUser;
                form;
    
                constructor(form) {
                    this.form = form;
                }
    
                fillForm(user) {
                    this.currentUser = user;
    
                    this.form.firstName.value = user.name.first;
                    this.form.lastName.value = user.name.last;
                    this.form.companyName.value = user.company;
                    this.form.balance.value = user.balance;
                    this.form.email.value = user.email;
                    this.form.age.value = user.age;
                }
    
                saveForm() {
                    this.currentUser.name.first = this.form.firstName.value;
                    this.currentUser.name.last = this.form.lastName.value;
                    this.currentUser.company = this.form.companyName.value;
                    this.currentUser.balance = this.form.balance.value;
                    this.currentUser.email = this.form.email.value;
                    this.currentUser.age = this.form.age.value;

                    localStorage.setItem('users', JSON.stringify(users))
                }
    
                resetForm() {
                    this.form.reset();
                }
            }
    
            let userList = document.querySelector("#userList");
            let saveButton = document.querySelector("#saveButton");
            let deleteButton = document.querySelector("#deleteButton");

            let formStorage = localStorage.getItem('users');
            if(formStorage){
                users = JSON.parse(formStorage);
            }
    
            let listService = new ListService(users, userList, x => x.name.first + " " + x.name.last);
            let formService = new UserFormService(document.forms[0]);
    
            userList.addEventListener("click", function (e) {
                if (e.target.tagName != "LI") return;
    
                const userNumber = e.target.dataset.id;
                listService.select(userNumber);
                formService.fillForm(listService.selectedData);
            });
    
            document.forms[0].addEventListener("submit", function (e) {
                formService.saveForm();
                e.preventDefault();
            });
    
            // удаляем и очищаем форму
            deleteButton.addEventListener("click", function () {
                listService.deleteSelectedItem();
                formService.resetForm();
            });
            
/////////////////////////////////////////////////




