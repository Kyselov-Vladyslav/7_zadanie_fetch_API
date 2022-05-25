'use strict';

const ip = 'https://ipapi.co/json/';

const getCity = async city => {

    try{
        const response = await fetch(ip);
        const data = await response.json();
        return data;
    }catch(err){
        console.error(err);
    }
}
getCity().then(data => {
        const ipCity = document.querySelector('.h2');
        ipCity.innerHTML = `${data.region} | ${data.city}`;
});