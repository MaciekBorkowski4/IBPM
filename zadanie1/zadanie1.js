function ElementTablicy (name, description) {
    this.name = name;
    this.description = description
}

var nowyElement = new ElementTablicy();
var tablica = [];

for ( var i = 0; i < 20; i += 1) {
    tablica.push(nowyElement);
    if ( i % 2 === 0 ) {
        tablica[i] = {name: i, description: 'Parzyste'};
    } else {
        tablica[i] = {name: 'brak', description: 'Nieparzyste'}
    }
    if ( i === 0 ) {
        tablica[i] = {name: 'zero', description: 'zero'}
    }
}

// ElementTablicy.prototype.wyswietl = function () {
//     console.log('To jest element ' + this.name + ' z opisem ' + this.description)
// };
//
// var ElementTablicy2 = new ElementTablicy();
//
// ElementTablicy2.wyswietl();

console.table(tablica);
