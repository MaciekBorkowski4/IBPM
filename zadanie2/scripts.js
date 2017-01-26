const submitButton = document.querySelector('.inputsForm');

function addInputs(e) {
    e.preventDefault();
    const name = (this.querySelector('#name')).value;
    const surname = (this.querySelector('#surname')).value;
    const email = (this.querySelector('#email')).value;
    const password = (this.querySelector('#password')).value;
    const inputs = {
        name: name,
        surname: surname,
        password: password,
        email: email,
        fill: false
    }
    console.log(inputs);
}

submitButton.addEventListener('submit', addInputs)
