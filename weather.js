console.log("hello jii");

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

async function showWeather() {
    let city = "goa";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    console.log("Weather data:->", data);  // Log the data as an object

    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;

    document.body.appendChild(newPara);
}
//showWeather();  // Don't forget to call the function to execute it

async function getCustomWeatherDetails() {

    try{
        let longitude = "84.8536";
        let latitude = "22.2604";  // Corrected spelling of 'latitude'

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

        if (!result.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await result.json();  // Corrected to call the json() function

        console.log(data);
    }
    catch(error){
        console.log("error found" , error);
    }
}

// Call the function to test it
getCustomWeatherDetails();

function switchTab(clickedTab){
    apiErrorContainer.classList.remove("active");

    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
    }

    if(!searchFrom.classList.contains("active")){
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchFrom.classList.add("active");
    }
    else{
        searchFrom.classList.remove("active");
        userInfoContainer.classList.remove("active");

        getFromSessionStorage();
    }
}
























// console.log("hello jii");

// let API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

// async function showWeather() {
//     let city = "goa";

//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("Weather data:->", data);  // Log the data as an object

//     } catch (error) {
//         console.error("Error fetching weather data:", error);  // Log any errors
//     }
// }

// // Call the function to show weather data
// showWeather();
