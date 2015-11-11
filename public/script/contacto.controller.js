angular.module('Agenda')
	.controller('controller', ['$scope', 'localStorage', function($scope, localStorage){	
		$scope.contacts = localStorage.getContactos();

		$scope.saveContact = function() {
			$scope.contacts.push({
				name : $scope.contact.name,
				tel : $scope.contact.tel,
				dir : $scope.contact.dir
			});
			localStorage.setContactos($scope.contacts);
			$scope.contact = {};
			$scope.toggleForm();
		};

		$scope.remove = function (_index) {
			$scope.contacts.splice(_index, 1);
			localStorage.setContactos($scope.contacts);
		};

		$scope.toggleForm = function () {
			$scope.showForm = !$scope.showForm;
		};
	}]
);