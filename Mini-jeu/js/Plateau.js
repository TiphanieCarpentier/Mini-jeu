class Plateau{
    constructor(src, canvas, x=0, y=0){
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.img = new Image();
        this.l = 800;
        this.h = 1000;
        this.img.onload = () => {
            this.pret = true;
            this.dessinePlateau();
        };
        this.img.src = src;
        this.music = new Audio();
        this.music.onload = () => {
            this.pret = true;
            this.musiquePlay();
        };
    }

    //Dessine le fond de jeu
    dessinePlateau(){
        this.canvas.drawImage(this.img, this.x, this.y, this.h, this.l);
    }
}

class Canvas{
    constructor(l,h){
        this.l = l;
        this.h = h;
        this.dessineCanvas();
    }

    //Dessine canvas dans le DOM
    dessineCanvas(){
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.l;
        this.canvas.height = this.h;
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
    }
}
