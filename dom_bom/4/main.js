var btn = document.querySelector('.form__btn')
var r = document.getElementById('r');
var g = document.getElementById('g');
var b = document.getElementById('b');
var result = document.querySelector('.result');
var arr = [];

function btn__click(evt) {
    evt.preventDefault();
    var bg = rgbToHex(parseInt(r.value), parseInt(g.value), parseInt(b.value));
    var str = '';
    str = "RGB (" + r.value + ", " + g.value + ", " + b.value + ")";
    result.innerHTML += '<div class=\"item\"> <span style=\"background-color:' + bg + ';\" class = \"item__color\"> </span> <div class = \"item__text\" >' + str + '</div> </div>';


}
btn.addEventListener('click', btn__click);

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


function getHexaFromRGB(r, g, b) {
    return ("#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)).toString();

}