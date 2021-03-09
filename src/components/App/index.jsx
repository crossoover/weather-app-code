import React from 'react';
import Weather from "../Weather";
import Form from "../Form";
import {Wrapper, GlobalStyle} from './styles';


const API_KEY  = '896e1b42eb7ebf54ff2cd1973c2ebab1';
class App extends React.Component{

     state = {
          dayOfTheWeek: undefined,
          localDate: undefined,
          temp: undefined,
          temp_feels_like: undefined,
          city: undefined,
          description: undefined,
          country: undefined,
          sunrise: undefined,
          sunset: undefined,
          windSpeed: undefined,
          windDirection: undefined,
          pressure: undefined,
          error: undefined 
     }

     errorEvent = () =>{
          this.setState({
               dayOfTheWeek: undefined,
               localDate: undefined,
               temp: undefined,
               temp_feels_like: undefined,
               city: undefined,
               description: undefined,
               country: undefined,
               sunrise: undefined,
               sunset: undefined,
               windSpeed: undefined,
               windDirection: undefined,
               pressure: undefined,
               error: 'Some error is occured, please try again. You can use English, German, Ukrainian and Russian languages.'
          });
     }

     dayFunc = (num)=>{
          let weekday = new Array(7);
          weekday[0] = "Sunday";
          weekday[1] = "Monday";
          weekday[2] = "Tuesday";
          weekday[3] = "Wednesday";
          weekday[4] = "Thursday";
          weekday[5] = "Friday";
          weekday[6] = "Saturday";
          
          return weekday[num];
     }

     getWeather = async(evt) =>{
          evt.preventDefault();
          const city = evt.target.elements.city.value;
          
          if(city){
               try{
                    const api_url = await 
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
                    const data = await api_url.json();
                    console.log(data);

                    let sunsetInSec = data.sys.sunset;
                    let date = new Date(sunsetInSec * 1000);
                    let timeSunset = date.toLocaleTimeString();

                    let sunriseInSec = data.sys.sunrise;
                    let date2 = new Date(sunriseInSec * 1000);
                    let timeSunrise =  date2.toLocaleTimeString();

                    const someDate = new Date().toLocaleDateString();
                    const day = new Date().getDay();
                    
                    let temperature = Math.floor(data.main.temp);
          
                    let feels = Math.floor(data.main.feels_like);
          

                    this.setState({
                         dayOfTheWeek: this.dayFunc(day),
                         localDate: someDate,
                         temp: temperature,
                         temp_feels_like:feels,
                         city: data.name,
                         description: data.weather[0].description,
                         country: data.sys.country,
                         sunrise: timeSunrise,
                         sunset: timeSunset,
                         windSpeed: data.wind.speed,
                         windDirection: data.wind.deg,
                         pressure: data.main.pressure,
                         error: undefined
                    })
               }catch{
                    this.errorEvent();
               }
          } 
          else{
               this.errorEvent();
          }
     }

     render(){
          return(
               <>
                    <GlobalStyle/>
                    <Wrapper>
                         <Weather  {...this.state}/>
                         <Form weatherMethod={this.getWeather} {...this.state}/>
                    </Wrapper>
               </>
          );
     }
} 


export default App
