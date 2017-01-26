$(document).ready(function () {


// pobranie danych z formularza i jednoczesne wyświetlenie oraz zapisanie do localStorage
    const submitButton = document.querySelector('.inputsForm');
    const ordersList = document.querySelector('.orderList')
    const inputs = JSON.parse(localStorage.getItem('inputs')) || [];

    function addInputs(e) {
        e.preventDefault();
        const name = (this.querySelector('#name')).value;
        const surname = (this.querySelector('#surname')).value;
        const email = (this.querySelector('#email')).value;
        const password = (this.querySelector('#password')).value;
        const orderLabel = (this.querySelector('#orderLabel')).value;
        const orderValue = (this.querySelector('#orderValue')).value;

        const textArea = (this.querySelector('#textArea')).value;

        const input = {
            name: name,
            surname: surname,
            password: password,
            email: email,
            orderLabel: orderLabel,
            orderValue: orderValue,
            textArea: textArea
        };

        inputs.push(input);
        orderList(inputs, ordersList);
        localStorage.setItem('inputs', JSON.stringify(inputs));
        console.log(inputs);
        this.reset();
    }

    function orderList(orders = [], ordersList) {
        ordersList.innerHTML = orders.map((order) => {
            return ` <li>
                        <label>Piwo marki: ${order.orderLabel}, liczba sztuk: ${order.orderValue}</label>
                            <ul class="underOrderList">
                                <li>${order.textArea}</li>
                            </ul>
                    </li>
                    
`;
        }).join('');
    }

    submitButton.addEventListener('submit', addInputs);

    orderList(inputs, ordersList);

// walidacja formularza

    function nameSurnameValid() {
        const input = $(this);
        const nameSurnameLength = input.val().length;
        if (nameSurnameLength >= 2 && nameSurnameLength <= 19) {
            input.removeClass('invalid').addClass('valid');
            input.next('.validationInfo').empty();
        } else {
            input.removeClass('valid').addClass('invalid');
            input.next('.validationInfo').text('To pole powinno zawierać od 2 do 19 znaków')
                .removeClass('ok').addClass('mistake');
        }
    }

    function emailValid() {
        const input = $(this);
        const regEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        const isEmail = regEx.test(input.val());
        if (isEmail) {
            input.removeClass('invalid').addClass('valid');
            input.next('.validationInfo').empty();
        } else {
            input.removeClass('valid').addClass('invalid');
            input.next('.validationInfo').text('Wprowadź adres e-mail w poprawnym formacie')
                .removeClass('ok').addClass('mistake');
        }
    }

    function orderValid() {
        const input = $(this);
        const regEx = /^[0-9]/i;
        const isNumber = regEx.test(input.val());
        if (isNumber) {
            input.removeClass('invalid').addClass('valid');
            input.next('.validationInfo').empty();
        } else {
            input.removeClass('valid').addClass('invalid');
            input.next('.validationInfo').text('Wprowadź liczbę')
                .removeClass('ok').addClass('mistake');
        }
    }

    $('#name').on('blur', nameSurnameValid);
    $('#surname').on('blur', nameSurnameValid);
    $('#email').on('blur', emailValid);
    $('#orderValue').on('blur', orderValid);


});
//jak przekazywać informacje z radio i checkbox?
// uzupełnić walidację o string vs number