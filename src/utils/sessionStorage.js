function getItem(key) {
    const value = sessionStorage.getItem(key);

    if (key === 'data')
        return (value === null) ? null : JSON.parse(value);
    else
        return (value === null) ? [] : JSON.parse(value);
}

function setItem(key, value) {
    if (value === null || value == undefined)
        return;
    const string = JSON.stringify(value);
    sessionStorage.setItem(key, string);
}

export { getItem, setItem };