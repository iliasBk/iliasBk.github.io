
document.onmousemove = function(){
		
	var logoTitle = document.getElementsByClassName('logo_title');
	
	if(window.innerWidth > 820){
		var logoMoveX = event.clientX * 1.5 / window.innerWidth + 49.5 + '%';
		var logoMoveY = event.clientY * 1.5 / window.innerHeight + 49.5 + '%';
		
		for(var i=0; i<1; i++){
			logoTitle[i].style.left = logoMoveX;
			logoTitle[i].style.top = logoMoveY;
		}
	}
	
}


var apartTitle = document.getElementById('apartment_title');
var checkBox = document.getElementById('checkbox');
var checkBoxBack = document.getElementById('checkbox_back');
var apartment = document.getElementById('apartment');

checkBox.onchange = function(){
	apartment.disabled = !this.checked;
	if(this.checked){
		if(window.innerWidth <= 1400){
			apartment.focus();
			apartment.style.opacity = '1';
			apartTitle.style.color = 'rgba(240,219,219,1)';
			checkBoxBack.style.backgroundImage = "url('images/off.png')";
			document.getElementById('checkbox_bloc').style.border = '3px solid #D44646';
		}
		else{
		apartment.style.opacity = '1';
		apartTitle.style.color = 'rgba(240,219,219,1)';
		checkBoxBack.style.backgroundImage = "url('images/off.png')";
		document.getElementById('checkbox_bloc').style.border = '3px solid #D44646';
		}
	}else{
		apartment.style.opacity = '0.5';
		apartment.value = '';
		apartTitle.style.color = 'rgba(240,219,219,.5)';
		checkBoxBack.style.backgroundImage = "url('images/on.png')";
		document.getElementById('checkbox_bloc').style.border = '3px solid #569132';
	}
}



var commandeList = document.getElementById('commande_list_articles');
var articlesMarg = document.getElementById('articles_marg');
var i = 0;

commandeList.onclick = function() {
	i++;
	
	var div = document.createElement('div');
	div.className = 'article ' + i;

	var innerDiv = document.createElement('div');
	innerDiv.className = 'inner-article';
	div.appendChild(innerDiv);
	articlesMarg.appendChild(div);
	
	var article = document.getElementsByClassName('article')[0];
	articlesMarg.style.width = article.clientWidth * i;
}





























