var password = "hi";

function passcheck() {

    if(document.getElementById('pass3').value != password) {
        alert('Wrong Password, Try Again.');
        return false;
    }

if(document.getElementById('pass3').value == password) {
    alert('Correct Password. Click OK');
}
}