document.addEventListener( 'DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click',handleclick);
    })
})



function handleclick(event){
    let square = event.target;
    let postion= square.id;

   if(handlemove(postion)){
setTimeout(() => {


    alert("O jogo acabou o vencedor foi"+playerTime)
},10);





   }
    uptadesquares(postion);
}



function uptadesquares(postion){
    let square = document.getElementById(postion.toString());
    let symbol=board[postion];
    square.innerHTML= `<div class='${symbol}'></div>`
    
    }
    








