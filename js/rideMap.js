
/*
 *  StationMap - Object constructor function
 *  @param _parentElement   -- HTML element in which to draw the visualization
 *  @param _data            -- Array with all stations of the bike-sharing network
 */

RideMap = function(_parentElement, _data, _subway, _mapPosition) {

	this.parentElement = _parentElement;
	this.data = _data;
	this.mapPosition = _mapPosition;
	this.subway = _subway;

	this.initVis();
}

/*
 *  Initialize station map
 */

RideMap.prototype.initVis = function() {
	var vis = this;
  console.log(vis.data);
	vis.wrangleData();
}

/*
 *  Data wrangling
 */

RideMap.prototype.wrangleData = function() {
	var vis = this;

	// Currently no data wrangling/filtering needed
	// vis.displayData = vis.data;

	// Update the visualization
	vis.updateVis();

}

/*
 *  The drawing function
 */

RideMap.prototype.updateVis = function() {
	var vis = this;

	var map = L.map("routeChart").setView(vis.mapPosition, 14);

	// var map = L.map('ny-map').setView([40.712784, -74.005941], 13);

  console.log("here next");

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	//black and white
	// L.tileLayer('https://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	// attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	// });
  //
	// var marker = L.marker([42.378744, -71.117303]).addTo(map);
  //
	// // Add empty layer groups for the markers / map objects
	//  	var bikeStations = L.layerGroup().addTo(map);
  //
	// //loop thru data
	// for(var i = 0; i < vis.data.length; i++){
	// 	// Create marker
	// 	var station = vis.data[i]
	// 	var coords = [station.lat, station.long];
	// 	var popupContent = "<strong>" + station.name+"</strong><br/>";
	// 	popupContent += "Available Docks: " + station.nbEmptyDocks +"<br/>";
	// 	popupContent += "Available Bikes: " + station.nbBikes +"<br/>";
	// 	var marker = L.marker(coords).bindPopup(popupContent).addTo(map);
	// 	bikeStations.addLayer(marker);
  //
	// }
  //
	// function styleLine(feature) {
	// 	switch (feature.properties.LINE) {
	// 			case 'GREEN':  return { color: "green" };
	// 			case 'RED':      return { color: "red" };
	// 			case 'SILVER':         return { color: "#A9A9A9" };
	// 			case 'ORANGE':       return { color: "orange" };
	// 			case 'BLUE':          return { color: "blue" };
	// 	}
	// }
  //
	// for(var i = 0; i<vis.subway.features.length; i++){
	// 		var geojsonFeature = vis.subway.features[i];
  //
	// 		var lines = L.geoJson(geojsonFeature, {
  // 			style: styleLine,
  // 			weight: 5,
  // 			fillOpacity: 0.7
	// 			}).addTo(map);
	// 		L.geoJson().addTo(map);
	// }

}
