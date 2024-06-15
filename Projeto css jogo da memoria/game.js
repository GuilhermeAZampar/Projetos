let game ={

Lockmode:false,
FirstCard:null,
SecondCard:null,

SetCard: function( id) {
let card= this.card.filter(card=>card.id===id)[0];
if(card.flipped||this.Lockmode){
    return false;
}
if(!this.FirstCard){
    this.FirstCard=card;
    this.FirstCard.flipped=true;
    return true;

}else{
    this.SecondCard=card;
    this.SecondCard=true;
    this.Lockmode=true;
    return true;
}



},

CheckMatch:function(){
if(!this.FirstCard||this.SecondCard){
    return false
}
    return this.FirstCard.icon === this.SecondCard.icon
},

ClearCards:function(){
    this.FirstCard=null;
    this.SecondCard=null;
    this.Lockmode=false


},

UnflipCards(){
    this.FirstCard.flipped=false;
    this.SecondCard.flipped=false;
    this.ClearCards
},


CheckGameOver(){
    return this.cards.filter(card=>!card.flipped).length==0;
},








    techs :[
        'botstrap',
        'css',
        'electron',
        'firebase',
        'hmtml',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'
        ],

         cards : null,


         createcardfromtechs:function(){
             this.cards =[];
            this.techs.forEach((tech) => {
                this.cards.push(this.createpairfromtech(tech))
            });{
                this.cards= this.cards.flatMap(pair=>pair);
                this.ShuffleCards;
                return this.cards;

            }
            
            },
            
            createpairfromtech:function(tech){
            return[{
                id: this.createidwitchtech(tech),
                icon: tech,
                flipped:false,
            
            },{
                id: this.createidwitchtech(tech),
                icon: tech,
                flipped:false,
            
            
            }]
            },
            
            
            createidwitchtech: function(tech){
            return tech + parseInt(Math.random()*1000);
            
            },

            ShuffleCards: function(cards){
                let currentindex=this.cards.length;
                let randomindex=0;
                while(currentindex !==0){
                    randomindex=Math.floor(Math.random()*currentindex);
                    currentindex--;
                [this.cards[randomindex],this.cards[currentindex]]=[this.cards[currentindex],this.cards[randomindex]]
                
                }
                
                
                
                }
                



            





}