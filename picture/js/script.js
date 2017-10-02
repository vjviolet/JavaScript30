window.onload = init;
function init() {
	oLi = document.getElementsByTagName("li");
	
	for(let i=0; i<oLi.length; i++) {
		oLi[i].addEventListener('mouseover', function() {
//			this.style.opacity = 1;
			//这样写如果改变了好多个样式的话效率低下，所以可以使用一个类封装起来。
			this.className = 'current';
		})
		
		oLi[i].addEventListener('mouseout', function() {
//			this.style.opacity = 0.3;
			this.className = '';
		})
	}
}
