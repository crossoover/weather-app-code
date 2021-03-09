import { FormWrap,Error,Statistics,UserForm,Stat,SearchInput,SearchButton,Heading } from "./styles";

const Form = props =>( 
     <FormWrap>
          {props.city &&
               <Statistics>
                    <Heading>Detailed forecast</Heading>
                    <Stat>Avarage temperature: <span>{props.temp}°C</span></Stat>
                    <Stat>Feels like: <span>{props.temp_feels_like}°C</span></Stat>
                    <Stat>Wind speed: <span>{props.windSpeed} km/h</span></Stat>
                    <Stat>Wind direction: <span>{props.windDirection}°</span></Stat>
                    <Stat>Atmosphere pressure: <span>{props.pressure} <b>millibars</b></span></Stat>
                    <Stat>Sunrise time: <span>{props.sunrise}</span></Stat>
                    <Stat>Sunset time: <span>{props.sunset}</span></Stat>
                    </Statistics>
          }
          <Error>{props.error}</Error>
          <UserForm className='form' onSubmit={props.weatherMethod}>
               <SearchInput type="text" name="city" placeholder='Enter city'/>
               <SearchButton>See weather</SearchButton>
          </UserForm> 
     </FormWrap>
     
)


export default Form
