function search() {
	window.open("https://www.baidu.com/s?wd=" + document.getElementById('input_search').value);
}

function GETsearch(key) {
	var e = key || window.event;
	if (e && e.keyCode == 13) {
		window.open("https://www.baidu.com/s?wd=" + document.getElementById('input_search').value);
	} else {

	}
}

function getTime() {
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	if (hour >= 0 && hour <= 9) hour = "0" + hour;
	if (minutes >= 0 && minutes <= 9) minutes = "0" + minutes;
	if (seconds >= 0 && seconds <= 9) seconds = "0" + seconds;
	document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds;
}

window.onload = setInterval("getTime()", 500);

