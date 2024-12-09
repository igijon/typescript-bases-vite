/**Los decoradores son funciones especiales que pueden modificar el comportamiento de funciones, clases y propieades. Usualmente
 * no los crearemos, los utilizaremos
 */


function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}

/**El decorador nos indicará si será un servicio, un componente, una directiva... lo veremos en Angular...
 * Este tipo de decoradores se consumen, no es normal tener que construirlos... pero se podría crear.
 */
@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123';
    print() {
        console.log('Hola Mundo');
        
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);

