function loginReturn(){
   window.location="login.html";
}
function login() {
    if (document.getElementById("userName").value == "user@gmail.com" &&
        document.getElementById("password").value == "123456") {

        location.href = "dashboard.html";
    } else {
        alert("invalid userName and password");

    }
}

/* Registration form */
function formValidation() {
    var Email = document.registration.email;
    var phonenumber = document.registration.phonenumber;
    var password = document.registration.password;
    var Letter = document.registration.Letter;


    if (ValidateEmail(Email)) {
        if (allnumeric(phonenumber))

        {
            if (passwordvalidation(password, 7, 12)) {
                if (allLetter(uname)) {

                }
            }
        }
    }     return false;
}
        function ValidateEmail(Email) {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (Email.value.match(mailformat)) {
                return true;
            } else {
                alert("You have entered an invalid email address!");
                Email.focus();
                return false;
            }
        }

        function allnumeric(phonenumber) {
            var numbers = /^\d{10}$/;
            if (phonenumber.value.match(numbers)) {
                return true;
            } else {
                alert('phonenumber code must have numeric characters only');
                phonenumber.focus();
                return false;
            }
        }

        function passwordvalidation(password, mx, my) {
            var password_len = password.value.length;
            if (password_len == 0 || password_len >= my || password_len < mx) {
                alert("Password should not be empty / length be between " + mx + " to " + my);
                password.focus();
                return false;
            }
            return true;
        }

        function allLetter(uname) {
            var password_len = password.value.length;
            if (uname.value.match(password_len)) {
                return true;
            } else {
                alert('Username must have alphabet characters only');
                uname.focus();
                return false;
            }
        }