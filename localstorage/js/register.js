
function register(){
     
    let login = document.querySelector('#email').value;
    if(login == ''){
        alert('Login is empty');
        return;
    }
    
    let password = document.querySelector('#password').value;
    if(password == ''){
        alert('Password is empty');
        return;
    }

    let fname = document.querySelector('#fname').value;
    if(fname == ''){
        alert('First name is empty');
        return;
    }

    let lname = document.querySelector('#lname').value;
    if(lname == ''){
        alert('Last name is empty');
        return;
    }

    let user = {
        'email': login,
        'password': password,
        'fname': fname,
        'lname': lname
    }

    let users = localStorage.getItem('users');
    if (users == null){
        users_data = []
    }
    else{
        users_data = JSON.parse(users);
    }

    users_data.push(user);

    localStorage.setItem('users', JSON.stringify(users_data));
    localStorage.setItem('user', JSON.stringify(user));

    redirect_to_profile();
}