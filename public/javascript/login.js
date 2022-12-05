const { Json } = require("sequelize/types/utils");

const loginFromHandler = async function (event) {
    event.preventdefault();

    const usernameEl = docuemtn.querySelector("#username-input-login");
    cont passwordEl = docuement .querySelector("#password-input-login");

    const response = await fetch("api/user/login", {
        method: "POST",
        body:Json.stringify({
            username: usernameEl.value,
            password: passwordEl.value
        }),
        headers: { 'Content-Type': 'application/json'},
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert("username or password is incorrect")
    }
};



 document.querySelector('.login-form')
document.addEventListener('submit', loginFormHandler);