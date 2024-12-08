
//let name = 'Strider';
//name = 123; Esto daría error porque infiere un String.

const name: string = 'Strider';
let hpPoints: number | string = 95;
//let hpPoints: number | 'FULL' = 95;
const isAlive: boolean = true;

hpPoints = 'FULL';

console.log({
    name, hpPoints, isAlive 
});
