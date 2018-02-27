
import './styles/index.scss';
import packageJson from '../package.json'
console.log(packageJson.description)
console.log('Version : ', packageJson.version)

document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.querySelector('#current-year');
    const now = new Date();
    currentYearSpan.textContent = now.getFullYear();
})