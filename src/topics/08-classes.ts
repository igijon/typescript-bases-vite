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

export class Heroin extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, 'New York');
    }

}

const valquiria = new Heroin('Valquiria', 25, 'Brunilda');
console.log(valquiria);
