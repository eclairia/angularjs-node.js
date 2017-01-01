/*
	Déclaration du module webmail, de notre application angularjs
	Le tableau vide permet de dire que notre webmail ne dépend d'aucun autre module
*/	
angular.module("Webmail", [ "ngSanitize" ])

.controller('WebmailCtrl', function($scope, $location) {

	$scope.dossiers = [
		{ value: "RECEPTION", label:"Boite de réception", emails: [
			{id:1, from: "Maman", to: "Adrien", subject: "Je suis avec mon frère", date: "27/12/2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{id:2, from: "Papa", to: "Adrien", subject: "Je suis avec ma soeur", date: "27/12/2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{id:3, from: "César", to: "Adrien", subject: "Je suis avec Brutus", date: "27/12/2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{id:4, from: "Cléopâtre", to: "Adrien", subject: "Je suis la femme de César", date: "27/12/2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id <p>est laborum.</p>"},
		]}, 

		{ value: "ARCHIVES", label:"Archives", emails: [
			{id:5, from: "Captain Flam", to: "Adrien", subject: "Je suis moi", date: "27/12/2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{id:6, from: "Batman", to: "Adrien", subject: "Je suis Batman", date: "27/12/2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{id:7, from: "Jarvis", to: "Adrien", subject: "Bien monsieur Stark", date: "27/12/2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
		]}, 	

		{ value: "ENVOYES", label:"Envoyés", emails: [
			{id:8, from: "Captain Flam", to: "Adrien", subject: "Je suis moi", date: "27/12/2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{id:9, from: "Batman", to: "Adrien", subject: "Je suis Batman", date: "27/12/2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
		]}, 

		{ value: "SPAM", label:"Courriers indésirables", emails: [
			{id:10, from: "Tania", to: "Adrien", subject: "Je suis tout à toi", date: "27/12/2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{id:11, from: "Caméléon", to: "Adrien", subject: "Voulez-vous aggrandir la taille de votre pénis ?", date: "27/12/2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
		]}				
	];

	$scope.dossierCourant = null;
	$scope.emailSelectionne = null;

	$scope.versEmail = function(dossier, email){
		$location.path("/" + dossier.value + "/" + email.id);
	}

	$scope.selectionDossier = function(dossier) {
		$scope.dossierCourant = dossier;
		$scope.emailSelectionne = null;
	}

	$scope.selectionEmail = function(email) {
		$scope.emailSelectionne = email;
	}

	$scope.$watch(function() {
		//Return de la valeur à surveiller
		return $location.path();
	}, function(newPath){
		var tabPath = newPath.split("/");
		if(tabPath.length > 1){
			var valDossier = tabPath[1];
			$scope.dossiers.forEach(function(item){
				if(item.value == valDossier){
					$scope.selectionDossier(item);
				}
			});
			if(tabPath.length > 2){
				var idMail = tabPath[2];
				$scope.dossierCourant.emails.forEach(function(item){
					if(item.id == idMail){
						$scope.selectionEmail(item);
					}
				})
			}
		}
	});	
});