var password = "JohWovyl";

function passcheck() {

    if(document.getElementById('pass9').value != password) {
        alert('Wrong Password, Try Again.');
        return false;
    }

if(document.getElementById('pass9').value == password) {
    alert('Correct Password. Click OK');
}
}