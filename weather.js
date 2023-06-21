var theWeather = ""
const cloudy = [1003, 1006,1009,1030];
const rain = [1063, 1150, 1153, 1186, 1189, 1192, 1195, 1240, 1243, 1246, 1276];
const snow = [1114, 1117, 1066, 1147, 1210, 1213,1216, 1219, 1222, 1225,1255, 1258, 1264, 1282 ];

async function getWeather()
{
    try
    {
        var input = document.querySelector(".searchBar > input").value;
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=774e144eeb8543a497a04314232704&q=${input}&aqi=no`,{mode:"cors"});

        const wdata = await response.json();

        theWeather = wdata;
        // console.log(theWeather);
        const apicred = document.querySelector("footer > p:first-child");
        apicred.innerHTML = 'Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>';

        //setting the UI up temp/////////////////////////
        var temp = document.querySelector(".temp").childNodes;
        var tempy = document.querySelector(".temp");
        tempy.style.backgroundColor = "rgba(106, 177, 239, 0.688)";
        console.log(temp);
        temp[1].innerText = `${theWeather["location"]["name"].toString()}, ${theWeather["location"]["region"].toString()} (Condition: ${theWeather["current"]["condition"]["text"]})`;
        temp[3].innerText = `${theWeather["current"]["temp_f"].toString()}℉ `;
        temp[5].innerText = `Feels like ${theWeather["current"]["feelslike_f"].toString()}℉ `;
        ////////////////////////////////

        //setting up other content UI
        //rain///////////////////////////////
        const rain = document.querySelector(".rain");
        rain.style.backgroundColor = "rgba(106, 177, 239, 0.688)";
        rain.style.border = "solid rgba(106, 177, 239, 0.688) 1px"
        rain.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" fill="currentColor"><path d="M558-83q-11 5-23.5 1T517-97l-69-138q-5-11-1.5-23.5T461-276q11-5 23.5-1t17.5 15l69 138q5 11 1.5 23.5T558-83Zm240-1q-11 5-23.5 1T757-98l-69-138q-5-11-1.5-23.5T701-277q11-5 23.5-1t17.5 15l69 138q5 11 1.5 23.5T798-84Zm-480 0q-11 5-23.5 1.5T277-97l-69-138q-5-11-1-23.5t15-17.5q11-5 23.5-1.5T263-263l69 139q5 11 1 23t-15 17Zm-28-256q-87 0-148.5-61.5T80-550q0-79 56.5-141T277-759q32-56 84.5-88.5T480-880q91 0 152.5 57.5T708-680q79 4 125.5 53.5T880-510q0 70-49.5 120T710-340H290Z"/></svg>
        <h2></h2>`
        document.querySelector(".rain > h2").innerText = `${theWeather["current"]["precip_in"].toString()} inches`
        //////////////////////////////////////

        ///Humidity///
        const humid = document.querySelector(".humid");
        humid.style.backgroundColor = "rgba(106, 177, 239, 0.688)";
        humid.style.border = "solid rgba(106, 177, 239, 0.688) 1px"
        humid.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M580.118-250Q601-250 615.5-264.618q14.5-14.617 14.5-35.5Q630-321 615.382-335.5q-14.617-14.5-35.5-14.5Q559-350 544.5-335.382q-14.5 14.617-14.5 35.5Q530-279 544.618-264.5q14.617 14.5 35.5 14.5ZM378-256l246-246-42-42-246 246 42 42Zm2.118-194Q401-450 415.5-464.618q14.5-14.617 14.5-35.5Q430-521 415.382-535.5q-14.617-14.5-35.5-14.5Q359-550 344.5-535.382q-14.5 14.617-14.5 35.5Q330-479 344.618-464.5q14.617 14.5 35.5 14.5ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Z"/></svg>
        <h2></h2>`
        document.querySelector(".humid > h2").innerText = `${theWeather["current"]["humidity"].toString()} %`
        ///////////////
        const backcred = document.querySelector("footer > p:last-child");
        const footer = document.querySelector("footer");
        footer.style.color = "white";
        
        const video = document.querySelector("video");
        
        if (parseInt(theWeather["current"]["condition"]["code"]) === 1000)
        {
            video.src = "media/sunny.mp4";
            backcred.innerHTML = 'Video by <a href="https://pixabay.com/users/willos-418198/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=41341">Kiss Viliam</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=41341">Pixabay</a>';
        }
        else if(cloudy.includes(parseInt(theWeather["current"]["condition"]["code"])))
        {
            console.log("made it!");
            video.src = "media/cloudy.mp4";
            backcred.innerHTML = 'Video by <a href="https://pixabay.com/users/arielnunezg-10483215/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=46144">Ariel Núñez Guzmán</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=46144">Pixabay</a>'
        }
        else if(rain.includes(parseInt(theWeather["current"]["condition"]["code"])))
        {
            video.src = "media/rain.mp4";
            backcred.innerHTML='Video by <a href="https://pixabay.com/users/relaxing_guru-11517010/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=31450">&amp; Co.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=31450">Pixabay</a>';
        }
        else if(snow.includes(parseInt(theWeather["current"]["condition"]["code"])))
        {
            video.src = "media/cloudy.mp4";
            backcred.innerHTML='Video by <a href="https://pixabay.com/users/domianick-10005903/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=32082">Domianick</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=32082">Pixabay</a>';
        }
        else if(parseInt(theWeather["current"]["condition"]["code"]) === 1087)
        {
            video.src = "media/thunder.mpy";
            backcred.innerHTML = 'Video by <a href="https://pixabay.com/users/relaxing_guru-11517010/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=31342">&amp; Co.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=31342">Pixabay</a>';
        }
        else{
            backcred.innerHTML = 'Video by <a href="https://pixabay.com/users/zameenaasman172-20901772/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=69786">Zameen Aasman</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=69786">Pixabay';
        }
        footer.style.backgroundColor = "rgba(106, 177, 239, 1)";
        
    }
    catch{
        alert("City not Found! Make sure there are no spelling mistakes!");
    }


}
// getWeather();
var weatherbtn = document.querySelector(".searchBar > button:first-of-type");
const backcred = document.querySelector("footer > p:last-child");
backcred.innerHTML = 'Video by <a href="https://pixabay.com/users/zameenaasman172-20901772/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=69786">Zameen Aasman</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=69786">Pixabay';
// var input = document.querySelector(".searchBar > input").value;
const footer = document.querySelector("footer");
footer.style.backgroundColor = "rgba(106, 177, 239, 1)";
footer.style.color = "white";
const apicred = document.querySelector("footer > p:first-child");
apicred.innerHTML = 'Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>';
// console.log(input);
weatherbtn.addEventListener("click",getWeather);

//toggle funtion
const tog = document.querySelector(".searchBar > button:nth-of-type(2)");
tog.addEventListener("click",tempfunction);
function tempfunction()
{
    var temp = document.querySelector(".temp").childNodes;
    var tempy = document.querySelector(".temp");
    if (temp[3].innerText==='')
    {
        
        return;
    }
    
    if(temp[3].innerText.includes('℉'))
    {
        temp[3].innerText = `${theWeather["current"]["temp_c"].toString()}°C `;
        temp[5].innerText = `Feels like ${theWeather["current"]["feelslike_c"].toString()}°C `;
    }
    else
    {
        temp[3].innerText = `${theWeather["current"]["temp_f"].toString()}℉ `;
        temp[5].innerText = `Feels like ${theWeather["current"]["feelslike_f"].toString()}℉ `;
    }
    
}

