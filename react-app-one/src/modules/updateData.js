  // Update function that isn't working 
  function updateAreaManager(dataArray, searchTerm){
    const selectedKeys = dataArray.filter(item => item.areamanagerid === searchTerm) 		
      const circles = svg.selectAll('circle')
      circles
        .remove()
        .data(selectedKeys)
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
            .attr('r', '0.4px')
}

// function updateOne(){
//   const carparks = d3.selectAll('.carpark').remove()
//   const searchTerm = "363"
//   const selectedPoints = geoPointsArray.filter(item => item.areamanagerid == searchTerm)
//   drawCarParks(selectedPoints)
//   console.log(selectedPoints)
// }