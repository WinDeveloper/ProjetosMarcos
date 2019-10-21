
var Galeria=[]
var PreGaleria=[]
const GaleriaImg = document.querySelectorAll('.ImageC')
const Visor = document.querySelector('#Visor')
const ImgVisor = document.querySelector('#ImgVisor')
const body = document.querySelector('body')

var imagemAtual=parseInt(0);

function TecladoEvento(event){
    var imagensPregal = document.querySelectorAll(".PregalMarca") 
    imagensPregal[imagemAtual].classList.add("hidden")
    console.log(event.key)
    if(event.key == "ArrowLeft"){
        if(imagemAtual>0)
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
    }else if(event.key == "Escape"){
        Visor.classList.add('hidden')
        Visor.classList.remove('flexBox')
        removeEventListener('keyup',TecladoEvento)
        PreGaleria=[]
        Visor.innerHTML=""    
    }
    imagensPregal[imagemAtual].classList.remove("hidden")
}

function Imageclicada(event){
    body.classList.add('esconder')
    console.log(event.target.dataset.index)
    imagemAtual = parseInt(event.target.dataset.index)
    Visor.classList.remove('hidden')
    Visor.classList.add('flexBox')
    for(let i=0;i<GaleriaImg.length;i++){
        PreGaleria.push(document.createElement('img'))
        PreGaleria[i].src = GaleriaImg[i].src
        PreGaleria[i].classList.add('hidden')
        PreGaleria[i].classList.add('PregalMarca')
        if((event.target.dataset.index-i)===0){
            PreGaleria[i].classList.remove('hidden')
        } 
        Visor.appendChild(PreGaleria[i])
    }
    addEventListener('keyup',TecladoEvento)
}

function Push_Images(){
    for(let i=0;i<GaleriaImg.length;i++){
        console.log(GaleriaImg[i].src)
        GaleriaImg[i].dataset.index = i
        Galeria.push(GaleriaImg[i].src)
    }
}

function AddEventAllimg(){
    for(let i=0;i<GaleriaImg.length;i++){
        GaleriaImg[i].addEventListener('click',Imageclicada)
    }
}

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