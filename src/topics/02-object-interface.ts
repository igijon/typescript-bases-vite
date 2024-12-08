const skills: string[] = ['Bash', 'Counter', 'Healing'];

//1 interface equivale a 0 líneas de código en JS
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; //Esta sería opcional sería como indicar string | undefined
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = 'Rivendell';

console.table(strider);
