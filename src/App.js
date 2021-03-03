import Sample from './Sample.js';
import Cat from './Cat.js';
import Detail from './Detail.js';
import Search from './Search.js';
import Result from './Result.js';
import DarkMode from './DarkMode.js';

export default class App {
    constructor($target) {
        this.$target = $target;
        const search = new Search($target);
        //const result = new Result();
        //const detail = new Detail();
        const darkMode = new DarkMode($target);
    }
}