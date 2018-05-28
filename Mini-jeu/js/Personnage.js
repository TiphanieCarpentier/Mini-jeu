class Personnage{
    constructor(src, canvas, x, y){
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.img = new Image();
        this.img.onload = () => {
            this.pret = true;
            this.positionne();
            this.dessinePersonnage();
        };
        this.img.src = src;
        this.direction = {
            haut : false,
            droite : false,
            bas : false,
            gauche : false
        };
        this.vitesse = 5;
        this.dirige();
    }

    //Dessine un personnage gentil
    dessinePersonnage(x,y){
        this.canvas.drawImage(this.img, this.x, this.y);
    }

    //Obtient une position aléatoire
    positionne() {
        this.x = Math.ceil(Math.random() * (800-32));
	    this.y = Math.ceil(Math.random() * (580-32));
	}

    //Définit la direction du déplacement
    dirige(){
        //Ecouteur touche pour déplacement lapin 
        //Booléen pour déplacements en diagonale
        let perso = this;
        window.addEventListener("keydown", function(e) {
            if (e.keyCode == 37){
                perso.direction.gauche = true;
            }
            if (e.keyCode == 38) {//haut
                perso.direction.haut = true;
            }
            if (e.keyCode == 39) {//droite
                perso.direction.droite = true;
            }
            if (e.keyCode == 40) {//bas
                perso.direction.bas = true;
            }
        }, false);
        window.addEventListener("keyup", function(e) { 
            if (e.keyCode == 37){
                perso.direction.gauche = false;
            }
            if (e.keyCode == 38) {//haut
                perso.direction.haut = false;
            }
            if (e.keyCode == 39) {//droite
                perso.direction.droite = false;
            }
            if (e.keyCode == 40) {//bas
                perso.direction.bas = false;
            }
        }, false); 
    }

    //Déplace le lapin
    bouge(){
        //Applique la vitesse
        if (this.direction.haut) {
            this.y -= this.vitesse;
        }
        if (this.direction.droite) {
            this.x += this.vitesse;
        }
        if (this.direction.bas) {
            this.y += this.vitesse;
        }
        if (this.direction.gauche) {
            this.x -= this.vitesse;
        }
        //Teste les bordures du plateau
        if (this.x >= 800-18){
            this.x = 800-18;
        }
        if (this.x <= 0){
            this.x = 0;
        }
        if (this.y >= 580-32){
            this.y = 580-32;
        }
        if (this.y <= 0){
            this.y = 0;
        }

    }

}
