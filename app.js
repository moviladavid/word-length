document.addEventListener('DOMContentLoaded', () => {

    let button = document.getElementById('buton')
    button.addEventListener('click', function() {
        let word = document.getElementById('inputBox').value;
        let count = word.length;
        let outputBox = document.getElementById('outputBox');

        outputBox.innerHTML = `<h1>Your word length is: ${count}</h1>`


    })

















})