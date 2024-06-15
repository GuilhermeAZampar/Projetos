module.exports = {
   posts : [{
        id:"gkpsmdokh",
        title:"Teste do Mural",
        description:"Descriçao Teste"
    },
    ],
    getALL(){
        return this.posts;
    },
    newPost(title,description){
        this.posts.push({id:generateID(),title,description});
    }
}

function generateID(){
    return Math.random().toString(36).substring(2,9)
}