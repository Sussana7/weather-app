// STEP 7
// uncomment the code below to import the hook
// import { useGetGroupedWeatherDataArray } from '../Utils/useGetGroupedWeatherDataArray';

// STEP 10
// uncomment the code below

// const weatherIcons = [
//   { icon: '/assets/images/icon-sunny.webp', label: 'Sunny', min: 23, max: 30 },
//   {
//     icon: '/assets/images/icon-partly-cloudy.webp',
//     label: 'Partly Cloudy',
//     min: 18,
//     max: 24,
//   },
//   {
//     icon: '/assets/images/icon-overcast.webp',
//     label: 'Overcast',
//     min: 15,
//     max: 20,
//   },
//   { icon: '/assets/images/icon-rain.webp', label: 'Rain', min: 12, max: 18 },
//   {
//     icon: '/assets/images/icon-drizzle.webp',
//     label: 'Drizzle',
//     min: 10,
//     max: 16,
//   },
//   { icon: '/assets/images/icon-storm.webp', label: 'Storm', min: 8, max: 15 },
//   { icon: '/assets/images/icon-snow.webp', label: 'Snow', min: -5, max: 5 },
//   { icon: '/assets/images/icon-fog.webp', label: 'Fog', min: 5, max: 12 },
// ];

// STEP 11

// uncomment the code below

// function getIconForTemperature(temp) {
//   return (
//     weatherIcons.find((item) => temp >= item.min && temp <= item.max)?.icon ||
//     '/assets/images/icon-sunny.webp'
//   );
// }

// STEP 5
// modify the component to accept prop
// like so
// function WeatherCard({weatherData}) {
function WeatherCard() {
  // STEP 6
  // uncomment the code below
  // const timeArray = weatherData.hourly.time;
  // const temperatureArray = weatherData.hourly.temperature_2m;

  // STEP 7
  // uncomment the code below

  // const groupedData = useGetGroupedWeatherDataArray(
  //   timeArray,
  //   temperatureArray
  // );

  // STEP 8
  // uncomment this and check the array to see how it looks in the console.
  // console.log(groupedData);

  // STEP 9
  // const today = groupedData[0];

  return (
    <div className='weather-display-container'>
      <div className='left-section'>
        <img
          src={
            window.innerWidth <= 480
              ? '/assets/images/bg-today-small.svg'
              : '/assets/images/bg-today-large.svg'
          }
          alt='today background'
        />
        <div className='metrics-grid'>
          <div className='metric-card'>
            <span className='metric-label'>Feels Like</span>
            <span className='metric-value'>18°</span>
          </div>
          <div className='metric-card'>
            <span className='metric-label'>Humidity</span>
            <span className='metric-value'>46%</span>
          </div>
          <div className='metric-card'>
            <span className='metric-label'>Wind</span>
            <span className='metric-value'>14 km/h</span>
          </div>
          <div className='metric-card'>
            <span className='metric-label'>Precipitation</span>
            <span className='metric-value'>0 mm</span>
          </div>
        </div>

        {/* STEP 12 */}
        {/* comment out this */}
        <div className='daily-forecast'>
          <h3 className='forecast-title'>Daily forecast</h3>
          <div className='daily-forecast-grid'>
            <div className='daily-forecast-card'>
              <span className='day'>Tue</span>
              <img src='/assets/images/icon-rain.webp' alt='rain icon' />
              <div className='temperature-range'>
                <span className='temp-high'>20°</span>
                <span className='temp-low'>14°</span>
              </div>
            </div>
            <div className='daily-forecast-card'>
              <span className='day'>Wed</span>
              <img src='/assets/images/icon-drizzle.webp' alt='drizzle icon' />
              <div className='temperature-range'>
                <span className='temp-high'>21°</span>
                <span className='temp-low'>15°</span>
              </div>
            </div>
            <div className='daily-forecast-card'>
              <span className='day'>Thu</span>
              <img src='/assets/images/icon-sunny.webp' alt='sunny icon' />
              <div className='temperature-range'>
                <span className='temp-high'>24°</span>
                <span className='temp-low'>14°</span>
              </div>
            </div>
            <div className='daily-forecast-card'>
              <span className='day'>Fri</span>
              <img
                src='/assets/images/icon-partly-cloudy.webp'
                alt='partly icon'
              />
              <div className='temperature-range'>
                <span className='temp-high'>25°</span>
                <span className='temp-low'>13°</span>
              </div>
            </div>
            <div className='daily-forecast-card'>
              <span className='day'>Sat</span>
              <img src='/assets/images/icon-storm.webp' alt='storm icon' />
              <div className='temperature-range'>
                <span className='temp-high'>21°</span>
                <span className='temp-low'>15°</span>
              </div>
            </div>
            <div className='daily-forecast-card'>
              <span className='day'>Sun</span>
              <img src='/assets/images/icon-snow.webp' alt='snow icon' />
              <div className='temperature-range'>
                <span className='temp-high'>25°</span>
                <span className='temp-low'>16°</span>
              </div>
            </div>
            <div className='daily-forecast-card'>
              <span className='day'>Mon</span>
              <img src='/assets/images/icon-fog.webp' alt='fog icon' />
              <div className='temperature-range'>
                <span className='temp-high'>24°</span>
                <span className='temp-low'>15°</span>
              </div>
            </div>
          </div>
        </div>
        {/* STEP 12 */}
        {/* // uncomment the code below */}
        {/* <div className='daily-forecast-grid'>
          {groupedData.map((day) => {
            // Use the highest temp for the icon, and show high/low
            const high = Math.round(day.highest);
            const low = Math.round(Math.min(...day.hourly.map((h) => h.temp)));
            const icon = getIconForTemperature(high);
            // Show short day name (e.g., Sun, Mon)
            const shortDay = day.day.split(',')[0].slice(0, 3); // "Sun"
            return (
              <div className='daily-forecast-card' key={day.day}>
                <span className='day'>{shortDay}</span>
                <img src={icon} alt='weather icon' />
                <div className='temperature-range'>
                  <span className='temp-high'>{high}°</span>
                  <span className='temp-low'>{low}°</span>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>

      <div className='right-section'>
        <div className='hourly-nav'>
          <h3 className='hourly-title'>Hourly forecast</h3>
          <div className='day-dropdown'></div>
        </div>


         {/* STEP 13 */}
        {/* comment the code below */}
        <div className='hourly-forecast-list'>
          <div className='hourly-item'>
            <img src='/assets/images/icon-overcast.webp' alt='overcast icon' />
            <span className='hour'>3 PM</span>
            <span className='temp'>20°</span>
          </div>
          <div className='hourly-item'>
            <img
              src='/assets/images/icon-partly-cloudy.webp'
              alt='partly cloudy'
            />
            <span className='hour'>4 PM</span>
            <span className='temp'>20°</span>
          </div>
          <div className='hourly-item'>
            <img src='/assets/images/icon-sunny.webp' alt='sunny icon' />
            <span className='hour'>5 PM</span>
            <span className='temp'>20°</span>
          </div>
          <div className='hourly-item'>
            <img src='/assets/images/icon-overcast.webp' alt='overcast icon' />
            <span className='hour'>6 PM</span>
            <span className='temp'>19°</span>
          </div>
          <div className='hourly-item'>
            <img src='/assets/images/icon-snow.webp' alt='snow icon' />
            <span className='hour'>7 PM</span>
            <span className='temp'>18°</span>
          </div>
          <div className='hourly-item'>
            <img src='/assets/images/icon-fog.webp' alt='fog icon' />
            <span className='hour'>8 PM</span>
            <span className='temp'>18°</span>
          </div>
          <div className='hourly-item'>
            <img src='/assets/images/icon-snow.webp' alt='snow icon' />
            <span className='hour'>9 PM</span>
            <span className='temp'>17°</span>
          </div>
          <div className='hourly-item'>
            <img src='/assets/images/icon-overcast.webp' alt='overcast icon' />
            <span className='hour'>10 PM</span>
            <span className='temp'>17°</span>
          </div>
        </div>

        {/* STEP 13 */}
        {/* uncomment the code below */}

        {/* <div className='hourly-forecast-list'>
          {today?.hourly?.map((h, idx) => (
            <div className='hourly-item' key={h.hour}>
              <img src={getIconForTemperature(h.temp)} alt='weather icon' />
              <span className='hour'>
                {h.hour.length === 5
                  ? new Date(`1970-01-01T${h.hour}:00`).toLocaleTimeString([], {
                      hour: 'numeric',
                      hour12: true,
                    })
                  : h.hour}
              </span>
              <span className='temp'>{Math.round(h.temp)}°</span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default WeatherCard;
