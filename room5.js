var password = "526334";

function passcheck() {

    if(document.getElementById('pass5').value != password) {
        alert('Wrong Password, Try Again.');
        return false;
    }

if(document.getElementById('pass5').value == password) {
    alert('Correct Password. Click OK');
}
}