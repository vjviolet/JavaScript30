window.onload = function() {
	oDiv = document.getElementById("login");
	oMsg = document.getElementById("msg");
	
	oDiv.onmouseover = function() {
		oMsg.style.display = "block";
	}
	
	oDiv.onmouseout = function() {
		oMsg.style.display = "none";
	}
}
