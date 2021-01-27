import React, { useEffect } from 'react'
import * as d3 from "d3";
import { json, geoPath, geoMercator} from 'd3'
import { feature } from 'topojson'
import { cleanData }  from '../modules/cleanData'
import { transformData }  from '../modules/transformData.js'
// { useState, useEffect, useRef}

function Map() {
  useEffect(() => {
    createMap()
  })
  return (
    
  <g></g> 
  )
}

function createMap(){
  // Start code Laurens Aarnoudse
  //Imports from D3 and function imports from other files

  //Global constants
  const endpointGeoPoints = 'https://opendata.rdw.nl/resource/nsk3-v9n7.json?$limit=6100';
  const endpointCities = 'https://gist.githubusercontent.com/mbergevoet/4481f67f9f218b91f7fe0a34c6407b4f/raw/9f8ddefb2a93335ea0e52a9a137ab3ecd5639535/cities.json';
  const colomnName = 'areageometryastext';
  const projection = geoMercator().scale(11500).center([5.49949, 52.79]) 
  // 52.19292985764814, 5.69949958205992
  const pathGenerator = geoPath().projection(projection)
  const svg = d3.select('svg')
  const g = svg.append('g')
  const resetButton = d3.select('.reset')
    
  //"Master" function that makes everything happen

  drawMap()

  getData(endpointGeoPoints)
    .then((parkingDataResponse) => {
      return parkingDataResponse.json()
    })
    .then((parkingData) => {
      const transformedArray = transformData(parkingData)
      const geoPointsArray = cleanData(transformedArray, colomnName)
      console.log(geoPointsArray)
      drawCarParks(geoPointsArray)
    })

  getData(endpointCities)
    .then((cityResponse) => {
      return cityResponse.json()
    })
    .then((cityData) => {
      const cityPointsArray = cityData
      drawCities(cityPointsArray)
      console.log(cityPointsArray)
    })
      
  // Most used areamanagerid are 363, 518, 2448
    		// changeButtonOne
        // 	.text('Area Manager 363')
    		// 	.on('click', updateAreaManager(geoPointsArray, 363))
    
    		// changeButtonTwo
        // 	.text('Area Manager 518')
    		// 	.on('click', updateAreaManager(geoPointsArray, 518))
    
    		// changeButtonThree
        // 	.text('Area Manager 2448')
    		// 	.on('click', updateAreaManager(geoPointsArray, 2448))

  //Fetches the data from the url
  function getData(url) {
    return fetch(url)
  }

  //Draws map
  function drawMap() {

    const zoom = d3.zoom()
    .scaleExtent([1, 8])
    .on('zoom',  (e) => {
        g.attr('transform', e.transform)
    });
    
  //Code adapted from sreen020
  // ------------------------------------------------------------------------------------
  //Gets topojson from url and draws the paths of the townships with it
    json('https://cartomap.github.io/nl/wgs84/gemeente_2020.topojson').then(
      (data) => {
        const townships = feature(data, data.objects.gemeente_2020)
        
        g
          .selectAll('path')
          .data(townships.features)
          .enter().append('path')
            .attr('d', pathGenerator)
          .append('title')
          .text((d) => `${d.properties.statnaam}`)
  // ------------------------------------------------------------------------------------

      svg.call(zoom)
    }
  )}

  //Draws cities
  function drawCities(cityData) {
          g
          .selectAll('g')
          .data(cityData)
          .enter().append('circle')
            .attr('cx', function(d){
              const long = d.longitude
              const lat = d.latitude
              return projection([+long, +lat])[0]  
            })
            .attr('cy', function(d){
              const long = d.longitude
              const lat = d.latitude
              return projection([+long, +lat])[1]
            })
            .attr('class', 'city')
            .attr('r', '1.8px')
  }
        
  // Plots the dots on the map for the 25 largest cities
        
  //Draws carparks
  function drawCarParks (geoData) {     
  //Sources: https://www.youtube.com/watch?v=MTR2T5VyxMc, https://www.youtube.com/watch?v=hrJ64jpYb0Aand and help from Gijs Laarman    
  //Plots the dots on the map using the long and lat from the cleaned dataset
        g
          .selectAll('g')
          .data(geoData)
          .enter().append('circle')
            .attr('cx', function(d){
              const long = d.longitude
              const lat = d.latitude
              return projection([+long, +lat])[0]  
            })
            .attr('cy', function(d){
              const long = d.longitude
              const lat = d.latitude
              return projection([+long, +lat])[1]
            })
            .attr('r', '0.7px')
  }

  
}

export default Map;
