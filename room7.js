var password = "do you realize that getting vip isn't easy?";

function passcheck() {

    if(document.getElementById('pass7').value != password) {
        alert('Wrong Password, Try Again.');
        return false;
    }

if(document.getElementById('pass7').value == password) {
    alert('Correct Password. Click OK');
}
}