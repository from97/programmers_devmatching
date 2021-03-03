import Sample from './Sample.js'
import Cat from './Cat.js'
import Detail from './Detail.js'
import Search from './Search.js'
import Result from './Result.js'

export default class App {
    constructor($target) {
        this.$target = $target;
        const search = new Search();
        const result = new Result();
        const detail = new Detail();
        const darkmode = document.createElement('span');
        darkmode.className = 'darkmode-button';
        darkmode.innerText = '🌕';
        $target.appendChild(darkmode);
    }
}