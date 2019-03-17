var champ1 = document.getElementById('nbLignesJoueur1');
var champ2 = document.getElementById('nbLignesJoueur2');
var boutonValiderLignes = document.getElementById('boutonLignes');
var nbLignesJoueur1;
var nbLignesJoueur2;
var generateButton = document.querySelector('input.generer');
var listeDesPicksJ1 = document.querySelector('ul.listeDePersoJ1');
var listeDesPicksJ2 = document.querySelector('ul.listeDePersoJ2');
var alternate = 0;
var clearButton = document.querySelector('input.clear')
var linesForm = document.querySelector('form.linesDefining');
console.log(generateButton);
console.log(champ1,champ2);
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)+1);
}

boutonValiderLignes.addEventListener('click',function () {
  nbLignesJoueur1 = champ1.value;
  nbLignesJoueur2 = champ2.value;
  console.log(champ1.value,champ2.value);
  champ1.value = '';
  champ2.value = '';
  generateButton.classList.remove('hidden');
  clearButton.classList.remove('hidden');
  linesForm.innerHTML = '';

});

generateButton.addEventListener('click',function () {
  if (alternate == 0) {
    listeDesPicksJ1.innerHTML += '<li>J1 - ' + getRandomInt(nbLignesJoueur1) + '/' + getRandomInt(5) + '</li>';
    alternate++;
  }else{
    listeDesPicksJ2.innerHTML += '<li>J2 - ' + getRandomInt(nbLignesJoueur2) + '/' + getRandomInt(5) + '</li>';
    alternate=0;
  }
  
});

clearButton.addEventListener('click',function () {
  listeDesPicksJ1.innerHTML = '';
  listeDesPicksJ2.innerHTML = '';
  alternate = 0;
})


