window.onload = extractdata;

function logout(){
    localStorage.removeItem('user');
    redirect_to_login();    
}

function extractdata(){
    let user_str = localStorage.getItem('user');
    if(user_str == null){
        redirect_to_login();
    }
    else{
        let user = JSON.parse(user_str);

        let field = document.querySelector('#options');
        field.innerHTML = `
            <h4>I like JS =)</h4>
            <h4>First name:</h4> ${user.fname}
            <h4>Last name:</h4> ${user.lname}
            <h4>Email:</h4> ${user.email}`;
    }
}