// function changeStyle(elem, attr, value)
//{
//	elem.style[attr] = value
//};
//window.onload = function ()
//{
//	var oBtn = document.getElementsByTagName("button");
//	var oDiv = document.getElementById("div1");
//	var oAtt = ["width","height","background","display","display"];
//	var oVal = ["200px","200px","red","none","block"];
//
//	for (var i = 0; i < oBtn.length; i++)
//	{
//		oBtn[i].index = i;
//		oBtn[i].onclick = function ()
//		{
//			this.index == oBtn.length - 1 && (oDiv.style.cssText = "");
//			changeStyle(oDiv, oAtt[this.index], oVal[this.index])
//		}	
//	}
//};

window.onload = init;

function changeStyle(elem, attr, val) {
	elem.style[attr] = val;
	//这里不能写成elem.style.attr, 如果如此写将不能将attr当做一个变量，而是当做一个属性。
}

function init() {
	var oBtn = document.getElementsByTagName('button');
	var oDiv = document.getElementById('div1');
	var oAtt = ['width', 'height', 'background-color', 'display', 'display'];
	var oVal = ['200px', '200px', 'red', 'none', 'block'];
	
	for(var i=0; i<oBtn.length; i++) {
		oBtn[i].index = i;
		//这里必须要多一步赋值，这里是因为JS闭包的问题，
		oBtn[i].onclick = function() {
			this.index == oBtn.length-1 && (oDiv.style.cssText='');
			//这里是一种短路的写法，指如果前面的结果为true，则执行后面的操作。
			//后面的cssText可以为元素赋值css样式。
			changeStyle(oDiv, oAtt[this.index], oVal[this.index]);
		}
	}
}
