var canvas = new Canvas(800,550);
var mecanique = new Mecanique(canvas);

//Boucle du jeu
function lancement(){
	mecanique.update();
    requestAnimationFrame(lancement);
}
lancement();

