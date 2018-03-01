function initMap() {
	// add your code here
	var ucsd_ltlng = {lat: 32.880, lng:-117.236};
	var ssc = {lat:32.879012, lng:-117.235844};

	//create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		postion: ucsd_ltlng,
		map: map,
		title: "UCSD"
	});

}