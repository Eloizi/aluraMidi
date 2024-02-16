function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;


//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    // console.log(instrumento);

    const idAudio = `#som_${instrumento}`; //tamplate string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(){
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.add('ativa');
    }
}


