let magicNumber = 0;

window.onload = function () {
    document.getElementById('guessBtn')
        .addEventListener('click', function (event) {
            compareNumber(document.getElementById('input').value).then(
                result => addMessages(result, 's'),
                error => addMessages(error)
            )
        })
}




function compareNumber(nr) {
    return new Promise(function (resolve, reject) {
        resolve('You have guessed it right!')
    })
}

function addMessages(m) {

    document.getElementById('messages').innerText =
        `<div class= alert ${type==s? "alert-succes" : "alert-danger"} role="alert">
    ${m}
    </div>`

}

function generateNumber() {
    magicNumber = Math.floor(Math.random() * 21);
    return magicNumber;
}