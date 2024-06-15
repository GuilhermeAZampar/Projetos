const FRONT = "card_front"
const BACK = "card_back"
const CARD="card"
const ICON = "icon"




StartGame();


function StartGame(){

InitializeCards(game.createcardfromtechs());
}


function InitializeCards(cards){
let gameboard =document.getElementById("gameboard");
gameboard.innerHTML=''
game.cards.forEach(card => {

    let cardelement=document.createElement('div');
    card.Element.id=card.id;
    cardelement.classList.add(CARD);
    cardelement.dataset.icon=card.icon;
    createcardcontent(card,cardelement);
    cardelement.addEventListener('click',flipcard)
    
})


}

function createcardcontent(card,cardelement){
    createcardface(FRONT,card,cardelement);
    createcardface(BACK,card,cardelement);
}








function createcardface(face,card,element){
    let cardelementface=document.createElement('div');
    cardelementface.classList.add(face);
    if(face===front){
        let iconelement=document.createElement('img');
        iconelement.classList.add(icon);
        iconelement.src="./assets/" + card.icon + ".png";
        cardelementface.appendChild(iconelement);

    }else{
        cardelementface.innerHTML="&lt/&gt"
    }
    element.appendChild(cardelementface);
}







function flipcard(){
    if(game.SetCard(this.id)){
    
        
        this.classList.add("flip");
    if(game.SecondCard){
        if(game.CheckMatch()){
        game.ClearCards();
        if(game.CheckGameOver){
            let gameOverLayer = document.getElementById("gameover");
            gameOverLayer.style.display='flex'
        }
    }else{
        setTimeout(( )=> {
            let FirstCardVeiew=document.getElementById(game.FirstCard.id);
            let SecondCardView=document.getElementById(game.SecondCard.id);
            FirstCardVeiew.classList.remove('flip');
            SecondCardView.classList.remove('flip');
            game.UnflipCards();
        },1000)
    };
    }

}
}


function restart(){
    game.ClearCards();
    StartGame();
    let gameOverLayer=document.getElementById("gameover");
    gameOverLayer.style.display='none';
}


