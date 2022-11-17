window.addEventListener('load', function() {
    //canvas setup
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;


    class Player {
        constructor(game) {
            this.game = game;
            this.width = 50;
            this.height = 50;
            this.x = 225;
            this.y = 440;
            this.speedY = 0;
        }
        update() {
            this.y += this.speedY;
        }
        draw(context){
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    class Enemy {

    }

    class Projectile {
        
    }

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.player = new Player(this);
        }
        update(){
            this.player.update();
        }
        draw(context) {
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    function animate() {
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate()

    

    
})