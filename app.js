let userIn = document.querySelector('#userIn');
let userPass = document.querySelector('#userPass');
let btn = document.querySelector('#btn');
let invalidName = document.querySelector('#invalidName');
let invalidePass = document.querySelector('#invalidePass')
let theName = "Hasib";
let thePass = "Hasib";



btn.addEventListener('click', function () {
    if ((userIn.value !== theName) && (userPass.value !== thePass)) {
        invalidName.setAttribute('style', 'display:block;')
        invalidePass.setAttribute('style', 'display:block;')
    } else if (userIn.value !== theName) {
        invalidName.setAttribute('style', 'display:block;')
    } else if (userPass.value !== thePass) {
        invalidePass.setAttribute('style', 'display:block;')
    } else if (userIn.value === theName) {
        invalidePass.setAttribute('style', 'display:none;')
    } else {
        alert('😍আরে আমার পোলা😍')
    }
    // document.preventDefault();
})

