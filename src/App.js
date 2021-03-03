import Cat from './components/Cat.js';
import Detail from './components/Detail.js';
import Search from './components/Search.js';
import Result from './components/Result.js';
import DarkMode from './components/DarkMode.js';
import { getItem, setItem } from './utils/sessionStorage.js';

export default class App {
    constructor($target) {
        this.$target = $target;
        const keywords = getItem('keywords');

        const onSearch = async (keyword) => {
            //loading.toggleSpinner();
            const response = await api.fetchCats(keyword);
            if (!response.isError) {
                setItem('data', response.data);
                Result.setState(response.data);
                //loading.toggleSpinner();
            }
            else {
                error.setState(response.data);
            }
        }

        const onRandom = async () => {
            //loading.toggleSpinner();
            const response = await api.fetchRandomCats();
            if (!response.isError) {
                setItem('data', response.data);
                Result.setState(response.data);
                //loading.toggleSpinner();
            } else {
                error.setState(response.data);
            }
        }

        const search = new Search($target, keywords, onSearch, onRandom);
        //const result = new Result();
        //const detail = new Detail();
        const darkMode = new DarkMode($target);
    }
}