var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function modalshow(button) {
    modal.style.display = "block";

    let lng = parseFloat(button.dataset.lng);
    let lat = parseFloat(button.dataset.lat);
    
    showmap(lng, lat);
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let maps = null;
let marker = null;

function showmap(lng, lat){

    var latlng = L.latLng(lng, lat);

    if(maps == null){
        maps = L.map('mapid').setView(latlng, 13);
       
        L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(maps);        
    }
    else{
        maps.setView(latlng, 13);
        marker.remove();
    }

    marker = L.marker(latlng)
        .addTo(maps);
        // .bindPopup(latlng.toString())
        // .openPopup();
}