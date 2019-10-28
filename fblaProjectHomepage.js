// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function submit() {
    var name = document.forms["RegForm"]["Name"];
    var Email = document.forms["RegForm"]["EMail"];
    var Password = document.forms["RegForm"]["Password"];
    
    if (name.value === "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    } else {
        return "name required";
    }
    
    if (email.value === "") {
        window.alert("Please enter a valid e-main address.");
        email.focus();
        return false;
    } else {
        return "email address required";
    }
    
    if (password.value === "") {
        window.alert("Please enter your password.");
        password.focus();
        return false;
    } else {
        return "password required";
    }
    
    return true;
}
