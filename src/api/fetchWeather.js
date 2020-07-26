import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "acf94e90f364beb832613420d7c403b2";

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: "imperial",
            APPID: API_KEY,
        },
    });

    return data;
};
