export class Person {
    public name: string;
    private address: string;

    constructor() {
        this.name = 'Inma';
        this.address = 'Ciudad Real'
    }
}

const valquiria = new Person();
console.log(valquiria);
