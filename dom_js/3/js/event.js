
function next(){

    let active = document.querySelector(".active");
    if(active == null){
        firstColor();
    }else{
        active.classList.remove("active");

        if(active.nextElementSibling == null){
            firstColor();
        }else{
            active.nextElementSibling.classList.add("active");
        }
    }
}

function firstColor(){
    document.querySelector("#red").classList.add("active");
}