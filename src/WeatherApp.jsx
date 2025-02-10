import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function Weather(){
    let [weatherInfo , setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike : 17,
        groundLevel : 1000,
        humidity : 23,
        pressure : 1050,
        seaLevel : 2000,
        temperature : 25.08,
        tempMax : 25.08,
        tempMin : 24,
        weather : "Haze"
}) 

    let updateWeatherInfo = (res)=>{
        setWeatherInfo(res);
    }

    return(
        <div>
 <h3>Weather App</h3>
 <SearchBox updateWeatherInfo={updateWeatherInfo} />
 <InfoBox info={weatherInfo}/>
        </div>
    )
}