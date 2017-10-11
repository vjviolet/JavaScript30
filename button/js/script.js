window.onload = init;
function init() {
	oBtn = document.getElementsByClassName('button')[0];
	oList = document.getElementsByClassName("list")[0];
	oBtn.addEventListener('click', function () {
		var oL = oList.style;
//		oL.display = (oL.display == 'none' ? 'block' : 'none');
		//这里如果开始为display: block，那么这里一定要判断oL.display == none;
		//或者用内联样式设置style = "display: block", 否则第一个是在取值，而不是在判断。
		oL.display = (oL.display == 'block' ? 'none' : 'block');
		
	})
}
 