export default class DarkMode {
    constructor($target) {
        const darkmode = document.createElement('span');
        darkmode.className = 'darkmode-button';
        darkmode.innerText = '🌕';
        $target.appendChild(darkmode);
    }
}