class Mecanique{
    constructor(canvas){
        this.canvas = canvas;
        this.plateau = new Plateau("img/fond.jpg", canvas.context);
        this.heros = new Personnage ("img/lapin.png", canvas.context);
        this.cible = new Personnage ("img/carotte.png", canvas.context);
        this.tabCollisions = [];
        this.creeEnnemis();
        this.music = new Audio("media/fond_sonore.mp3");
        this.music.loop = true;
        this.music.volume = 0.2;
        this.music.play();
        this.sonDefaite = new Audio("media/perd.mp3");
        this.sonVictoire = new Audio("media/gagne.mp3");
    }
    
    //Efface canvas + déplace héros + teste collision + redessine tout
    update(){
        this.canvas.context.clearRect(this.x, this.y, this.canvas.l, this.canvas.h);
        this.heros.bouge();
        this.collisionne();
        this.dessineTout();
    }

    //Collision héros / ennemi puis héros / cible
    collisionne(){
        let resultat  = document.getElementById('resultat');
        for (let i=0; i<30; i++){
            if (this.heros.x>=this.tabCollisions[i].x-18 && 
                this.heros.x<=this.tabCollisions[i].x+32 && 
                this.heros.y>=this.tabCollisions[i].y-32 && 
                this.heros.y<=this.tabCollisions[i].y+24) {
                resultat.innerHTML="PERDU !";
                this.sonDefaite.play();
            }
        }
        if (this.heros.x>=this.cible.x-18 && 
            this.heros.x<=this.cible.x+30 && 
            this.heros.y>=this.cible.y-32 && 
            this.heros.y<=this.cible.y+32) {
            resultat.innerHTML="GAGNE !";
            this.sonVictoire.play();
        }
    }

    //Dessine tous les éléments
    dessineTout(){
        this.plateau.dessinePlateau();
        this.heros.dessinePersonnage();
        this.cible.dessinePersonnage();
        for (let i=0; i<30; i++){
            this.tabCollisions[i].dessineEnnemi();
        }
    }

    //Crée les ennemis
    creeEnnemis(){
        for (let i=0; i<30; i++){
            let ennemi = new Ennemi ("img/renard.png", canvas.context);
            ennemi.positionne();
            this.tabCollisions.push(ennemi);
            if (this.tabCollisions.length==10){
                console.log("ennemis : "+this.tabCollisions);
            }
        }
        return this.tabCollisions;
    }
    
}
