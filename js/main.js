var dos = document.getElementsByClassName("carte");
var image = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg"];
var compteur = 0;
var valeur = [];
nbpairOk=0;

for (let i = 0; i < dos.length; i++) {
  dos[i].addEventListener('click',function(){
    if(compteur == 0){

      dos[i].src = image[i];
      valeur.push(this);
      compteur++;
    } else {
      compteur = 0;

      dos[i].src = image[i];
      valeur.push(this);
      comparer(this);
    }
  });
}


function comparer(element)
{
  if(valeur[0].src != valeur[1].src){
    //retournemnt
    setTimeout(function(){
      valeur[0].src="img/portrait.png";
      valeur[1].src="img/portrait.png";
    valeur=[];}, 1000);
  }
else if (valeur[0].src === valeur[1].src){
  setTimeout(function(){
    valeur[0].src;
    valeur[1].src;
  valeur = [];}, 1000);
  nbpairOk++;
}


if (nbpairOk === 7) {
  alert("Felicitation");
}

}



for(var position=image.length-1; position>=1; position--){

	//hasard reçoit un nombre entier aléatoire entre 0 et position
	var hasard=Math.floor(Math.random()*(position+1));

	//Echange
	var sauve=image[position];
	image[position]=image[hasard];
	image[hasard]=sauve;

}
