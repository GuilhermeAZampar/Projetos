let inputadultos = document.getElementById("adultos");
let inputcriancas = document.getElementById("criancas");
let inpuduracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");



function calcular(){
console.log("calculando....")

let inputadultos= inputadultos.value;
let inputcriancas=inputcriancas.value;
let inpuduracao=inpuduracao.value;

let qtdcarne = carnePP(duracao)*adultos +(carnePP(duracao)/2*criancas);
let qtdtotalcerveja = cervejaPP(duracao)*adultos;
let qtdtotalbebidas = bebida(duracao)*adultos+(bebidas(duracao)/2*criancas);
resultado.innerHTML =  `<p>${qtdcarne/1000}kg de carne</p>`;
resultado.innerHTML += `<p>${Math.ceil(qtdtotalcerveja /355)}Latas de cerverja</p>`;
resultado.innerHTML += `<p>${Math.ceil(qtdtotalbebidas/2000)}Pets de 2L de bebida</p>`;

 



}







function carnePP(duracao){
if(duracao>=6){
    return 650;
}else{
    return 400;
}


}


function cervejaPP(duracao){
    if(duracao>=6){
        return 1200;
    }else{
        return 2000;
    }
    
    
    }




    function bebidas(duracao){
        if(duracao>=6){
            return 1000;
        }else{
            return 1500;
        }
        
        
        }
        
    

