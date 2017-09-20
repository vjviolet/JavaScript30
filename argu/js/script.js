window.onload = init;

function init() {
	var oInput = document.getElementById("container").getElementsByTagName("input");
	var oBtn = document.getElementById("container").getElementsByTagName("button");
	
	oBtn[0].onclick = function() {
		for(var i=0; i<oInput.length; i++) {
			alert(oInput[i].value);
		}
	}
}
