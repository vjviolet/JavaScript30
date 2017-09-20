window.onload = init;

function init() {
	oDiv = document.getElementById("outer").getElementsByTagName("div");
	oBtn = document.getElementsByTagName("center")[0].getElementsByTagName("button");
	oBtn[0].onclick = function() {
		for(var i = 0; i<oDiv.length; i++) {
			oDiv[i].style.background = "red";
		}
	}
	
}
