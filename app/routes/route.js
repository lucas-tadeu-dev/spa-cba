app.config(function ($routeProvider, $locationProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'app/views/home.html',
      controller: 'HomeCtrl'
    })

    .when('/about', {
      templateUrl: 'app/views/about.html',
      controller: 'HomeCtrl'
    })

    .when('/service', {
      templateUrl: 'app/views/service.html',
      controller: 'AboutCtrl'
    })

    .when('/contact', {
      templateUrl: 'app/views/contact.html',
      controller: 'ContactCtrl'
    })

    .otherwise({ redirectTo: '/' })
})
