


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
	var in_slider = document.getElementsByClassName('inner_slider')[0];
	var slider_border = document.getElementById('slider_border');
	
	if(window.innerWidth > 820){
		var slider_width = slider.clientWidth-(slider.clientWidth % 100);
		slider.style.width = slider_width;
		
		var content = document.getElementsByClassName('content')[0];
		slider_margin = (slider.clientWidth - content.clientWidth)/2;
		slider.style.marginLeft = -slider_margin;
		
		
		var sliderRatio = (slider.clientWidth * 9)/16;
		
		
		slider.style.height = sliderRatio;
		
		in_slider.style.height = sliderRatio;
		in_slider.style.width = slider.clientWidth * 3;
		
		slider_border.style.width = slider.clientWidth - 8; //..8 = borders
		slider_border.style.height = slider.clientHeight - 8; //..8 = borders
	}
	else{
		var slider_width = slider.clientWidth-(slider.clientWidth % 10);
		console.log(slider.clientWidth);
		console.log(slider_width);
		slider.style.borderRight = (slider.clientWidth % 10)/2;
		in_slider.style.width = (slider_width*3);
		in_slider.style.height = slider.clientHeight;
		slider_border.style.width = slider_width;
		slider_border.style.height = slider.clientHeight;
		slider_border.style.borderLeft = ((slider.clientWidth % 10)/2) + 'px solid #622424';
		slider_border.style.borderRight = ((slider.clientWidth % 10)/2) + 'px solid #622424';
	}
	
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
	if(window.innerWidth > 820){
		var iStep = 50;
	}
	else{
		var iStep = 10;
	}
	function moveRight(){
		let rightTime = setInterval(function(){
			if(class_counter == 1 && i > -slider_width){
				i -= iStep;
				in_slider.style.marginLeft = i;
			}
			if(class_counter == 1 && i == -slider_width){
				clearInterval(rightTime);
			}
			else if(class_counter == 2 && i > -(slider_width*2)){
				i -= iStep;
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
				i += iStep;
				in_slider.style.marginLeft = i;
			}
			if(class_counter == 0 && i == 0){
				clearInterval(leftTime);
			}
			else if(class_counter == 1 && i < -slider_width){
				i += iStep;
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
var topper = document.getElementsByClassName('topper');
	
window.onscroll = function() {
	if(window.innerWidth > window.innerHeight){
	if(window.innerWidth <= 500) {
		if(window.pageYOffset >= 1600){
			
				topper[2].style.opacity = (window.pageYOffset - 1600) / 200;
			
		}
		else if(window.pageYOffset >= 1400){
			
				topper[1].style.opacity = (window.pageYOffset - 1400) / 200;
			
		}
		else if(window.pageYOffset >= 1100){
			
				topper[0].style.opacity = (window.pageYOffset - 1100) / 200;
			
		}
		else if(window.pageYOffset >= 920){
			
				topTitle.style.opacity = (window.pageYOffset - 920) / 170;
				topTitle.style.marginLeft = 1;
				topTitle.style.transition = 'margin-left 1s ease-out';
			
		}
	}
	else{
		if(window.pageYOffset >= 1100){
				topper[0].style.opacity = (window.pageYOffset - 1100) / 180;
				topper[1].style.opacity = (window.pageYOffset - 1100) / 180;
				topper[2].style.opacity = (window.pageYOffset - 1100) / 180;
			
		}
		else if(window.pageYOffset >= 750){
			
				topTitle.style.opacity = (window.pageYOffset - 750) / 170;
				topTitle.style.marginLeft = 1;
				topTitle.style.transition = 'margin-left 1s ease-out';
			
		}
	}
	}
	
	//........MENU_PANIER_Onscroll.......
			var menu = document.getElementById('menu');
			var panier = document.getElementById('panier');
			var sidebarOne = document.getElementById('sidebar_one');
			var sidebarTwo = document.getElementById('sidebar_two');
	
			if (window.innerWidth > 820){
				sidebarOne.style.marginTop = '0px';
				menu.style.marginTop = '120px';
				sidebarTwo.style.marginTop = '0px';
				panier.style.marginTop = '120px';	
				
				sidebarOne.style.position = 'relative';
				sidebarTwo.style.position = 'relative';
				menu.style.position = 'fixed';
				panier.style.position = 'fixed';
			}
			else if (window.innerWidth <= 500) {
				if (window.pageYOffset >= 249) {
					
					sidebarOne.style.marginTop = '0px';
					menu.style.marginTop = '30px';
					sidebarTwo.style.marginTop = '0px';
					panier.style.marginTop = '30px';
					
					sidebarOne.style.position = 'fixed';
					sidebarTwo.style.position = 'fixed';
					menu.style.position = 'fixed';
					panier.style.position = 'fixed';
					
				}
				else{
					sidebarOne.style.marginTop = '130px';
					menu.style.marginTop = '150px';
					sidebarTwo.style.marginTop = '130px';
					panier.style.marginTop = '150px';
					
					
					sidebarOne.style.position = 'absolute';
					sidebarTwo.style.position = 'absolute';
					menu.style.position = 'absolute';
					panier.style.position = 'absolute';
				}
			}
			
			else{
				sidebarOne.style.marginTop = '0px';
				menu.style.marginTop = '0px';
				sidebarTwo.style.marginTop = '0px';
				panier.style.marginTop = '0px';	
				
				sidebarOne.style.position = 'fixed';
				sidebarTwo.style.position = 'fixed';
				menu.style.position = 'fixed';
				panier.style.position = 'fixed';
			}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	