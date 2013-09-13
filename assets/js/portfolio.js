function insertReply(content) {
	var output = '<table id="ttable">';
	output += "<thead><td>Bus</td><td>Expected in</td></thead>"
	for (bus in content["departures"]) {
		output += "<tr><td>"
		output += content["departures"][bus]["headsign"];
		output += "</td><td>";
		output += content["departures"][bus]["expected_mins"];
		output += "</td></tr>";
	}
	output += "</table>";
	document.getElementById('output').innerHTML = output;

}

function Mtd() {
	var script = document.createElement('script');
	script.src = 'http://developer.cumtd.com/api/v2.2/json/GetDeparturesByStop?key=f8b9365f049b446fa9decbf15c7bcc54&stop_id=gdwncb&callback=insertReply';
	document.body.appendChild(script);
}