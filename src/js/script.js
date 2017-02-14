var altura = 0,
destino = 0,
velocidade = 10,
scroller = null;

function lazyScrollTo(elementId) {
	destino = document.getElementById(elementId).offsetTop;
	
	scroller = setTimeout(function(){
		lazyScrollTo(elementId);
	}, 1);

	altura = altura + velocidade;

	if (altura >= destino) {
		clearTimeout(scroller);
	}

	console.log(destino);

	window.scroll(0, altura);

}


