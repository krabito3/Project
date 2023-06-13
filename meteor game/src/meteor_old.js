
 game.meteor = {
    position: {
        x:0,
        y:0
    },

    speed: 3, 
    meteo: null,
       

  init: function () {
    this.meteo = document.createElement('div');
    this.meteo.classList.add("meteor");
   //this.respawn();
    document.body.appendChild(this.meteo);    

 },

 update: function() {
  this.position.y += this.speed ;
  this.meteo.style.left = this.position.x +'px';
  this.meteo.style.top = this.position.y + 'px';

  if(this.position.y > window.innerHeight ){
    this.position.y =-300; 
    this.position.x = randomInt(0,window.innerWidth-100)
  }



 },

 };

 function randomInt(min,max) {
  return Math.floor(Math.random()*(max - min + 1)+ min);
  this.speed =(Math.random() *5)+.5; 

 }