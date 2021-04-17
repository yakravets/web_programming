function select(b) {
    var button = b;
    var parent = button.parentElement;

    var bookname = parent.childNodes.item(3);

    var inputBookName = document.querySelector('#bookname')
    inputBookName.value = bookname.innerText;

    let price = parent.childNodes.item(7);
    let hiddenInputPrice = document.querySelector('#price');
    hiddenInputPrice.value = price.innerText;
}

function buy(){

    let bookName = document.querySelector("#bookname");
    if(bookName.value == ""){
        bookName.classList.add("red");
        return;
    }else{
        bookName.classList.remove("red");
    }

    let quantity = document.querySelector("#quantity");
    if(quantity.value == ""){
        quantity.classList.add("red");
        return;
    }else{
        quantity.classList.remove("red");
    }

    let name = document.querySelector("#name");
    if(name.value == ""){
        name.classList.add("red");
        return;
    }else{
        name.classList.remove("red");
    }

    let deliveryaddress = document.querySelector("#deliveryaddress");
    if(deliveryaddress.value == ""){
        deliveryaddress.classList.add("red");
        return;
    }else{
        deliveryaddress.classList.remove("red");
    }

    let deliverydate = document.querySelector("#deliverydate");
    if(deliverydate.value == ""){
        deliverydate.classList.add("red");
        return;
    }else{
        deliverydate.classList.remove("red");
    }

    let subject = document.querySelector("#subject");
    let price = document.querySelector("#price");
    
    let orderText = `<b>${name.value}</b>, thanks for the order!<br>
    Book <b>"${bookName.value}"</b> will be deliveres <b>${deliverydate.value}</b><br>
    to <b>${deliveryaddress.value}</b><br>
    You comment:<br> <b>${subject.value}</b><br>
    Total: <b>${parseFloat(price.value) * parseInt(quantity.value)}$</b>`;

    document.querySelector("#message").innerHTML = orderText;
    document.querySelector("#result").style.display = "block";
        
    let card = document.querySelector("#card");
    card.style.display = 'none';
}