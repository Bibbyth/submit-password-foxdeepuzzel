var password = "in the hint";

function passcheck() {

    if(document.getElementById('pass4').value != password) {
        alert('Wrong Password, Try Again.');
        return false;
    }

if(document.getElementById('pass4').value == password) {
    alert('Correct Password. Click OK');
}
}