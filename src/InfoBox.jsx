
import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    let RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";

    let HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsWW1ZLcu0kh72AkuE17SvSoBlr0GyJG5bp1UKGfvDp0obADuNdaBJpk&s";

    let COLD_URL = "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
    return(
        <div className="cardContainer">
<Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
       image={info.humidity > 80 ? RAIN_URL : info.temperature < 15 ? COLD_URL : HOT_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;{info.humidity > 80 ? <ThunderstormIcon/> : info.temperature <15 ? <AcUnitIcon/> :<LightModeIcon/>}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>seaLevel : {info.seaLevel}</p>
         <p>temperature : {info.temperature}&deg;C</p>
        <p>maxTemp : {info.tempMax}&deg;C</p>
        <p>minTemp : {info.tempMin}&deg;C</p>
        <p>feelsLike : {info.feelsLike}</p>
        <p>humidity : {info.humidity}</p>
        <p>The Weather can describe as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>

      </CardContent>
    </Card>
        </div>
    )
}