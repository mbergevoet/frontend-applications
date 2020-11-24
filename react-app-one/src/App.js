import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Visualisation from './components/Visualisation';
import Controls from './components/Controls';
import {  cleanData }  from './modules/cleanData.js';
import './App.css';

function App() {

const [parkingData, setParkingData] = useState([])

useEffect(() => {
    fetch(`https://opendata.rdw.nl/resource/nsk3-v9n7.json?$limit=10`)
      .then(response => response.json())
      .then(json => cleanData(json, 'areageometryastext'))
      .then(json => setParkingData(json))
}, [])

  return (
    <div className="App">
      <Header />
      <div className="container">
        <p className="intro">
          {"The gouvernment and local councils of mayor cities in the Netherlands want cars to be less prominent in the city centres. This is an envourimental choice in terms of emmition and a chance to give pedestrians and cyclists more space in more crowded area's. For this reason it can be hard to find car parks and garages for motorists who want to visit the city center. It can be quite a challenge to find accessible and affordable parking space. That's why I decided to create a tool and visualisation to find a suitable parking space for motorists."}
        </p>
        {parkingData.map(parkingItem =>{
          return <pre>{JSON.stringify(parkingItem)}</pre>
        })}
        <Visualisation />
        <Controls />
      </div>
    </div>
  );
}

export default App;
