


//................\/...SLIDER...\/...................

	//...........slider appear and deasapper on scroll ..............
	
	var slider = document.getElementById('slider');
	
	document.onscroll = function() {
		var opacityChange = (window.pageYOffset - 100) / 500;
		
		for(var i=0; i<2; i++){
			if(window.pageYOffset > 100) {
			slider.style.opacity = opacityChange;
			}
			else{slider.style.opacity = '0';}
		}
	}
	
	
	//.....................SLIDER ADAPTER......................
	
	var slider_width = slider.clientWidth-(slider.clientWidth % 100);
	slider.style.width = slider_width;
	
	var content = document.getElementsByClassName('content')[0];
	slider_margin = (slider.clientWidth - content.clientWidth)/2;
	slider.style.marginLeft = -slider_margin;
	
	var in_slider = document.getElementsByClassName('inner_slider')[0];
	var sliderRatio = (slider.clientWidth * 9)/16;
	
	
	slider.style.height = sliderRatio;
	
	in_slider.style.height = sliderRatio;
	in_slider.style.width = slider.clientWidth * 3;
	
	document.getElementById('slider_border').style.width = slider.clientWidth - 8; //..8 = borders
	document.getElementById('slider_border').style.height = slider.clientHeight - 8; //..8 = borders
	
	
	//.....................SLIDER FUNCTION......................
	
	var slide = document.getElementsByClassName('slide');
	var floatText = document.getElementsByClassName('floatText');
	var class_counter = 0;
	
	document.getElementById('buttonOne').onclick = function() {
		if(! class_counter == 0){
			class_counter--;
			moveLeft();
		}
		console.log(class_counter);
		clearInterval(autoSlide);
	}
	document.getElementById('buttonTwo').onclick = function(){
		if(class_counter < 2){
			class_counter++;
			moveRight();
		}
		console.log(class_counter);
		clearInterval(autoSlide);
	}
	var i = 0;
	function moveRight(){
		let rightTime = setInterval(function(){
			if(class_counter == 1 && i > -slider_width){
				i -= 50;
				in_slider.style.marginLeft = i;
			}
			if(class_counter == 1 && i == -slider_width){
				clearInterval(rightTime);
			}
			else if(class_counter == 2 && i > -(slider_width*2)){
				i -= 50;
				in_slider.style.marginLeft = i;
			}
			if(class_counter == 2 && i == -(slider_width*2)){
				clearInterval(rightTime);
			}
			console.log(i);
		}, 10);
	}
	function moveLeft(){
		let leftTime = setInterval(function(){
			if(class_counter == 0 && i < 0){
				i += 50;
				in_slider.style.marginLeft = i;
			}
			if(class_counter == 0 && i == 0){
				clearInterval(leftTime);
			}
			else if(class_counter == 1 && i < -slider_width){
				i += 50;
				in_slider.style.marginLeft = i;
			}
			if(class_counter == 1 && i == -slider_width){
				clearInterval(leftTime);
			}
			console.log(i);
		}, 10);
	}
	
	var autoSlide = setInterval(auto_slide, 3000);
	function auto_slide(){
		if(class_counter < 2){
			var autoRight = setTimeout(function(){
				class_counter++;
				moveRight();
			}, 2000);
		}
		if(class_counter == 2){
			clearTimeout(autoRight);
			if(class_counter > 0){
				let autoLeft = setTimeout(function(){
					class_counter--;
					moveLeft();
				}, 3000);
			}
			
		}
	console.log(autoSlide);
	}
	
	
	
//^^^^^^^^^^^^^^^..SLIDER..^^^^^^^^^^^^^^^^^^


//.............\/..ALL ONMOUSEMOVE..\/..................


	
document.onmousemove = function(){
	
//........MENU.............
	
	var move = document.getElementsByClassName('move');
		
	if(window.innerWidth >= 1100){
		var x = event.clientX * 40 / window.innerWidth + 30;
		var y = (event.clientY + window.pageYOffset) * 40 / window.innerHeight + 30;
		
		for(var i=0; i<3; i++){
			move[i].style.left = x + '%';
			move[i].style.top = y + '%';
			move[i].style.transform = 'translate(-'+x+',-'+y+')';
			move[i].style.textShadow = (-0.008*Math.pow(x,2)+-2*x+120)+'px '+(-0.007*Math.pow(y,2)+-0.5*y+50)+'px 10px rgba(0,0,0,.85)';
		}
		
			
		
	}
	
//........LOGO MOVE............
	
	var logoTitle = document.getElementsByClassName('logo_title');
	
	if(window.innerWidth > 820){
		var logoMoveX = event.clientX * 1 / window.innerWidth + 49.5 + '%';
		var logoMoveY = event.clientY * 1 / window.innerHeight + 49.5 + '%';
		
		for(var i=0; i<1; i++){
			logoTitle[i].style.left = logoMoveX;
			logoTitle[i].style.top = logoMoveY;
		}
	}
	
}



//............\/..TOPPER BLOCK..\/............


var topTitle = document.getElementsByClassName('top_title')[0];
var topperOne = document.getElementsByClassName('topper')[0];
var topperTwo = document.getElementsByClassName('topper')[1];
var topperThree = document.getElementsByClassName('topper')[2];
	
window.onscroll = function() {
	
	if(window.innerWidth <= 500) {
		if(window.pageYOffset >= 1600){
			for(var i=0; i<1; i++){
				topperThree.style.opacity = (window.pageYOffset - 1600) / 200;
			}
		}
		else if(window.pageYOffset >= 1400){
			for(var i=0; i<1; i++){
				topperTwo.style.opacity = (window.pageYOffset - 1400) / 200;
			}
		}
		else if(window.pageYOffset >= 1100){
			for(var i=0; i<3; i++){
				topperOne.style.opacity = (window.pageYOffset - 1100) / 200;
			}
		}
		else if(window.pageYOffset >= 920){
			for(var i=0; i<3; i++) {
				topTitle.style.opacity = (window.pageYOffset - 920) / 170;
				topTitle.style.marginLeft = 1;
				topTitle.style.transition = 'margin-left 1s ease-out';
			}
		}
	}
	else{
		if(window.pageYOffset >= 1000){
			for(var i=0; i<3; i++){
				topperOne.style.opacity = (window.pageYOffset - 1000) / 180;
				topperTwo.style.opacity = (window.pageYOffset - 1000) / 180;
				topperThree.style.opacity = (window.pageYOffset - 1000) / 180;
			}
		}
		else if(window.pageYOffset >= 750){
			for(var i=0; i<3; i++) {
				topTitle.style.opacity = (window.pageYOffset - 750) / 170;
				topTitle.style.marginLeft = 1;
				topTitle.style.transition = 'margin-left 1s ease-out';
			}
		}
	}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	