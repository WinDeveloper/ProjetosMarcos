
var Galeria=[]
var PreGaleria=[]
const GaleriaImg = document.querySelectorAll('.ImageC')
const Visor = document.querySelector('#Visor')
const ImgVisor = document.querySelector('#ImgVisor')
const body = document.querySelector('body')

var imagemAtual=parseInt(0);

function TecladoEvento(event){
    /*Pegando a Lista das Imagens pre carregadas*/
    var imagensPregal = document.querySelectorAll(".PregalMarca")
    /*Escondendo a Imagem atual*/
    imagensPregal[imagemAtual].classList.add("hidden")
    /*Verificando o evento de key a incrementando ou decrementando variavel de posição*/
    if(event.key == "ArrowLeft"){
        if(imagemAtual>0)
            /*Forçando a trabalhar com um inteiro*/
            imagemAtual-=parseInt(1);
        else{
            imagemAtual=imagensPregal.length-1
        }
    }
    else if(event.key == "ArrowRight"){
        if(imagemAtual-(imagensPregal.length-1))
            imagemAtual+=parseInt(1);
        else
            imagemAtual=0;
        /*Caso não for nenhuma tecla de direção verificando se é uma tela de escape*/
    }else if(event.key == "Escape"){
        Visor.classList.add('hidden')
        Visor.classList.remove('flexBox')
        removeEventListener('keyup',TecladoEvento)
        PreGaleria=[]
        Visor.innerHTML=""    
    }
    /*Caso chegou ate aqui sera mostrada a imagem com indice imagemAtual */
    imagensPregal[imagemAtual].classList.remove("hidden")
}
/*
    Mostra a imagem cujo ocorreu o click
    ela é passada diretamente pela variavel event
*/
function Imageclicada(event){
    /* Coloquei so para esconder o body OBS: Não precisa esconder*/
    body.classList.add('esconder')
    /* Pegando Id da imagem atual para poder selecionar as demais*/
    imagemAtual = parseInt(event.target.dataset.index)
    /*Mostrando o visor*/
    Visor.classList.remove('hidden')
    /*Trocando display none para flex obs: coloquei flex so para remover o none*/
    Visor.classList.add('flexBox')
    /*Pre carregando todas as imagens*/
    for(let i=0;i<GaleriaImg.length;i++){
        PreGaleria.push(document.createElement('img'))
        PreGaleria[i].src = GaleriaImg[i].src
        PreGaleria[i].classList.add('hidden')
        /*Coloquei esta id so para identificar no DOM as imagens pre carregadas*/
        PreGaleria[i].classList.add('PregalMarca')
        /*A imagem cujo a seja a clicada sera visivel*/
        if((event.target.dataset.index-i)===0){
            PreGaleria[i].classList.remove('hidden')
        }
        /*Adicionando a imagem ao html*/ 
        Visor.appendChild(PreGaleria[i])
    }
    /*Apos todas as imagens serem criadas o evento é adicionado*/
    addEventListener('keyup',TecladoEvento)
}
/*
    Armazena na lista Galeria todas as url presentes no html
    cujo estaja dentro de uma img.
*/
function Push_Images(){
    for(let i=0;i<GaleriaImg.length;i++){
        console.log(GaleriaImg[i].src)
        GaleriaImg[i].dataset.index = i
        Galeria.push(GaleriaImg[i].src)
    }
}
/*
    adiciona um evento de vlick para todas as imagens presentes em GaleriaImg
    Onde GaleriaImg guarda os objetos do tipo IMG
*/
function AddEventAllimg(){
    for(let i=0;i<GaleriaImg.length;i++){
        GaleriaImg[i].addEventListener('click',Imageclicada)
    }
}
/*
    Desabilita o visor onde a imagem cujo foi clicada esta aberta.
*/
Visor.addEventListener('click',()=>{
    body.classList.remove('esconder')
    Visor.classList.add('hidden')
    Visor.classList.remove('flexBox')
    removeEventListener('keyup',TecladoEvento)
    PreGaleria=[]
    Visor.innerHTML=""
})

Push_Images()
AddEventAllimg()