const game ={
    version: 0.1,
    start: function(){
        this.player.init();
        this.score.init();
        this.meteor_factory.init(10);
       
    
        requestAnimationFrame(game.run);
    },

    run: function(){
        game.player.update();
        game.score.update();
        game.meteor_factory.update();
        requestAnimationFrame(game.run);
    }
}