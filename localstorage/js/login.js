window.onload = user_signed;

function signin() {

    let login = document.querySelector('#login').value;
    if(login == ''){
        alert('Login is empty');
        return;
    }
    
    let password = document.querySelector('#password').value;
    if(password == ''){
        alert('Password is empty');
        return;
    }

    let users_str = localStorage.getItem('users');
    let users_arr = JSON.parse(users_str);

    let user = users_arr.find(user => user.email === login && user.password === password);
    if (user == undefined){
        alert('Login/password invalid') 
        return;         
    }

    localStorage.setItem('user', JSON.stringify(user));
    redirect_to_profile();
    
}

function user_signed(){
    let user = localStorage.getItem('user');
    if(user != null){
        redirect_to_profile();
    }
}