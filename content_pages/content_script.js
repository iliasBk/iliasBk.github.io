

document.onmousemove = function(){
		
	var logoTitle = document.getElementsByClassName('logo_title')[0];
	
	if(window.innerWidth > 820){
		var logoMoveX = event.clientX * 1.5 / window.innerWidth + 49.5 + '%';
		var logoMoveY = event.clientY * 1.5 / window.innerHeight + 49.5 + '%';
		
		logoTitle.style.left = logoMoveX;
		logoTitle.style.top = logoMoveY;
		
	}

	
}

for(var i=0; i<4; i++){
	var pieceMarg = document.getElementsByClassName('piece_marg')[i];
	var pieceMargRatio = (pieceMarg.clientWidth*4)/5;
	pieceMarg.style.height = pieceMargRatio;
	
	document.getElementById('piece_quantity').innerHTML = i + 1;
}
















