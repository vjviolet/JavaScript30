window.onload = init;

function init() {
	oDecide = document.getElementsByTagName("button")[0];
	oReset = document.getElementsByTagName("button")[1];
	oDiv = document.getElementById('result');
	oName = document.getElementById('name').getElementsByTagName('input')[0];
	oValue = document.getElementsByTagName('input')[1];
	//这里获取input的两种写法都可以，相比而言，第二种更简单，更适合用
	
	oDecide.addEventListener('click', function() {
		oDiv.style[oName.value] = oValue.value;
		//这里还可以将其拆出去，专门写一个函数
	})
	
	oReset.addEventListener('click', function() {
		oDiv.style = '';
		//这里还可以使用
		//oDiv.removeAttribute['style'];
	})
}
