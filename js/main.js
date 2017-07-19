var dos = document.getElementsByClassName("carte");
var image = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg"];
// parcourir image de dos
for (let i = 0; i < dos.length; i++) {
  dos[i].addEventListener('click',retourne);
  function retourne (){
    dos[i].src = image[i];

}

}
