// to save array to local storage
// localStorage.setItem('arrayJASON_stringify', JSON.stringify([1,3,4])) 

// localStorage.setItem('array', [1,3,4])

// to save object to local storage
// localStorage.setItem('object', JSON.stringify({name: 'abul', location: 'kabul'}))

// to get object from local storage
// const obj = localStorage.getItem('object')
// const parse = JSON.parse(obj);
// console.log(parse) 

//update local storage data
// const obj = localStorage.getItem('object')
// const parseObj = JSON.parse(obj)
// parseObj.name = 'habul'
// localStorage.setItem('object', JSON.stringify(parseObj))



const addToLocalStorage = () => {

    const key = document.getElementById('storage-key');
    const keyInput = key.value;
    const value = document.getElementById('storage-value');
    const valueInput = value.value;

    if (keyInput && valueInput) {

        localStorage.setItem(keyInput, valueInput);
        key.value = '';
        value.value = '';

    }

}