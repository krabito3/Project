
game.meteor_factory = {
    list:[],
    init: function (nbMeteor) {
        for(let i=0; i<nbMeteor; i++){
           this.list[i] = new Meteor();
        }

    
   
    },


   
    update: function () {
   for(let i=0; i<this.list.length; i++){
        this.list[i].update();

    
   }


    }


};
