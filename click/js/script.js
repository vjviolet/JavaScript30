window.onload = init;

function init() {
	oBtn = document.getElementsByTagName("input")[0];
	oWin = document.getElementById("win");
	oShow = document.getElementById("show");
	oTitle = document.getElementsByTagName("h2")[0];
	
	oBtn.addEventListener("click", function() {
		oWin.style.display = "block";
		oShow.style.display = "block";
	});
	
	oTitle.addEventListener("click", function() {
		oWin.style.display = "none";
		oShow.style.display = "none";
	});
}
