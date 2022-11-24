const loginFormHandler = async (event) => {
    event.preventDefault();
  
   
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert("Failed to login");
      }
    }
  };
  
  const signup = async (event) => {
    event.preventDefault();
  
    document.location.replace('/signup');
  }
  
  const login = async (event) => {
    event.preventDefault();
  
    document.location.replace('/login');
  }
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert("Failed to sign up");
      }
    }
  };
  
  
  
  if(document.querySelector('#login')){
    document
      .querySelector('#login')
      .addEventListener('click', loginFormHandler);
  
    document
    .querySelector('#new-member')
    .addEventListener('click', signup)
  }
  
  if(document.querySelector('#sign-up')) {
    document
      .querySelector('#sign-up')
      .addEventListener('click', signupFormHandler)
    
    document
    .querySelector('#a-member')
    .addEventListener('click', login)
  }