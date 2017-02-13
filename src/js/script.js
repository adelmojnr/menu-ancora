var altura = 0;
var destino = 0;
var velocidade = 10;
var scroller = null;

function scrollInicio(elementId) {
	destino = document.getElementById(elementId).offsetTop;
	
	scroller = setTimeout(function(){
		scrollInicio(elementId);
	}, 1);

	altura = altura + velocidade;

	if (altura >= destino) {
		clearTimeout(scroller);
	}

	//console.log(destino);
	window.scroll(0, altura);

}


