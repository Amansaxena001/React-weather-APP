import React,{useState} from 'react';
import './App.css';
import {FaSearch} from 'react-icons/fa';
const api={
  key:"f3366ed13d654fe91305a22c869ca8db",
  base:"https://api.openweathermap.org/data/2.5/"

}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  


  const dateBuilder=(d)=>{
    let months=["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];


    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year =d.getFullYear();

    return `${day} ${date} ${month} ${year}`

  }


  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'App warm' : 'App') : 'App'}>
      <main>
        <div className="search-box">
          <input 
          
                type="text"
                className="search-bar"
                placeholder="Seach..."
                onChange={e=>setQuery(e.target.value)}//get value from search box
                value={query}//binding that value
                onKeyPress={search}
                
                
                />
                

                </div>


                {(typeof weather.main !="undefined")?(
                <div>
                  <div className="location-box">
                    <div className="location">{weather.name},{weather.sys.country}</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                  </div>
                      
                  <div className="weather-box">
                    <div className="temp">
                    {Math.round(weather.main.temp)}°C
                    </div>
                    <div className="weather">{weather.weather[0].main}</div>
                    



                  </div>
                  <span class="hscroll-line"></span>
                  
                </div>
                ):( 
                <div>
                  <div className="location-box">
                    <div className="location">Delhi,IN</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                  </div>
                      
                  <div className="weather-box">
                    <div className="temp">
                    23°C
                    </div>
                    <div className="weather">Thunderstorm</div>
                    
                 <span class="hscroll-line"></span>

            


                  </div>
                </div>)}
                
              
        

      </main>
            
      
    </div>
  );
}

export default App;
