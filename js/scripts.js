'use strict';

const baseUrl = 'https://danepubliczne.imgw.pl/api/data/synop';
const select = document.querySelector('#weatherCity');

const getWeather = async city => {

    try{
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data;
    }catch(err){
        console.error(err);
    }

}

getWeather().then(data => {
    // console.log(data);
    data.forEach(element => {
        let option = document.createElement('option');
        option.text = element.stacja.toUpperCase();
        option.value = element.stacja;
        select.appendChild(option);
        
    });
    select.addEventListener('change', ()=>{
        const contentMain = document.querySelector('.content-main');
        contentMain.innerHTML = ""; // jak chcemy wyswietlić tylko jedną stacje
        

        const selctedCity = select.selectedIndex - 1;
        let h2 = document.createElement('h2');
        h2.className = "miasto";
        h2.innerHTML = `<img class="miasto-img" src="assets/icons/miasto.png" alt="Miasto"/>  ${data[selctedCity].stacja}`;
        let div = document.createElement('div');
        div.className = "flex";
        div.innerHTML = `<h1 class="temp"> <img class="temp-img" src="assets/icons/temp.png" alt="Temperatura"/>  ${data[selctedCity].temperatura} °C </h1>

        <div class="flex">
        <div class="flex-p">
        <p class="data"><img class="data-img" src="assets/icons/opad.png" alt="Opady"/>  ${data[selctedCity].suma_opadu} mm</p>
        <p class="data"><img class="data-img" src="assets/icons/cisnienie.png" alt="Ciśnienie"/>  ${data[selctedCity].cisnienie} hPa</p>
        </div>

        <div class="flex-p">
        <p class="data"><img class="data-img" src="assets/icons/wiatr.png" alt="Wiatr"/>  ${data[selctedCity].predkosc_wiatru} km/h</p>
        <p class="data"><img class="data-img" src="assets/icons/wilgotnosc.png" alt="Wilgotność"/>  ${data[selctedCity].wilgotnosc_wzgledna} %</p>
        </div>

        <div class="flex-p">
        <p class="data"><img class="data-img" src="assets/icons/data.png" alt="Data"/>  ${data[selctedCity].data_pomiaru}</p>
        <p class="data"><img class="data-img" src="assets/icons/czas.png" alt="Czas"/>  ${data[selctedCity].godzina_pomiaru}:00</p>
        </div>
        </div>
        
        `;
      
        // <td>${data[selctedCity].data_pomiaru}</td>
        // <td>${data[selctedCity].godzina_pomiaru}</td>
        // <td>${data[selctedCity].temperatura}</td>
        // <td>${data[selctedCity].suma_opadu}</td>
        // <td>${data[selctedCity].cisnienie}</td>
        contentMain.appendChild(h2);
        contentMain.appendChild(div);

    });
   
})