$(document).ready(function() {


// pobranie danych z formularza i zapisanie do localStorage
const submitButton = document.querySelector('.inputsForm');
const ordersList = document.querySelector('.orderList')
const inputs = [];

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
        ordersList.innerHTML = orders.map((order, i) => {
            return ` <li>
                        <label>Piwo marki: ${order.orderLabel}, liczba sztuk: ${order.orderValue}</label>
                    </li>
`;
        }).join('');
    }

submitButton.addEventListener('submit', addInputs);

// walidacja formularza

    function nameSurnameValInfo() {
        const input = $(this);
        const inputVal = input.val();
        const nameSurnameLength = input.val().length;
        if(nameSurnameLength >= 2 && nameSurnameLength <= 19) {
            input.removeClass('invalid').addClass('valid');
            input.next('.validationInfo').text('OK!').removeClass('mistake').addClass('ok');
        } else {
            input.removeClass('valid').addClass('invalid');
            input.next('.validationInfo').text('To pole powinno zawierać od 2 do 19 znaków')
                .removeClass('ok').addClass('mistake');
        }
    }

    $('#name').on('blur', nameSurnameValInfo);
    $('#surname').on('blur', nameSurnameValInfo);


});
//jak przekazywać informacje z radio i checkbox?
// uzupełnić walidację o string vs number