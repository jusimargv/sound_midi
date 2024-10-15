// esse é um arquivo em modo restrito
"use strict";

// Função TocaSom
function tocaSom (seletorAudio) {

 const elemento = document.querySelector(seletorAudio);

 
  if ( elemento != null && elemento.localName === 'audio'){
      elemento.play();
  } else{
    console.log('Esse elemento não existe ou seletor inválido');
  }
    
};
// Função para localizar  o som
 const ListaDeTeclas = document.querySelectorAll('.tecla');
 
 
 //  Estrutura de repitição do Botões
for ( let contador = 0; contador < ListaDeTeclas.length; contador ++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //  template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    // Adiciona eventos de keydown e keyup a cada tecla
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space'){
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup =function(evento){
        if (evento.code === 'Enter' || evento.code === 'Space'){
        tecla.classList.remove('ativa');
        }
    }

   }
    



    
    

    
