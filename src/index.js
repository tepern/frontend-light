import './styles.scss';

const title = 'Test';

function htmlSkils(){
	var canvas = document.getElementById("html_skil");
	var context = canvas.getContext("2d");
	context.arc(80,80,70,-1.5,4.5);
	context.lineWidth = 2;
	context.strokeStyle = "#4c5eab";
	context.font="48px Open Sans";
	context.fillStyle="#383838";
	context.fillText("95%",40,95);
	context.stroke();
	
};
function cssSkils(){
	var canvas = document.getElementById("css_skil");
	var context = canvas.getContext("2d");
	context.arc(80,80,70,-1.5,4);
	context.lineWidth = 2;
	context.strokeStyle = "#4c5eab";
	context.font="48px Open Sans";
	context.fillStyle="#383838";
	context.fillText("87%",40,95);
	context.stroke();
	
};
function jsSkils(){
	var canvas = document.getElementById("js_skil");
	var context = canvas.getContext("2d");
	context.arc(80,80,70,-1,3.4);
	context.lineWidth = 2;
	context.strokeStyle = "#4c5eab";
	context.font="48px Open Sans";
	context.fillStyle="#383838";
	context.fillText("70%",40,95);
	context.stroke();
	
};
function phpSkils(){
	var canvas = document.getElementById("php_skil");
	var context = canvas.getContext("2d");
	context.arc(80,80,70,-1,2.8);
	context.lineWidth = 2;
	context.strokeStyle = "#4c5eab";
	context.font="48px Open Sans";
	context.fillStyle="#383838";
	context.fillText("60%",40,95);
	context.stroke();
};
window.onload = function skils(){
	htmlSkils();
	cssSkils();
	jsSkils();
	phpSkils();
};