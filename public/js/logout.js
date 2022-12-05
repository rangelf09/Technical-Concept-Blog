const logout = async function (){
    const response = await fetch ("api/user/logout", {
        method: "POST",
        headers:{"content-Type": "application/json"},
    });

    if (response.ok) {
        document.location.replace("/");
        alert("you have been signed out ")
    } else {
        alert("not logged out")
    }
};

document.querySelector('#logout-link').addEventListener('click', logout);