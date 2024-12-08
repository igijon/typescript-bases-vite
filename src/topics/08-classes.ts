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

const valquiria = new Person('Valquiria', 'New York');
console.log(valquiria);
