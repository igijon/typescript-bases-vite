

export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Inma',
    children: ['Lucía', 'Ricardo']
}

const passenger2: Passenger = {
    name: 'Marta',
}

const returnChildren = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0; //Operador optional chaining
    //passenger.children!.length sería para forzar que va a tener un valor y pedirle al compilador que lo entienda
    //Not Null Assertion operator (!).
    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

returnChildren(passenger1);
returnChildren(passenger2);