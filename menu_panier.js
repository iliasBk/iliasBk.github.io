
	
//...................MENU...................
	
		var menuButton = document.getElementById('menu_button');
		var menuCloseButton = document.getElementById('menu_close_button');
		var choiceOne = document.getElementById('choice_one');
		var choiceTwo = document.getElementById('choice_two');
		var choiceThree = document.getElementById('choice_three');
		var choiceFour = document.getElementById('choice_four');
		

		menuButton.onclick = function() {
			
			if (window.innerWidth >= 2000){
				menuButton.style.display = 'none';
				menuCloseButton.style.display = 'block';
					
				choiceOne.style.webkitAnimation = 'menuAppear 0.3s';
				choiceTwo.style.webkitAnimation = 'menuAppear 0.5s';
				choiceThree.style.webkitAnimation = 'menuAppear 0.7s';
				choiceFour.style.webkitAnimation = 'menuAppear 0.9s';
				
				choiceOne.style.mozAnimation = 'menuAppear 0.3s';
				choiceTwo.style.mozAnimation = 'menuAppear 0.5s';
				choiceThree.style.mozAnimation = 'menuAppear 0.7s';
				choiceFour.style.mozAnimation = 'menuAppear 0.9s';
							
				choiceOne.style.width = '390px';
				choiceTwo.style.width = '390px';
				choiceThree.style.width = '390px';
				choiceFour.style.width = '390px';				
			}
			else{
				menuCloseButton.style.display = 'block';
				menuButton.style.display = 'none';
					
				choiceOne.style.webkitAnimation = 'menuAppear 0.3s';
				choiceTwo.style.webkitAnimation = 'menuAppear 0.5s';
				choiceThree.style.webkitAnimation = 'menuAppear 0.7s';
				choiceFour.style.webkitAnimation = 'menuAppear 0.9s';
				
				choiceOne.style.mozAnimation = 'menuAppear 0.3s';
				choiceTwo.style.mozAnimation = 'menuAppear 0.5s';
				choiceThree.style.mozAnimation = 'menuAppear 0.7s';
				choiceFour.style.mozAnimation = 'menuAppear 0.9s';
							
				choiceOne.style.width = '260px';
				choiceTwo.style.width = '260px';
				choiceThree.style.width = '260px';
				choiceFour.style.width = '260px';
			}	
		}
		
		menuCloseButton.onclick = function() {
			menuButton.style.display = 'block';
			menuCloseButton.style.display = 'none';
			
			choiceOne.style.webkitAnimation = 'menuDisappear 0.3s';
			choiceTwo.style.webkitAnimation = 'menuDisappear 0.5s';
			choiceThree.style.webkitAnimation = 'menuDisappear 0.7s';
			choiceFour.style.webkitAnimation = 'menuDisappear 0.9s';	
			
			choiceOne.style.mozAnimation = 'menuDisappear 0.3s';
			choiceTwo.style.mozAnimation = 'menuDisappear 0.5s';
			choiceThree.style.mozAnimation = 'menuDisappear 0.7s';
			choiceFour.style.mozAnimation = 'menuDisappear 0.9s';
			
			choiceOne.style.width = '0px';
			choiceTwo.style.width = '0px';
			choiceThree.style.width = '0px';
			choiceFour.style.width = '0px';
			
		}		
		
		
//...................PANIER...................

		
		var panierButton = document.getElementById('panier_button');
		var panierCloseButton = document.getElementById('panier_close_button');
		var totArticle = document.getElementById('totArticle');
		var totMontant = document.getElementById('totMontant');
		var passCommande = document.getElementById('pass_commande');

		panierButton.onclick = function(){
			
			if(window.innerWidth >= 2000){
				panierButton.style.display = 'none';
				panierCloseButton.style.display = 'block';
				
				totArticle.style.webkitAnimation = 'PanierAppear 0.3s';
				totMontant.style.webkitAnimation = 'PanierAppear 0.5s';
				passCommande.style.webkitAnimation = 'PanierAppear 0.7s';
				
				totArticle.style.mozAnimation = 'PanierAppear 0.3s';
				totMontant.style.mozAnimation = 'PanierAppear 0.5s';
				passCommande.style.mozAnimation = 'PanierAppear 0.7s';
				
				totArticle.style.width = '390px';
				totMontant.style.width = '390px';
				passCommande.style.width = '390px';				
			}
			else{
				panierButton.style.display = 'none';
				panierCloseButton.style.display = 'block';
				
				totArticle.style.webkitAnimation = 'PanierAppear 0.3s';
				totMontant.style.webkitAnimation = 'PanierAppear 0.5s';
				passCommande.style.webkitAnimation = 'PanierAppear 0.7s';
				
				totArticle.style.mozAnimation = 'PanierAppear 0.3s';
				totMontant.style.mozAnimation = 'PanierAppear 0.5s';
				passCommande.style.mozAnimation = 'PanierAppear 0.7s';
				
				totArticle.style.width = '260px';
				totMontant.style.width = '260px';
				passCommande.style.width = '260px';
			}
		}
		
		panierCloseButton.onclick = function(){
			
			panierButton.style.display = 'block';
			panierCloseButton.style.display = 'none';
			
			totArticle.style.webkitAnimation = 'PanierDisappear 0.3s';
			totMontant.style.webkitAnimation = 'PanierDisappear 0.5s';
			passCommande.style.webkitAnimation = 'PanierDisappear 0.7s';
			
			totArticle.style.mozAnimation = 'PanierDisappear 0.3s';
			totMontant.style.mozAnimation = 'PanierDisappear 0.5s';
			passCommande.style.mozAnimation = 'PanierDisappear 0.7s';
			
			totArticle.style.width = '0px';
			totMontant.style.width = '0px';
			passCommande.style.width = '0px';
			
		}


		


























