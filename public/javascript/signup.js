const signupFromHandler = async function (event) {
    event.preventDefault();

    const username = document.querySelector("#username-input-signup").value.trim();
    const password = document.querySelector("#password-input-signup").value.trim();

    const response = await fetch("/api/user",{
        method: "post",
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if(response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("failed to sign up");
    }
};


document.querySelector('.signup-form')
document.addEventListener('submit', signupFormHandler);