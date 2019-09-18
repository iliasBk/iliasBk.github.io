//...............LOGO ADAPTER.............


var logoTitleFix = document.getElementsByClassName('logo_title_fix')[0];
var logoTitle = document.getElementsByClassName('logo_title')[0];
var logo = document.getElementsByClassName('logo')[0];
var in_header = document.getElementsByClassName('inner-header')[0];

if(window.innerWidth > window.innerHeight){
if(window.innerWidth > 500){
	if(window.innerWidth > 820){
		logo.style.height = in_header.clientHeight/1.2;
		logoRatio = logoRatio;
	}
	else{
		logo.style.height = in_header.clientHeight;	
	}
	var logoRatio = (logo.clientHeight*16)/9.4;
	logo.style.width = logoRatio;
	logoTitleFix.style.width = logo.clientWidth;
	logoTitleFix.style.height = logo.clientHeight;
	logoTitle.style.width = logo.clientWidth - 40 + 'px';
	logoTitle.style.height = logo.clientHeight - 40 + 'px';
}
else{
	logo.style.height = logoRatio;
	logoTitleFix.style.width = logo.clientWidth;
	logoTitleFix.style.height = logo.clientHeight;
	logoTitle.style.width = logo.clientWidth;
	logoTitle.style.height = logo.clientHeight - 40 + 'px';
	logoTitle.style.marginTop = '-20px';
}
}
else{
	logo.style.width = 100 + '%';
	logo.style.height = 100 + '%';
	logo.style.background = "url('images/baksellbuk_logo_820.png')";
	logo.style.backgroundSize = "contain";
	logo.style.backgroundRepeat = "no-repeat";
}










