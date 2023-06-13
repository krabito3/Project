
class Meteor {
    constructor() {
        this.position = {
            x: randomInt(0,window.innerWidth -82),
            y: randomInt(-200,-window.innerHeight -200),
        };

        this.speed = 3;

        this.meteo = document.createElement('div');
        this.meteo.classList.add("meteor");
        this.respawn();
        document.body.appendChild(this.meteo);
    }
    update() {
        this.position.y += this.speed;
        this.meteo.style.left = this.position.x + 'px';
        this.meteo.style.top = this.position.y + 'px';
        this.respawn();


    };

    respawn(){
        if (this.position.y > window.innerHeight) {
            this.position.y = -300;
            this.position.x = randomInt(0, window.innerWidth - 100)
            this.speed = randomInt(3, 9)
        }
    }



}


function randomInt(min, max) { // min and max included
    return Math.random() * (max - min + 1) + min;
}