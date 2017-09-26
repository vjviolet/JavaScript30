window.onload = init;

function init() {
	oBtn = document.getElementById("outer").getElementsByTagName("input")[0];
	oSel = document.getElementById("select");
	oLi = oSel.getElementsByTagName("ul")[0].getElementsByTagName("li");
	
	oBtn.onclick = function() {
		oSel.style.display = (oSel.style.display == "block" ? "none" : "block");
		//注意这里的写法，相当于
//		if(oSel.style.display == "block") {
//			oSel.style.display = "none";
//		} else {
//			oSel.style.display = "block"
//		}
	}
	
	for(var i = 0; i<oLi.length; i++) {
		oLi[i].onmouseover = function () {
			this.style.backgroundColor = "cornflowerblue";
			//这里this不能用oLi[i]来代替，因为i的值已经发生了改变，最好还是用this
		}
		oLi[i].onmouseout = function() {
			this.style.backgroundColor = "";
		}
		
		oLi[2].onclick = function() {
			oSel.style.display = "none";
		}
	}
	
	
}
