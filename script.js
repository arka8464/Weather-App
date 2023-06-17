async function fetchData() {
    console.log("hello world");
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '837ed3d20bmshab2041c55ff9238p1e4053jsncc29029d63a7',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();

        cloud_pct = result.cloud_pct,
            temp = result.temp,
            feels_like = result.feels_like,
            humidity = result.humidity,
            min_temp = result.min_temp,
            max_temp = result.max_temp,
            wind_speed = result.wind_speed,

            wind_degrees = result.wind_degrees,
            sunrise = result.sunrise,
            sunset = result.sunset
        // console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();
