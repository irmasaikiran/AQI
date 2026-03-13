const form = document.getElementById("form");
const details = document.getElementById("details");
const city = document.getElementById("cityInput");
const naame = document.getElementById("naame");
const aqi = document.getElementById("aqiValue");
const co = document.getElementById("coValue");
const no2 = document.getElementById("no2Value");
const o3 = document.getElementById("o3Value");
const pm10 = document.getElementById("pm10Value");
const so2 = document.getElementById("so2Value");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const cityName = city.value;
    const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${cityName}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7c96d0dd22msh38f92d4c62c4defp1f2b8djsn65b1b08db536',
            'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch(url,options)
        .then(response=>response.json())
        .then(data=>{
            naame.textContent=cityName;
            aqi.textContent = data.overall_aqi;
            co.textContent = data.CO.concentration;
            no2.textContent = data.NO2.concentration;
            o3.textContent = data.O3.concentration;
            pm10.textContent = data.PM10.concentration;
            so2.textContent = data.SO2.concentration;
            details.style.display="flex";
            city.value="";
        } )
})
