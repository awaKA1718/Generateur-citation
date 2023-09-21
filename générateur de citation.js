const citations = [
	"Faire rire, c'est faire oublier.",
	"On a voulu, à tort, faire de la bourgeoisie une classe. ",
	"Dieu n'avait fait que l'eau, mais l'homme a fait le vin.",
	"Le travail ne peut être une loi sans être un droit.",
	"La vie n'est qu'une longue perte de tout ce qu'on aime.",
	"Il vient une heure où protester ne suffit plus : après la philosophie, il faut l'action."
];
const auteur = "Victor Hugo";
let aleatoire = null;
let tweet = "";
let hashtag = "citation";


	document.getElementById('generer').addEventListener("click", function() {
		aleatoire = Math.floor(Math.random() * citations.length);
		document.querySelector('.quote').innerHTML = citations[aleatoire];
		document.querySelector('.writer').innerHTML = auteur;
	});

	