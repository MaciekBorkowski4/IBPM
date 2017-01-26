const submitButton = document.querySelector('.inputsForm');
const inputs = [];

function addInputs(e) {
    e.preventDefault();
    const name = (this.querySelector('#name')).value;
    const surname = (this.querySelector('#surname')).value;
    const email = (this.querySelector('#email')).value;
    const password = (this.querySelector('#password')).value;
    const radio = (((this.querySelector('.radio')).checked === true ) ?
         ((this.querySelector('#optionsRadios1')).value) : ((this.querySelector('#optionsRadios2')).value));
    const textArea = (this.querySelector('#textArea')).value;
    const pinta = (this.querySelector('#pinta')).value;
    const kormoran = (this.querySelector('#kormoran')).value;
    const inneBeczki = (this.querySelector('#inneBeczki')).value;
    const input = {
        name: name,
        surname: surname,
        password: password,
        email: email,
        radio: radio,
        textArea: textArea,
        pinta: pinta,
        kormoran: kormoran,
        inneBeczki: inneBeczki,

    };

    inputs.push(input);
    localStorage.setItem('inputs', JSON.stringify(inputs));
    console.log(inputs);
    this.reset();
}

submitButton.addEventListener('submit', addInputs)


//jak przekazywać informacje z radio i checkbox?