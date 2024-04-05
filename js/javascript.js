"use strict";



/* ### DÉBUT - VOS DONNÉES DE DÉPART (QUESTIONS/RÉPONSES) */
let donnees = 
[
	{
		"question":"À quoi sert un aria-label?",
		"réponses":[
		"Ajouter du contenu textuel sur une balise pour aider les lecteurs d'écran",
		"À rien", 
		"Je ne sais pas"
		], 
		"réponse":0
	},
	{
		"question":"HTML vient de :",
		"réponses":[
			"Hyper Typo Meta Lol",
			"Hypertext markup language", 
			"Je ne sais pas"
		], 
		"réponse":1
	}
];

/* Exemple d'utilisation
// Question1
donnees[0].question;       ->"À quoi sert un aria-label?"
donnees[0].responses[2];   ->"Je ne sais pas"

// Question 2
donnees[1].réponse;        -> 1

...
*/
/* ### FIN - VOS DONNÉES DE DÉPART (QUESTIONS/RÉPONSES) */


/* ### DÉBUT - SECTION VARIABLES GLOBALES */
   // Vos variables globales

/* ### FIN - SECTION VARIABLES GLOBALES */



/* ### DÉBUT - SECTION FONCTIONS */
   // Vos fonctions
   // ..
   // ..


function gererBoutonCommencer()
{
	// Retirer cette alert une fois le bouton complété
	alert("gererBoutonCommencer");

	let formulaireEstValide = false;

	//1) Valider chaque champ du formulaire selon les critères de l'énoncé
	let PrenomValide = false;
	let NomValide = false;
    let MotDePasseValide = false;
	let emailValide = false;

	let prenom = document.getElementById("prenom").value;
	let nom = document.getElementById("nom").value;
    let motDePasse = document.getElementById("motdepasse").value;
	let confirmationmotdepasse = document.getElementById("confirmationemail").value;
	let email = document.getElementById("email").value;

	if(prenom == "")
	{
		document.getElementById("msgErreurprenom").textContent = "erreur";
	}
	else
	{
		PrenomValide = true;
		document.getElementById("msgErreurprenom").textContent = "";
	}

	if(nom == "")
	{
		document.getElementById("msgErreurnom").textContent = "erreur";
	}
	else
	{
		PrenomValide = true;
		document.getElementById("msgErreurnom").textContent = "";
	}
	if(motDePasse == ""){
		if(motDePasse.length >= 8){
			document.getElementById("msgErreurmdp").textContent = "";
			motDePasse = true;
		}
		else{
			document.getElementById("msgErreurmdp").textContent = "erreur";
		}
	}
	else{
		document.getElementById("msgErreurmdp").textContent = "erreur";
	}
	// 2) Rendu ici, on devrait savoir si tous les champs sont valides ou si au moins 1 champ est invalide
	if(formulaireEstValide)
	{
		// Si le formulaire est valide, on peut maintenant supprimer en javascript la balise form (incluant tout son contenu)
		// et commencer à créer en javascript la première question, ses choix de réponses, ainsi que le bouton "Soumettre", qui sera utiliser avancer dans le quiz
		// d'une question à l'autre
		// Attention de conserver les informations du formulaire (avant de supprimer celui-ci) dans des variables javascripts car vous en aurez besoin
		// tout au long du quiz (ex. le prénom et le nom)
	}
	else
	{	
		// Si le formulaire est invalide, on ne poursuit pas vers le quiz, donc on ne fait rien : l'utilisateur doit corriger
		// le ou les champs invalides.
	}
	
} 
/* ### FIN - SECTION FONCTIONS */



function initialisation() {

   //Ici, je ne fais qu'affiche le contenu de l'objet donnees vers la console
   //du navigateur pour des fins de "débug". Vous pouvez le conserver ou non.
   for (const key in donnees) {
	console.log(donnees[key]);
   }

   document.getElementById("btnCommencer").addEventListener("click",gererBoutonCommencer);

   // TODO...
}

addEventListener('load', initialisation, false);