


//................\/...SLIDER...\/...................

	var slideWindow = document.getElementById('slider_window');
	var slideButtonOne = document.getElementById('slide_button_1');
	var slideButtonTwo = document.getElementById('slide_button_2');
	var slideButtonThree = document.getElementById('slide_button_3');
	var slideButtonFour = document.getElementById('slide_button_4');
	var slideButtonFake = document.getElementById('slide_button_fake');
	

	slideButtonOne.onclick = function() {
		document.getElementsByClassName('right_one')[0].style.animation='right_one 500ms';
		slideWindow.style.marginLeft = '0%';
		slideButtonTwo.style.display = 'block';
		slideButtonThree.style.display = 'none';
	}
	slideButtonTwo.onclick = function() {
		document.getElementsByClassName('left_one')[0].style.animation='left_one 500ms';
		slideWindow.style.marginLeft = '-100%';
		
		slideButtonTwo.style.display = 'none';
		slideButtonThree.style.display = 'block';
	}
	slideButtonThree.onclick = function() {
		document.getElementsByClassName('left_two')[0].style.animation='left_two 500ms';
		slideWindow.style.marginLeft = '-200%';
		
		slideButtonOne.style.display = 'none';
		slideButtonThree.style.display = 'none';
		slideButtonFour.style.display = 'block';
		slideButtonFake.style.display = 'block';
	}
	
	slideButtonFour.onclick = function(){
		document.getElementsByClassName('right_two')[0].style.animation='right_two 500ms';
		slideWindow.style.marginLeft = '-100%';
		slideButtonOne.classList.remove('slide_button_4');
		
		slideButtonFour.style.display = 'none';
		slideButtonFake.style.display = 'none';
		slideButtonThree.style.display = 'block';
		slideButtonOne.style.display = 'block';
	}
	
	
	
	//..............appear and deasapper on scroll ..............
	
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
	
	
		var sliderWindowOverfolw = document.getElementsByClassName('slider_window_overflow')[0];
		var slideButtons = document.getElementById('slide_buttons');
		var slideOne = document.getElementsByClassName('slide')[0];
		var slideTwo = document.getElementsByClassName('slide')[1];
		var slideThree = document.getElementsByClassName('slide')[2];
		

		var sliderRatio = (sliderWindowOverfolw.clientWidth*9)/18;
	
		if(window.innerWidth > 820){
			slider.style.height = sliderRatio;
			sliderWindowOverfolw.style.height = sliderRatio;
			slideButtons.style.height = sliderRatio;
			slideOne.style.height = sliderRatio;
			slideTwo.style.height = sliderRatio;
			slideThree.style.height = sliderRatio;
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
		if(window.pageYOffset >= 920){
			for(var i=0; i<3; i++) {
				topTitle.style.opacity = (window.pageYOffset - 920) / 170;
				topTitle.style.marginLeft = 1;
				topTitle.style.transition = 'margin-left 1s ease-out';
			}
		}
		if(window.pageYOffset >= 1100){
			for(var i=0; i<3; i++){
				topperOne.style.opacity = (window.pageYOffset - 1100) / 200;
			}
		}
		if(window.pageYOffset >= 1400){
			for(var i=0; i<1; i++){
				topperTwo.style.opacity = (window.pageYOffset - 1400) / 200;
			}
		}
		if(window.pageYOffset >= 1600){
			for(var i=0; i<1; i++){
				topperThree.style.opacity = (window.pageYOffset - 1600) / 200;
			}
		}
	}
	else{
		if(window.pageYOffset >= 750){
			for(var i=0; i<3; i++) {
				topTitle.style.opacity = (window.pageYOffset - 750) / 170;
				topTitle.style.marginLeft = 1;
				topTitle.style.transition = 'margin-left 1s ease-out';
			}
		}
		if(window.pageYOffset >= 1000){
			for(var i=0; i<3; i++){
				topperOne.style.opacity = (window.pageYOffset - 1000) / 180;
				topperTwo.style.opacity = (window.pageYOffset - 1000) / 180;
				topperThree.style.opacity = (window.pageYOffset - 1000) / 180;
			}
		}
	}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	