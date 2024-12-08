function addNumbers(a: number, b: number):number { //Si no indico valor, determina que tendrá el valor 'any' pero al tenerlo en modo strict no lo permite. Si no sé el valor puedo decir que es any
    return a + b;
}

const addNumbersArrow = (a: number, b: number):string => {
    return `${a+b}`;
}

//Se recomiendan primero los obligatorios, luego los opcionales y luego los valores por defecto
//También se aconseja que si se mandan más de tres argumentos, se mande un objeto
function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber*base;
}

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);

// con
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount:number) => {
    character.hp += amount; //Le sumamos a los puntos de vida el amount

}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 50);
strider.showHp();