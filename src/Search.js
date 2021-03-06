export default class Search {
    constructor($target) {
        this.section = document.createElement('section');
        this.section.className = 'search-section';
        $target.appendChild(this.section);
        //this.recentKeywords = keywords;
        this.render();
        //this.focusOn();
    }

    /*
    focusOn() {
        const searchBox = document.querySelector('.search-box');
        searchBox.focus();
    }


    addKeyword() {
        if (this.recentKeywords.includes(keyword)) 
            return;
        this.recentKeywords.push(keyword);
        this.render();
    }

    searchKeyword(keyword) {
        if (keyword.length === 0)
            return;
        this.addKeyword(keyword);
        this.onSearch(keyword);
    }

    deleteKeyword() {
        const searchBox = document.querySelector('.search-box');
        searchBox.value = '';
    }
    */

    render() {
        this.section.innerHTML = '';

        const randomButton = document.createElement('span');
        randomButton.className = 'random-button';
        randomButton.innerText = '🐱';

        const searchBox = document.createElement('input');
        searchBox.className = 'search-box';
        searchBox.placeholder = '고양이를 검색하세요. ';

        const recentKeywords = document.createElement('div');
        recentKeywords.className = 'recent-keywords';

        this.section.appendChild(randomButton);
        this.section.appendChild(searchBox);
        this.section.appendChild(recentKeywords);
    }
}