
let pb_api = 'https://api.privatbank.ua/p24api/infrastructure?json&atm&address=&city=';

const input = document.querySelector('#city_line');
input.addEventListener('keydown', (event) => {
    if(event.keyCode == 13){
        click_search();
    }
});

function click_search(){

    let city = document.querySelector('#city_line').value;

    if(city === ''){
        return;
    }

    let btn_s = document.querySelector("#btn-search");
    btn_s.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Знайти';
    btn_s.disabled = true;

    setTimeout(get_data, 1500);
}

function get_data(){
    let tb = document.querySelector('tbody');
    tb.innerHTML = '';

    let city = document.querySelector('#city_line').value;
    let url = pb_api + city;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            
            let result = JSON.parse(xhr.response);
            view_atm(result.devices);

          } else {
            console.error(xhr.statusText);
          }
        }
      };
      xhr.onerror = function (e) {
        console.error(xhr.statusText);
        disable_spiner();
      };

    xhr.send();
}

function view_atm(atm_list) {
    
    let tb = document.querySelector('tbody');   
    atm_list.forEach(item => {
        tb.innerHTML += `<tr>
            <th scope="row">${item.type}</th>
            <td>${item.fullAddressUa}</td>
            <td>${item.placeUa}</td>
            <td class="text-nowrap">
                <button type="button" class="btn btn-primary"
                    data-bs-placement="left"
                    data-bs-html="true"
                    data-bs-toggle="popover" title="<strong>Розклад роботи:</strong>"
                    data-bs-content='
                        <ul class="list-group">
                            <li class="list-group-item"><strong>Понеділок:</strong> ${item.tw.mon}</li>
                            <li class="list-group-item"><strong>Вівторок:</strong> ${item.tw.tue}</li>
                            <li class="list-group-item"><strong>Середа:</strong> ${item.tw.wed}</li>
                            <li class="list-group-item"><strong>Четвер:</strong> ${item.tw.thu}</li>
                            <li class="list-group-item"><strong>П&#39;ятниця:</strong> ${item.tw.fri}</li>
                            <li class="list-group-item"><strong>Субота:</strong> ${item.tw.sat}</li>
                            <li class="list-group-item"><strong class="red">Неділя:</strong> ${item.tw.sun}</li>
                            <li class="list-group-item"><strong class="red">По святах:</strong> ${item.tw.hol}</li>
                        </ul>'>
                    <i class="bi bi-calendar-day"></i>
                </button>
                <button type="button" class="btn btn-primary show-map" data-lng='${item.longitude}' data-lat='${item.latitude}' onclick='modalshow(this)'><i class="bi bi-geo-alt"></i></button>
            </td>
        </tr>`;
    });

    
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    });

    disable_spiner();
  }

  function disable_spiner(){
    let btn_s = document.querySelector("#btn-search");
    btn_s.innerHTML = '<i class="bi bi-search"></i> Знайти';
    btn_s.disabled = false;
  }