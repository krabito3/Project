


game.player = {
    position: {
        x:window.innerWidth * 0.5,
        y:window.innerHeight * 0.5 
    },

    speed: {
        x:0,
        y:0
    },
    spaceship: null,
    init: function(){
        

        //1. display space craft
             this.spaceship = document.createElement('div');
            this.spaceship.id="player";
            document.body.appendChild(this.spaceship);


        
        //2. listen to keyboard for movements 
        document.addEventListener('keydown', (event)=>{
            if ((event.key ==='ArrowLeft') || (event.key==='ArrowRight') || (event.key==='ArrowDown') || (event.key==='ArrowUp')){
                switch(event.key){
                   
                    case 'ArrowUp':
                        this.move(0, -1);
                        break;
                    
                    case 'ArrowDown':
                        this.move(0, 1);
                        break;
                    
                    case 'ArrowLeft':
                        this.move(-1 ,0);
                        break;
                    
                    case 'ArrowRight':
                        this.move(1, 0);
                        break;    
                    
                }
            }
            

        });

        

        
        


        console.log('Player is ready !');
    },

    //update speed
    move: function(x, y) {
        this.speed.x +=x;
        this.speed.y +=y;
        
            
    },
    //update player gfx
    update: function(){


        //gravity
        this.speed.x -= this.speed.x*0.02;
        this.speed.y -= this.speed.y*0.02;


        // apply speed to position 
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // wall left limit

        if(this.position.x <0){
            this.position.x =0;
        }; 
        
        // wall up limit
        if(this.position.y <0){
           this.position.y =0; 
        };

        //wall right limit
        if(this.position.x + this.spaceship.clientWidth > window.innerWidth){
            this.position.x = window.innerWidth - this.spaceship.clientWidth;
            this.speed.x = 0;
        }

        //wall bottom limit
        if(this.position.y +this.spaceship
            .clientHeight > window.innerHeight){
            this.position.y = window.innerHeight - this.spaceship.clientHeight;
            this.speed.y = 0;
        }


        // move player div
        this.spaceship.style.left=this.position.x+ 'px';
        this.spaceship.style.top=this.position.y+ 'px';
        
        // ---- rotation
        this.spaceship.style.transform = `rotate(${this.speed.x * 2}deg)`;
        //this.sprite.style.transform = "rotate(" + (this.speed.x * 2) + "deg)";
    }

    
};
