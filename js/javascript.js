"use strict";



/* ### DÉBUT - VOS DONNÉES DE DÉPART (QUESTIONS/RÉPONSES) */
let donnees =
	[
		{
			"question": "À quoi sert un aria-label?",
			"réponses": [
				"Ajouter du contenu textuel sur une balise pour aider les lecteurs d'écran",
				"À rien",
				"Je ne sais pas"
			],
			"réponse": 0
		},
		{
			"question": "HTML vient de :",
			"réponses": [
				"Hyper Typo Meta Lol",
				"Hypertext markup language",
				"Je ne sais pas"
			],
			"réponse": 1
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


function gererBoutonCommencer() {
	// Retirer cette alert une fois le bouton complété




	//1) Valider chaque champ du formulaire selon les critères de l'énoncé
	let PrenomValide = false;
	let NomValide = false;
	let MotDePasseValide = false;
	let confirmationmotdepassevalide = false;
	let emailValide = false;
	let formulaireEstValide = false;


	let prenom = document.getElementById("prenom").value;
	let nom = document.getElementById("Nom").value;
	let motDePasse = document.getElementById("mdp").value;
	let confirmationmotdepasse = document.getElementById("mdpconfirmation").value;
	let email = document.getElementById("email").value;
	const emailParts = email.split("@");

	// Validation du prenom
	if (prenom == "") {
		document.getElementById("msgErreurprenom").textContent = "Le champs ne peut etre vide";
	}
	else {
		PrenomValide = true;
		document.getElementById("msgErreurprenom").textContent = "";
	}

	// Validation du nom
	if (nom == "") {
		document.getElementById("msgErreurnom").textContent = "Le champs ne peut etre vide";
	}
	else {
		NomValide = true;
		document.getElementById("msgErreurnom").textContent = "";
	}

	// Validation du mdp
	if (motDePasse != "") {
		if (motDePasse.length >= 8) {
			document.getElementById("msgErreurmdp").textContent = "";
			MotDePasseValide = true;
		}
		else {
			document.getElementById("msgErreurmdp").textContent = "Mot de passe invalide";
		}
	}
	else {
		document.getElementById("msgErreurmdp").textContent = "Le champs ne peut etre vide";
	}

	// Validation de la confirmation
	if (confirmationmotdepasse != motDePasse) {
		document.getElementById("msgErreurconfirmationmdp").textContent = "N'est pas identique";
	}
	else {
		document.getElementById("msgErreurconfirmationmdp").textContent = "";
		confirmationmotdepassevalide = true;

	}

	// Validation du email
	if (email == "" || emailParts.length !== 2) {
		document.getElementById("msgErreuremail").textContent = "Email invalide";
	}
	else {
		emailValide = true;
	}

	// validation du formulaire
	if (PrenomValide && NomValide && emailValide && confirmationmotdepassevalide && MotDePasseValide) {
		alert("entree reussite");
		formulaireEstValide = true;
	}





	// 2) Rendu ici, on devrait savoir si tous les champs sont valides ou si au moins 1 champ est invalide.


	function GenererQuiz() {
		if (formulaireEstValide) {
			let formulaireDepart = document.getElementById("formulaireDepart");
			formulaireDepart.remove();
			const div = document.createElement("div");
			div.id = "questionnaire";

			

		}



	}
	// Si le formulaire est valide, on peut maintenant supprimer en javascript la balise form (incluant tout son contenu)
	// et commencer à créer en javascript la première question, ses choix de réponses, ainsi que le bouton "Soumettre", qui sera utiliser avancer dans le quiz
	// d'une question à l'autre
	// Attention de conserver les informations du formulaire (avant de supprimer celui-ci) dans des variables javascripts car vous en aurez besoin


	// tout au long du quiz (ex. le prénom et le nom)

}



/* ### FIN - SECTION FONCTIONS */



function initialisation() {

	//Ici, je ne fais qu'affiche le contenu de l'objet donnees vers la console
	//du navigateur pour des fins de "débug". Vous pouvez le conserver ou non.
	for (const key in donnees) {
		console.log(donnees[key]);
	}

	document.getElementById("btnCommencer").addEventListener("click", gererBoutonCommencer);

	// TODO...
}

addEventListener('load', initialisation, false);