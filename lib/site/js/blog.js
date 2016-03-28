var app = angular.module('blog', []);

app.factory('contentService', ['$http', function ($http) {
    var content = {
        helloWorld: function () {
            return 'Hello, world!';
        }
    };

    return content;
}]);

app.controller('BlogCtrl', ['$scope', 'contentService', function ($scope, contentService) {
    $scope.testOne = contentService.helloWorld();


    $scope.testDate = new Date().toLocaleDateString();
    $scope.testAuthor = 'Bob the Builder';
    $scope.testHeader = 'The quick brown fox jumped over the lazy dog.';
}]);