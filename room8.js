var password = "BUTTERLAND";

function passcheck() {

    if(document.getElementById('pass8').value != password) {
        alert('Wrong Password, Try Again.');
        return false;
    }

if(document.getElementById('pass8').value == password) {
    alert('Correct Password. Click OK');
}
}