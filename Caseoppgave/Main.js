"use strict";


/* 
Verdiene du skal hente ut er:
- Weather (navnet)
- From
- Description
- Wind speed
- Temperature
*/

let url = "https://api.openweathermap.org/data/2.5/forecast?lat=60.3913&lon=5.3221&appid=b5749e8dbc962119cdcddf66a3040c69&units=metric";


document.querySelector("#getAPI").addEventListener('click', getAPI);



function getAPI(){
  fetch(url)
  .then(res => res.json())
  .then(data => {
    let output = `<h3>${data.city.name}</h3>`;
    output +=
    `<tr>
    <th>Index</th>
    <th>Weather</th>
    <th>From</th>
    <th>Description</th>
    <th>Wind Speed</th>
    <th>Temperature</th>
    </tr>`;
    
    console.log(data);

    for (let i = 0; i < data.list.length; i++){
      output += `
      <tr>
        <td>${i}</td>
        <td>${data.list[i].weather}</td>
        <td>${data.list[i].wind.deg}</td>
        <td>${data.list[i].weather.description}</td>
        <td>${data.list[i].weather.speed}</td>
        <td>${data.list[i].main.temp}</td>
      </tr>
      `;
    }
    document.querySelector(".table").innerHTML = output;
  });
}

// function getAPI(){
//   fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     let output = `<h3>${data.city.name}</h3>`;
//     data.forEach(function(user){
//       output += `
//         <ul>
//           <li>Weather: ${user.weather}</li>
//           <li>From: ${user.wind.deg}</li>
//           <li>Description: ${user.weather.description}</li>
//           <li>Wind Speed: ${user.weather.speed}</li>
//           <li>Temperature: ${user.main.temp}</li>
//         </ul>
//       `;
//     });
//     document.querySelector(".table").innerHTML = output;
//   })
// }
