
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default  function SearchBox({updateWeatherInfo}){
    let [city , setCity] = useState("");
    let [error , setError] = useState(false);

    let API_URL = "http://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "b7cc33e5fd928021f24723dcf484c1b8";
    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city : city,
                feelsLike : jsonResponse.main.feels_like,
                groundLevel :jsonResponse.main.grnd_level,
                humidity : jsonResponse.main.humidity,
                pressure : jsonResponse.main.pressure,
                seaLevel : jsonResponse.main.sea_level,
                temperature : jsonResponse.main.temp,
                tempMax : jsonResponse.main.temp_max,
                tempMin : jsonResponse.main.temp_min,
                weather : jsonResponse.weather[0].description
                }
                console.log(result);
                return result;
        }
        catch(err){
            throw err;
        }
       
    };

   

let handelChange = (event) =>{
    setCity(event.target.value);
}

let handleSubmit = async (event)=>{
   try{
    event.preventDefault();
    console.log(city);
    let newInfo = await getWeatherInfo();
    if(newInfo){
        updateWeatherInfo(newInfo);
        setCity("");
    }
    
   
   }
   catch(err){
    setError(true);
   }
}

    
    return (
       
        <div className="searchBox">
            <form onSubmit={handleSubmit} >
            <TextField 
            id="city" 
            label="City Name" 
            size="small"
            value={city}
            variant="outlined"
            onChange={handelChange} 
            required
            className="cityInput"
            />
            <br />
            <br />
            <Button 
            variant="contained" 
            type='submit'
            endIcon={<SendIcon />}
            >
        Send
      </Button>
      <br />
      <br />
      {error && <p style={{color : "red"}}>No such place exist!</p>}
            </form>
            
        </div>
        
    )
}