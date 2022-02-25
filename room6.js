var password = "WHYTHISSTAGEISEASY";

function passcheck() {

    if(document.getElementById('pass6').value != password) {
        alert('Wrong Password, Try Again.');
        return false;
    }

if(document.getElementById('pass6').value == password) {
    alert('Correct Password. Click OK');
}
}