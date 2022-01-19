let city = document.querySelector('#city');
let btn = document.querySelector('.button-primary');
let cityChange = () => {return city.value};

const param = {
    "url" : "https://api.openweathermap.org/data/2.5/",
    "appid" : "27dab5958cc229f0e06c2ddff181eeb2"
}

btn.onclick = () => fetch(`${param.url}weather?id=${cityChange()}&appid=${param.appid}
`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    });
   
