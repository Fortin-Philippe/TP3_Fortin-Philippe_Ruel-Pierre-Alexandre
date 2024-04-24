"use strict";



/* ### DÉBUT - VOS DONNÉES DE DÉPART (QUESTIONS/RÉPONSES) */
let donnees =
	[
		{
			"question": "Durant la Guerre des Clones, un seigneur sith tire les ficelles des deux côtés afin de corrompre le sénat galactique ainsi que l'alliance séparatiste. Quelle est sa véritable identité ?",
			"réponses": [
				"Darth Jar-Jar",
				"Count Dooku",
				"Darth Sidious",
				"Darth Tyranus"
			],
			"réponse": 2
		},
		{
			"question": "À la fin de la Guerre des clones, le chancelier Palpatine ordonne à tous les soldats clones de la république d'anéantire les jedis. Quel est le code de cet ordre ?",
			"réponses": [
				"66",
				"501",
				"99",
				"46"
			],
			"réponse": 0
		},
		{
			"question": "Durant la Guerre des Clones, Ahsoka est accusée par le Sénat et est bannie de l'Ordre Jedi pour un crime qu'elle n'a pas commis. Qui est le traitre ?",
			"réponses": [
				"Assaj Ventress",
				"Barriss Offee",
				"Pong Krell",
				"Savage Opress"
			],
			"réponse": 1
		},
		{
			"question": "Avant les événements de la Guerre des clones, Obi-Wan Kenobi était le padawan de quel maître jedi ?",
			"réponses": [
				"Anakin Skywalker",
				"Yoda",
				"Mace Windu",
				"Qui-Gon Jinn"
			],
			"réponse": 3
		},
		{
			"question": "La couleur du sabre laser de  Mace Windu à une couleur particulière pour son sabre, qu'elle est cette couleur ?",
			"réponses": [
				"Rose",
				"Mauve",
				"Orange",
				"Noir"
			],
			"réponse": 1
		},
		{
			"question": "Quelle est le nom du droide de navigation d'Anakin Skywalker ?",
			"réponses": [
				"R2-D2",
				"BB-8",
				"R5-D4",
				"S2-D2"
			],
			"réponse": 0
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
let prenomUtilisateur;
let nomUtilisateur;
let reponsesUtilisateur = [];
let divProgress = document.getElementById("progressbarID");


divProgress.style.display = "none";
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


	let divProgress = document.getElementById("progressbarID");


	divProgress.style.display = "none";
	// Validation du prenom
	if (prenom == "") {
		document.getElementById("msgErreurprenom").textContent = "Veuillez remplir le champ.";
	}
	else {
		PrenomValide = true;
		document.getElementById("msgErreurprenom").textContent = "";
	}

	// Validation du nom
	if (nom == "") {
		document.getElementById("msgErreurnom").textContent = "Veuillez remplir le champ.";
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
		document.getElementById("msgErreurmdp").textContent = "Veuillez remplir le champ.";
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
		formulaireEstValide = true;
	}


	if (formulaireEstValide) {
		prenomUtilisateur = prenom;
		nomUtilisateur = nom;
		GenererQuiz();
	}
}

// 2) Rendu ici, on devrait savoir si tous les champs sont valides ou si au moins 1 champ est invalide.

// Si le formulaire est valide, on peut maintenant supprimer en javascript la balise form (incluant tout son contenu)
// et commencer à créer en javascript la première question, ses choix de réponses, ainsi que le bouton "Soumettre", qui sera utiliser avancer dans le quiz
// d'une question à l'autre

function GenererQuiz() {

	const formulaireDepart = document.getElementById("formulaireDepart");
	formulaireDepart.remove();
	const imgDepart = document.getElementById("imgDepart");
	imgDepart.remove();
	SalutationsHeader();
	
	AffichageQuestion(0);

	

}
function SalutationsHeader() {
	let divSalutations = document.getElementById("divSalutations");
	let pSalutations = document.createElement("p");
	pSalutations.textContent= `Bonjour ${prenomUtilisateur} ${nomUtilisateur} !`;
	divSalutations.appendChild(pSalutations);
}


let totalQuestion = donnees.length;
let progressBar = document.querySelector('.progress-bar');

function AffichageQuestion(numeroQuestion) {

	const main = document.getElementById("main");
	const progress = ((numeroQuestion + 1)/ totalQuestion) * 100;
	progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);

	let divAvancementQuestion = document.getElementById("avancementQuestion");
	if (!divAvancementQuestion) {
		divAvancementQuestion = document.createElement("div");
		divAvancementQuestion.id = "avancementQuestion";
		divAvancementQuestion.textContent = `Question ${numeroQuestion + 1}/${totalQuestion}`;
		divAvancementQuestion.classList.add("container");


		main.appendChild(divAvancementQuestion);
	}
	else {
		divAvancementQuestion.textContent = `Question ${numeroQuestion + 1}/${totalQuestion}`;
	}
	//Création d'une div questionnaire.
	let divQuestionnaire = document.createElement("div");
	divQuestionnaire.id = "questionnaire";
	document.body.appendChild(divQuestionnaire);

	main.appendChild(divQuestionnaire);

	const uneQuestion = donnees[numeroQuestion];
	const divQuestion = document.createElement('div');
	divQuestion.id="div-question";
	
	divQuestion.classList.add('question');
	//Texte de la question
	const textQuestion = document.createElement("p");
	textQuestion.textContent = uneQuestion.question;
	divQuestion.appendChild(textQuestion);

	uneQuestion.réponses.forEach((option, index) => {
		const choixReponse = document.createElement("label");
		const radioButton = document.createElement("input");
		radioButton.type = "radio";
		radioButton.name = `question-${numeroQuestion}`;
		radioButton.value = index;
		choixReponse.appendChild(radioButton);

		const txtQuestion = document.createTextNode(option);
		choixReponse.appendChild(txtQuestion);

		divQuestion.appendChild(choixReponse);
		divQuestion.appendChild(document.createElement("br"));
	});
	divProgress.style.display = "block";
	//Bouton suivant
	const btnSuivant = document.createElement("button");
	btnSuivant.textContent = "Suivant";
	btnSuivant.addEventListener("click", () => {
		GererSuivant(numeroQuestion + 1);
		
	});
	divQuestion.appendChild(btnSuivant);

	divQuestionnaire = document.getElementById("questionnaire");
	divQuestionnaire.appendChild(divQuestion);
	divQuestionnaire.classList.add("container");
	
}

function GererSuivant(prochaineQuestion) {

	const choixUtilisateur = document.querySelector(`input[name="question-${prochaineQuestion - 1}"]:checked`);
	if (choixUtilisateur) {
		reponsesUtilisateur[reponsesUtilisateur.length] = parseInt(choixUtilisateur.value);
	} else {
		reponsesUtilisateur[reponsesUtilisateur.length] = null;
	}

	const questionnaire = document.getElementById("questionnaire");
	questionnaire.innerHTML = "";
	if (prochaineQuestion < donnees.length) {
		AffichageQuestion(prochaineQuestion);
	}
	else {
		AfficherResultat();
	}

}


// Attention de conserver les informations du formulaire (avant de supprimer celui-ci) dans des variables javascripts car vous en aurez besoin
function AfficherResultat() {
	const main = document.getElementById("main");
	const questionnaire = document.getElementById("questionnaire");
	questionnaire.innerHTML = "";
	const divAvancementQuestion = document.getElementById("avancementQuestion");
	divAvancementQuestion.innerHTML= "";
	const nombreDeBonneReponses = ObtenirNombreDeBonneReponse();
	const pourcentageResultat = (nombreDeBonneReponses / donnees.length) * 100;
	const pourcentageFormate = pourcentageResultat.toFixed(2);

	const textResultatNom = document.createElement("p");
	textResultatNom.textContent = `Résultat pour ${prenomUtilisateur} ${nomUtilisateur}`;
	questionnaire.appendChild(textResultatNom);

	const textPourcentage = document.createElement("p");
	textPourcentage.textContent = `${pourcentageFormate}%`;
	questionnaire.appendChild(textPourcentage);

	if (pourcentageFormate >= 60) {
		let imageReussite = document.createElement("img");
		imageReussite.src = "img/reussite.jpg";
		imageReussite.alt = "Image de réussite.";
		main.appendChild(imageReussite);
		imageReussite.classList.add("img-fluid");
	}
	else {
		let imageEchec = document.createElement("img");
		imageEchec.src = "img/echec.jpg";
		imageEchec.alt = "Image d'échec.";
		main.appendChild(imageEchec);

	}
}
function ObtenirNombreDeBonneReponse() {
	let nombreDeBonneReponses = 0;
	for (let i = 0; i < donnees.length; i++) {
		const bonneReponse = donnees[i].réponse;
		const reponseUtilisateur = reponsesUtilisateur[i];
		if (reponseUtilisateur == bonneReponse && reponseUtilisateur != undefined) {
			nombreDeBonneReponses++;
		}
	}
	return nombreDeBonneReponses;

}
// tout au long du quiz (ex. le prénom et le nom)



/* ### FIN - SECTION FONCTIONS */
function refreshInfo(){
	location.reload(true);
}


function initialisation() {

	//Ici, je ne fais qu'affiche le contenu de l'objet donnees vers la console
	//du navigateur pour des fins de "débug". Vous pouvez le conserver ou non.
	for (const key in donnees) {
		console.log(donnees[key]);
	}

	document.getElementById("btnCommencer").addEventListener("click", gererBoutonCommencer);
	document.getElementById("btnIgnorer").addEventListener("click", refreshInfo);
	// Passer à la question suivante

	// TODO...
}


addEventListener('load', initialisation, false);