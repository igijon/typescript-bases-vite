
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

interface Address {
    street: string; //Con F2 pulsado si cambio el valor, lo cambia en todo el programa
    country: string;
    city: string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );
