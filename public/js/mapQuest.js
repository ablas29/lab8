function initMap() {
	// add your code here
	L.mapquest.key = 'NPIDA3rVuy73GkuDDGYJdaXl1s2QMdVd';
	var map = L.mapquest.map('map', {
		center: [32.87860592839724, -117.23591455647711],
		layers: L.mapquest.tileLayer('map'),
		zoom:12,
		zoomControl: false
	});

	L.marker([32.87860592839724, -117.23591455647711]).addTo(map);
}