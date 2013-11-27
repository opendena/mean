
require('opendena-ng-mean-blog-demo/articles.services.js')(angular);
require('opendena-ng-mean-blog-demo/articles.controller.js')(angular);
require('opendena-ng-mean-blog-demo/articles.routes.js')(angular,'mean');


angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]); 

angular.element(document).ready(function() {
    //Fixing facebook bug with redirect
    if (window.location.hash == "#_=_") window.location.hash = "";

    //Then init the app
    angular.bootstrap(document, ['mean']);
});