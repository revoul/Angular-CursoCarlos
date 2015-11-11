angular.module('Agenda')
	.service('localStorage', ['$window', function($window){
		
		return {
			setContactos : setContactos,
			getContactos : getContactos
		}

		function setContactos(_array){
			$window.localStorage.clear();
			$window.localStorage.setItem('contacts', JSON.stringify(_array));
		}

		function getContactos(){
			return JSON.parse($window.localStorage.getItem('contacts')) || [];
		}
	}]
);