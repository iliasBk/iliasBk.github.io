

var pieceMarg = document.getElementsByClassName('piece_marg');
var pieceMargRatio;
var tab_page = document.getElementById('tab_page');
var tab_wrap = document.getElementById('tab_wrap');
var close_page = document.getElementById('close_tab_page');
var plus = 100;

for(var i=0; i < pieceMarg.length; i++){
	pieceMargRatio = (pieceMarg[i].clientWidth*4)/5;
	pieceMarg[i].style.height = pieceMargRatio;
	
	document.getElementById('piece_quantity').innerHTML = i+1;
	
//...Open Tab Page.....

	pieceMarg[i].onclick = function(){
		tab_wrap.style.display = 'block'; 
				var tabPageOpen = setInterval(function(){
					
					if(plus > 10){
						plus = plus - 5;
						tab_page.style.top = plus + '%';
						tab_wrap.style.opacity = (1/plus) * 10;
					}
					else{
						clearInterval(tabPageOpen);
					}
				},10);
	}
	
}

//...Close Tab Page.....

close_page.onclick = function(){
	var tabPageClose = setInterval(function(){
		if(plus < 100){
			plus = plus + 5;
			tab_page.style.top = plus + '%';
			tab_wrap.style.opacity = (1/plus) * 10;
		}
		else{
			clearInterval(tabPageClose);
		}
	},10);
	setTimeout(function(){
		tab_wrap.style.display = 'none';
	},90);
}

//...FontSize Close(X).....






//.....Tab Slider Adapter.....



var tab_slider = document.getElementById('tab_slider');
var tab_info = document.getElementById('tab_info');
var tab_buy = document.getElementById('tab_buy');
var inner_tab_slider = document.getElementById('inner_tab_slider');
var tab_slider_border = document.getElementById('tab_slider_border');
var slider = document.getElementById('slider');
var indicators = document.getElementById('indicators');
var indicator = document.getElementsByClassName('indicator');
var tabSliderRatio = (inner_tab_slider.clientHeight*8)/9;

inner_tab_slider.style.width = tabSliderRatio;

if(tab_page.clientHeight>tab_page.clientWidth){
	tab_slider.style.width = '100%';
	tab_slider.style.height = '50%';
	
	tab_info.style.width = '100%';
	tab_info.style.height = '30%';
	
	tab_buy.style.width = '100%';
	tab_buy.style.height = '20%';
	
	inner_tab_slider.style.width = '100%';
	inner_tab_slider.style.height = (inner_tab_slider.clientWidth*9)/14;
	
	if(inner_tab_slider.clientHeight > tab_slider.clientHeight){
		inner_tab_slider.style.height = tab_slider.clientHeight;
		inner_tab_slider.style.width = (inner_tab_slider.clientHeight*14)/9;
	}
	else{
		inner_tab_slider.style.marginTop = (tab_slider.clientHeight-	inner_tab_slider.clientHeight)/2;
	}
	
}
else{
	if(inner_tab_slider.clientWidth >= tab_slider.clientWidth){
		inner_tab_slider.style.width = tab_slider.clientWidth;
		inner_tab_slider.style.height = (tab_slider.clientWidth*10)/8;
		inner_tab_slider.style.marginTop = (tab_slider.clientHeight-inner_tab_slider.clientHeight)/3;
	}
}

tab_slider_border.style.width = tab_slider_border.clientWidth-(tab_slider_border.clientWidth % 10);

slider.style.width = tab_slider_border.clientWidth*3; 
slider.style.height = tab_slider_border.clientHeight; 


indicators.style.width = tab_slider_border.clientWidth;
indicators.style.marginTop = -indicators.clientHeight;

tab_wrap.style.display = 'none';


//.....Tab Slider Function....

slider.addEventListener('touchstart', spot);
slider.addEventListener('touchmove', spotMove);
var spotTouch;
var spotMove;
var count = 0;
var i = 0;

indicator[count].style.opacity = '1';

function spot(ev){
	spotTouch = ev.touches[0].clientX;
}
function spotMove(ev){
	
	spotMove = spotTouch - ev.touches[0].clientX;
	
	if(spotMove < 0){
		clearInterval(autoSlideTime);
		moveLeft();
		if(count == 2 && i == -200){
			count--;
			console.log(count);
		}
		else if(count==1 && i == -100){
			count--;
			console.log(count);
		}
	}
	else if(spotMove > 0){
		clearInterval(autoSlideTime);
		moveRight();
		if(count == 0 && i == 0){
			count++;
			console.log(count);
		}
		else if(count == 1 && i == -100){
			count++;
			console.log(count);
		}
	}
	
}

function moveLeft(){
	for(let i=0;i<indicator.length;i++){
		indicator[i].style.opacity = 0;
		indicator[count].style.opacity = 1;
	}
	var moveLeftInt = setInterval(function(){
		if(count == 1 && i < -100){
			i++;
			slider.style.marginLeft = i + '%';
		}
		else if(count == 0 && i < 0){
			i++;
			slider.style.marginLeft = i + '%';
		}
		else{
			clearInterval(moveLeftInt);
		}
	}, 10);
}
function moveRight(){
	for(let i=0;i<indicator.length;i++){
		indicator[i].style.opacity = 0;
		indicator[count].style.opacity = 1;
	}
	var moveRightInt = setInterval(function(){
		if(count == 1 && i > -100){
			i--;
			slider.style.marginLeft = i + '%';
		}
		else if(count == 2 && i > -200){
			i--;
			slider.style.marginLeft = i + '%';
		}
		else{
			clearInterval(moveRightInt);
		}
	}, 10);
}

var stop = 0;
var autoSlideTime = setInterval(autoSlide, 3000);
function autoSlide(){
	console.log('yes');
	if(stop == 0){
			if(count == 0 && i == 0){
				count++;
				console.log(count);
			}
			else if(count == 1 && i == -100){
				count++;
				console.log(count);
				stop = 1;
			}
			moveRight();
	}
	else if(stop == 1){
		if(count == 2 && i == -200){
			count--;
			console.log(count);
		}
		else if(count==1 && i == -100){
			count--;
			console.log(count);
			stop = 0;
		}
		moveLeft();
	}
	
}

//... Indicator Slide Control...

for(let i=0;i<indicator.length;i++){
	indicator[i].onclick = function(){
		clearInterval(autoSlideTime);
		var countIndicator = i;
		if(countIndicator > count){
			count = i;
			moveRight();
		}
		else if(countIndicator< count){
			count = i;
			moveLeft();
		}
		console.log(count);
	}
}


//........MENU_PANIER_Onscroll.......


	window.onscroll = function(){
		
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
				if (window.pageYOffset >= 200) {
					
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
					menu.style.marginTop = '100px';
					sidebarTwo.style.marginTop = '130px';
					panier.style.marginTop = '100px';
					
					
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













