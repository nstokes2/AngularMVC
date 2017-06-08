var LandingPageController = function ($scope) {
    $scope.models = {
        helloAngular: 'Type here to change the title of the site'
    };

    $scope.navbarProperties = {
        isCollapsed: true
    };
}

LandingPageController.$inject = ['$scope'];