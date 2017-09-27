window.onload = init;
function init() {
	oInput = document.getElementsByTagName("input")[0];
	oBtn = document.getElementsByTagName("button")[0];
	oDiv = document.getElementById("result");
	//将非数字和，的字符用空白代替
	oInput.onkeyup = function() {
		this.value = this.value.replace(/[^(\d)|(,)]/,"");
	}
	
	oBtn.onclick = function() {
		//将输入的值以逗号为分隔符，转化为字符数组。
		var oInput = document.getElementsByTagName("input")[0].value.split(",");
		var sum = 0;
//		for(var val in oInput) {
//			//将字符型化为整形
//			sum += parseInt(oInput[val]);
//		}

		for(var i=0; i<oInput.length; i++) {
			sum += parseInt(oInput[i]);
		}
		oDiv.innerHTML = sum;
	}
}
