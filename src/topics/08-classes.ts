export class Person {
    // public name: string;
    // private address: string;

    // constructor(name: string, address: string) {
    //     this.name = name;
    //     this.address = address;
    // }

    constructor(
        public name: string, 
        private address: string = 'No address'
    ) {}
}

// export class Heroin extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, 'New York');
//     }

// }

/** Composición: tenemos una dependencia en la clase Heroin, podemos ver la información
 * con el atributo persona.
 */
export class Heroin {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person // De esta manera si modifico la clase persona, no nos afecta
    ) {
        this.person = new Person(realName);
    }

}

const bruni = new Person('Brunilda', 'New York'); 
//yo puedo manejar esta instancia y mandarlo a las otras clases mediante lo que se llama
//Inyección de dependencias y seguir reutilizando el código.
const valquiria = new Heroin('Valquiria', 25, 'Brunilda', bruni);
console.log(valquiria);
