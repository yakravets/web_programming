function sendForm(e) {
    e.preventDefault();

    let fname = document.querySelector("input#fname").value;
    if (fname == null || fname == undefined || fname.length <= 0) {
        return;
    }

    let lname = document.querySelector("input#lname").value;
    if (lname == null || lname == undefined || lname.length <= 0) {
        return;
    }

    let email = document.querySelector("input#email").value;
    if (email == null || email == undefined || email.length <= 0) {
        return;
    }

    let pass = document.querySelector("input#pass").value;
    if (pass == null || pass == undefined || pass.length <= 0) {
        return;
    }

    let repeatpass = document.querySelector("input#repeatpass").value;
    if (repeatpass == null || repeatpass == undefined || repeatpass.length <= 0) {
        return;
    }

    let gender = document.querySelectorAll("input[type='radio']:checked")[0].value;
    if (gender == null || gender == undefined) {
        return;
    }

    let table_block = document.querySelector(".tb");
    table_block.style.display = 'block';
    let table = document.querySelector('table#table').tBodies[0];
    table.innerHTML += `
        <tr>
            <td>${fname}</td>
            <td>${lname}</td>
            <td>${gender}</td>
            <td>${email}</td>
        </tr>`

}

document.querySelector("#btn-submit").addEventListener('click', sendForm);

function validate() {
    let inputValue = this.value;
    if (inputValue.length <= 0) {
        this.classList.add("invalid");
    } else {
        this.classList.remove("invalid");
    }
}

document.querySelector("input#fname").addEventListener('input', validate);
document.querySelector("input#lname").addEventListener('input', validate);
document.querySelector("input#email").addEventListener('input', validate);
document.querySelector("input#pass").addEventListener('input', validate);
document.querySelector("input#repeatpass").addEventListener('input', validate);