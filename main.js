function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = function (){
        tocaSom('#som_tecla_pom');
    }

    contador++;

    console.log(contador)
}
