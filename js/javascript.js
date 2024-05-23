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
			"question": "Durant la Guerre des Clones, Ahsoka est accusée par le Sénat et est bannie de l'Ordre Jedi pour un crime qu'elle n'a pas commis. Qui est le véritable responsable ?",
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
			"question": "Le sabre laser de  Mace Windu à une couleur particulière. Quelle est cette couleur ?",
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
			// Vérifier si le mot de passe est alphanumérique et commence par une majuscule
			if (/^[A-Z][a-zA-Z0-9]*$/.test(motDePasse)) {
				document.getElementById("msgErreurmdp").textContent = "";
				MotDePasseValide = true;
			} else {
				document.getElementById("msgErreurmdp").textContent = "Mot de passe invalide. Doit être alphanumérique et commencer par une majuscule.";
			}
		} else {
			document.getElementById("msgErreurmdp").textContent = "Le mot de passe doit contenir au moins 8 caractères.";
		}
	} else {
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

	// Si le formulaire est valide, le nom et prénom est enregistré et le quiz se génère.
	if (formulaireEstValide) {
		prenomUtilisateur = prenom;
		nomUtilisateur = nom;
		GenererQuiz();
	}
}
//Fonction qui génère le quiz et qui retire le formulaire de départ et l'image de départ.
function GenererQuiz() {

	const formulaireDepart = document.getElementById("formulaireDepart");
	formulaireDepart.remove();
	const imgDepart = document.getElementById("imgDepart");
	imgDepart.remove();
	SalutationsHeader();

	AffichageQuestion(0);

}

//Fonction qui fait référence à une divSalutations dans le html dans laquelle il y a p qui salut l'utilisateur avec son nom et prénom.
function SalutationsHeader() {
	let divSalutations = document.getElementById("divSalutations");
	let pSalutations = document.createElement("p");
	pSalutations.textContent = `Bonjour ${prenomUtilisateur} ${nomUtilisateur} !`;
	pSalutations.classList.add("container");
	divSalutations.appendChild(pSalutations);
}



let progressBar = document.querySelector('.progress-bar');

//Fonction qui affiche la question en cours et qui prend le nombre de question en paramètre.
function AffichageQuestion(numeroQuestion) {
	//Variable qui stocke le nombre total de questions.
	let totalQuestion = donnees.length;
	//Variable qui réfère à la section main en html.
	const main = document.getElementById("main");

	const progress = ((numeroQuestion + 1) / totalQuestion) * 100;
	progressBar.style.width = `${progress}%`;
	progressBar.setAttribute('aria-valuenow', progress);

	//Variable divAvancementQuestion qui fait référence à une div existante.
	let divAvancementQuestion = document.getElementById("avancementQuestion");
	//Si cette div n'existe pas, alors on en crée une nouvelle.
	if (!divAvancementQuestion) {
		divAvancementQuestion = document.createElement("div");
		divAvancementQuestion.id = "avancementQuestion";
		divAvancementQuestion.textContent = `Question ${numeroQuestion + 1}/${totalQuestion}`;
		divAvancementQuestion.classList.add("container");


		main.appendChild(divAvancementQuestion);
	}
	//Sinon, on ajoute 1 à la div existante. 
	else {
		divAvancementQuestion.textContent = `Question ${numeroQuestion + 1}/${totalQuestion}`;
	}
	//Création d'une div questionnaire.
	let divQuestionnaire = document.createElement("div");
	divQuestionnaire.id = "questionnaire";
	document.body.appendChild(divQuestionnaire);
	main.appendChild(divQuestionnaire);

	//Création d'une variable question qui va chercher la question dans donnees à la position donnée.
	const uneQuestion = donnees[numeroQuestion];
	//Création d'une divQuestion pour y afficher la question.
	const divQuestion = document.createElement('div');
	divQuestion.classList.add("container");
	divQuestion.id = "div-question";

	//Création d'un paragraphe pour y affecter le texte de la question.
	const textQuestion = document.createElement("p");
	//Affecter la question actuelle à une zone de texte.
	textQuestion.textContent = uneQuestion.question;
	divQuestion.appendChild(textQuestion);

	//Fonction qui créer les choix de réponses en radioButton en fonction de l'index donné.
	uneQuestion.réponses.forEach((option, index) => {
		const choixReponse = document.createElement("label");
		const radioButton = document.createElement("input");
		radioButton.type = "radio";
		radioButton.name = `question-${numeroQuestion}`;
		radioButton.value = index;
		choixReponse.appendChild(radioButton);
		//Sélection du texte de la question.
		const txtQuestion = document.createTextNode(option);
		choixReponse.appendChild(txtQuestion);

		divQuestion.appendChild(choixReponse);
		divQuestion.appendChild(document.createElement("br"));
	});

	divProgress.style.display = "block";

	//Bouton suivant qui créer un évènement click dans lequel il appel la fonction gerer suivant.
	const btnSuivant = document.createElement("button");
	btnSuivant.classList.add("btn", "btn-primary");
	btnSuivant.textContent = "Suivant";
	btnSuivant.id = "btnSuivant";
	btnSuivant.addEventListener("click", () => {
		GererSuivant(numeroQuestion + 1);

	});
	divQuestion.appendChild(btnSuivant);

	divQuestionnaire = document.getElementById("questionnaire");
	divQuestionnaire.appendChild(divQuestion);

}

//Fonction qui gère le nombre suivant en enregistrant la réponse et qui prend en paramètre la prochaine question.
function GererSuivant(prochaineQuestion) {

	const choixUtilisateur = document.querySelector(`input[name="question-${prochaineQuestion - 1}"]:checked`);
	// Si le choix de l'utilisateur est existant, alors on enregistre la valeur choisie.
	if (choixUtilisateur) {
		reponsesUtilisateur[reponsesUtilisateur.length] = parseInt(choixUtilisateur.value);
	}
	//Sinon on lui affecte la valeur nulle.
	else {
		reponsesUtilisateur[reponsesUtilisateur.length] = null;
	}
	//On efface le contenu du questionnaire.
	const questionnaire = document.getElementById("questionnaire");
	questionnaire.innerHTML = "";
	//Si on arrive n'arrive pas à la dernière question, on affiche la prochaine question. 
	if (prochaineQuestion < donnees.length) {
		AffichageQuestion(prochaineQuestion);
	}
	//Sinon on affiche le résultat.
	else {
		AfficherResultat();
	}

}


// Fonction qui affiche le résultat des réponses du questionnaire. 
function AfficherResultat() {
	//On efface la barre de progression.
	const divBarreProgression = document.getElementById("progressbarID");
	divBarreProgression.innerHTML = "";
	//On efface la configuration du questionnaire.
	const divPositionnement = document.getElementById("divPositionnement");
	divPositionnement.innerHTML = "";
	//On efface le nombre de question.
	const divAvancementQuestion = document.getElementById("avancementQuestion");
	divAvancementQuestion.innerHTML = "";

	//On affecte le nombre de bonne bonne réponse à la variavle nombreDeBonneReponses.
	let nombreDeBonneReponses = ObtenirNombreDeBonneReponse();
	//On calcule le pourcentage de bonne réponse en pourcentage.
	const pourcentageResultat = (nombreDeBonneReponses / donnees.length) * 100;
	//On limite le nombre de chiffre après la virgule à 2.
	const pourcentageFormate = pourcentageResultat.toFixed(2);

	//On crée une div pour positionner avec bootstrap.
	let divPositionTexte = document.getElementById("divPositionnement");
	divPositionTexte.id = "divPositionTexte";
	divPositionTexte.classList.add("row");

	let divTextResultat = document.createElement("div");
	divTextResultat.id = "divTextResultat";
	divTextResultat.classList.add("col-md-6", "col-sm-12", "padding-0");

	//Création d'un paragraphe pour annoncer le résultat avec le nom et prénom du répondant.
	const textResultatNom = document.createElement("p");
	textResultatNom.id = "textResultatom";
	textResultatNom.textContent = `Résultat pour ${prenomUtilisateur} ${nomUtilisateur} :`;

	//Création d'un paragraphe pour afficher le résultat en pourcentage.
	const textPourcentage = document.createElement("p");
	textPourcentage.textContent = `${pourcentageFormate}%`;

	divPositionTexte.appendChild(divTextResultat);
	divTextResultat.appendChild(textResultatNom);
	divTextResultat.appendChild(textPourcentage);

	//Création d'une divImage pour y insérer l'image
	let divImage = document.createElement("div");
	divImage.id = "divImage";
	divImage.classList.add("col-md-6", "col-sm-12");
	divPositionTexte.appendChild(divImage);

	//Si le résultat en pourcentage est supérieur ou égal à 60 alors on affiche une image de réussite.
	if (pourcentageFormate >= 60) {

		let imageReussite = document.createElement("img");
		imageReussite.src = "img/reussite.jpg";
		imageReussite.alt = "Image de réussite.";
		divImage.appendChild(imageReussite);
		imageReussite.classList.add("img-fluid");
	}
	//Sinon, on affiche une image d'échec.
	else {
		let imageEchec = document.createElement("img");
		imageEchec.src = "img/echec.jpg";
		imageEchec.alt = "Image d'échec.";
		divImage.appendChild(imageEchec);
		imageEchec.classList.add("img-fluid");
	}
	let canva = document.getElementById("myChart");
	let nombreDeMauvaiseReponse = donnees.length - nombreDeBonneReponses;
	let chart = new Chart(canva, {
		type: "doughnut",
		data: {
			labels: ["Bonne Réponse", "Mauvaise Réponse"],
			datasets: [{
				data: [nombreDeBonneReponses, nombreDeMauvaiseReponse],
				backgroundColor: ["#d36135", "#3e5641"],
			}]
		}

	});
}


//Fonction qui enregistre le nombre de bonne réponse. 
function ObtenirNombreDeBonneReponse() {
	let nombreDeBonneReponses = 0;
	//Boucle for qui vérifie si la réponse est bonne et qu'elle n'est pas égale à null. 
	for (let i = 0; i < donnees.length; i++) {
		const bonneReponse = donnees[i].réponse;
		const reponseUtilisateur = reponsesUtilisateur[i];
		if (reponseUtilisateur == bonneReponse && reponseUtilisateur != null) {
			nombreDeBonneReponses++;
		}
	}
	//Elle retourne le nombre de bonne réponse.
	return nombreDeBonneReponses;

}




/* ### FIN - SECTION FONCTIONS */
function refreshInfo() {
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