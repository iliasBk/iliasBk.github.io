

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













