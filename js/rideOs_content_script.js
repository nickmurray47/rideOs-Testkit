let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let allData = [];

  // Variable for the visualization instance
  let stationMap;

  let subwayData;
  console.log("here2");

  // Start application by loading the data
  loadData();

  // let color = element.target.value;
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   chrome.tabs.executeScript(
  //       tabs[0].id,
  //       {code: 'document.body.style.backgroundColor = "' + color + '";'});
  // });
};



function loadData() {

	// Proxy url
	var proxy = 'http://michaeloppermann.com/proxy.php?format=xml&url=';
	//
	// // Hubway XML station feed
	var url = 'https://member.bluebikes.com/data/stations/bikeStations.xml';

	var proxyUrl = proxy+url;

	var path = "../mbta-lines.json"

	  // TO-DO: LOAD DATA
	$.getJSON(proxyUrl, function(jsonData){
   // Work with data;
	 // // Get array with stations (JSON objects)
	 var stationCount = jsonData.station.length;
	 allData = jsonData.station;

	 		$.getJSON(path, function(data) {
		 	// Work with data
			subwayData = data;
			createVis();
	 		});

	});

}

function createVis() {

  // TO-DO: INSTANTIATE VISUALIZATION
	stationMap = "routeChart";
	// Chicago coords
	var coords = [41.8781, 87.6298]
	var r = new RideMap(stationMap, allData, subwayData, coords);

}
