window.onload = init;
function init() {
	var oDiv = document.getElementById("div");
	oDiv.onmouseover = function() {
		oDiv.className = "on";
	}
	oDiv.onmouseout = function() {
		oDiv.className = "";
		//oDiv.className = "out"
	}
}
