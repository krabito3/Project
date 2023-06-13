
game.score = {
    score: 0,
    spaceship: null,
    objectif: null,
    init: function () {
        
    this.objectif = document.createElement('div');
    this.objectif.id="score";
    document.body.appendChild(this.objectif);

    },


    // update score
    update: function () {
    //this.objectif.innerHTML = this.score;


    // Add score    
   let points = Math.round((window.innerHeight - game.player.position.y -game.player.spaceship.clientHeight)*0.1);
   this.score += points;
   this.objectif.innerText = new Intl.NumberFormat().format(this.score);

  





    }


};
