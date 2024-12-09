import './style.css';
import './topics/09-generics';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 Hola Mundo
`
console.log('Hola Mundo');