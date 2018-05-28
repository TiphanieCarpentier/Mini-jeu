class Ennemi{
    constructor(src, canvas, x, y){
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.img = new Image();
        this.img.onload = () => {
            this.pret = true;
            this.positionne();
            this.dessineEnnemi();
        };
        this.img.src = src;
    }

    //Dessine un ennemi (renard)
    dessineEnnemi(x,y){
        this.canvas.drawImage(this.img, this.x, this.y);
    }

    //Obtenir une position aléatoire
    positionne() {
        this.x = Math.floor(Math.random() * (800-32));
        this.y = Math.floor(Math.random() * (580-24));
    }
}
