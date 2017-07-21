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
  console.log(valeur);
  if(valeur[0].src != valeur[1].src){
    //retournemnt
    console.log("pas les meme");
    setTimeout(function(){
      valeur[0].src="img/portrait.png";
      valeur[1].src="img/portrait.png";
    }, 1000);
  }

  else{
    //retournemeny
    nbpairOk++;
    if (nbpairOk = 7) {

    }
  }




}
