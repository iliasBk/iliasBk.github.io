//...............LOGO ADAPTER.............


var logoTitleFix = document.getElementsByClassName('logo_title_fix')[0];
var logoTitle = document.getElementsByClassName('logo_title')[0];
var logo = document.getElementsByClassName('logo')[0];
var logoRatio = (logo.clientWidth*9.4)/16;

if(window.innerWidth >= 501){
	logo.style.height = logoRatio;
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