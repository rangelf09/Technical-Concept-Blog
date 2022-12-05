
const loginFromHandler = async function (event) {
    event.preventDefault();

    const usernameEl = docuemtn.querySelector("#username-input-login");
    const passwordEl = docuement .querySelector("#password-input-login");

    const response = await fetch("api/user/login", {
        method: "POST",
        body: JSON.stringify({
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
document.addEventListener('submit', loginFromHandler);