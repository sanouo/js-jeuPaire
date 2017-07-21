var dos = document.getElementsByClassName("carte");
var image = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg"];
var compteur = 0;
var valeur = [];

for (let i = 0; i < dos.length; i++) {
  dos[i].addEventListener('click',function(){
    if(compteur == 0){
      // retourne();
      dos[i].src = image[i];
      valeur.push(this.src);
      compteur++;
    } else {
      compteur = 0;
      // retourne(i);
      dos[i].src = image[i];
      valeur.push(this.src);
      comparer();
    }
  });
}

// function retourne (i){
//   dos[i].src = image[i];
// }


function comparer()
{
  if (valeur[0] != valeur[1]){
    alert("perdu");
  }
  else {alert("gagner");}
}
