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

        let textarea = document.querySelector('#textarea');

        let isValue = getTextarea('text');
        if(isValue){
            textarea.textContent = isValue;
        }

        document.querySelector('#textarea').addEventListener('input', function(){
            localStorage.setItem('text', textarea.value);
        });

        document.querySelector('#delete').addEventListener('click', function(){
            localStorage.removeItem('text');
            textarea.value = '';
        })

        function getTextarea(name){
            return localStorage.getItem(name);
        }    
        
/////////////////////////////////////////////////  