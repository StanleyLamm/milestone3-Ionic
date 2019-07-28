angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.home', {
    url: '/Home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.details'
      2) Using $state.go programatically:
        $state.go('tabsController.details');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Details
      /page1/tab2/Details
      /page1/tab3/Details
      /page1/tab5/Details
  */
  .state('tabsController.details', {
    url: '/Details/:id',
    views: {
      'tab1': {
        templateUrl: 'templates/details.html',
        controller: 'detailsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/details.html',
        controller: 'detailsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/details.html',
        controller: 'detailsCtrl'
      },
      'tab5': {
        templateUrl: 'templates/details.html',
        controller: 'detailsCtrl'
      }
    }
  })

  .state('tabsController.organizers', {
    url: '/Organizers',
    views: {
      'tab2': {
        templateUrl: 'templates/organizers.html',
        controller: 'organizersCtrl'
      }
    }
  })

  .state('tabsController.venues', {
    url: '/Venues',
    views: {
      'tab3': {
        templateUrl: 'templates/venues.html',
        controller: 'venuesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.map'
      2) Using $state.go programatically:
        $state.go('tabsController.map');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Map
      /page1/tab2/Map
      /page1/tab3/Map
      /page1/tab5/Map
  */
  .state('tabsController.map', {
    url: '/Map?name',
    views: {
      'tab1': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      },
      'tab2': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      },
      'tab3': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      },
      'tab5': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.events'
      2) Using $state.go programatically:
        $state.go('tabsController.events');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/Events
      /page1/tab3/Events
      /page1/tab5/Events
  */
  .state('tabsController.events', {
    url: '/Events?type&keyword',
    views: {
      'tab2': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      },
      'tab5': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('tabsController.account', {
    url: '/Account',
    views: {
      'tab5': {
        templateUrl: 'templates/account.html',
        controller: 'accountCtrl'
      }
    }
  })

  .state('tabsController.login', {
    url: '/Login',
    views: {
      'tab1': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      },
      'tab2': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      },
      'tab3': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      },
      'tab4': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      },
      'tab5': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('myRegisteredEvents', {
    url: '/myEvents',
    templateUrl: 'templates/myRegisteredEvents.html',
    controller: 'myRegisteredEventsCtrl'
  })

$urlRouterProvider.otherwise('/page1/Home')


});