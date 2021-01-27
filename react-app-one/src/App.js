import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Map from './components/Map';
// import Controls from './components/Controls';
// import {  cleanData }  from './modules/cleanData.js';
import './App.css';

function App() {

  const data = [
		{
			name: 'Amsterdam',
			id: 363,
		},
		{
			name: 'Rotterdam',
			id: 599,
		},
		{
			name: 'Den Haag',
			id: 518,
    },
    {
			name: 'Utrecht',
			id: 344,
		},
  ];
  
  const { buttons, setButtonName } = useState(data);

  let buttonsToRender;
  if (buttons) {
    buttonsToRender = buttons.map(button => {
      return <button key={button.id}>{button.name}</button>;
    });
  }


// const [parkingData, setParkingData] = useState([])

// useEffect(() => {
//     fetch(`https://opendata.rdw.nl/resource/nsk3-v9n7.json?$limit=10`)
//       .then(response => response.json())
//       .then(json => cleanData(json, 'areageometryastext'))
//       .then(json => setParkingData(json))
// }, [])
// onClick={}

  return (
    <div className="App">
      <Header />
      <div className="container">
        <p className="intro">
          {"The gouvernment and local councils of mayor cities in the Netherlands want cars to be less prominent in the city centres. This is an envourimental choice in terms of emmition and a chance to give pedestrians and cyclists more space in more crowded area's. For this reason it can be hard to find car parks and garages for motorists who want to visit the city center. It can be quite a challenge to find accessible and affordable parking space. That's why I decided to create a visualisation tool to find a suitable parking space for motorists."}
        </p>
        <div>
          {buttonsToRender}
        </div>
        {/* <Controls buttonNames={buttonNames} setButtonName={setButtonName}/> */}
        <div className="mapContainer">
          <svg>
            <Map className="map"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
