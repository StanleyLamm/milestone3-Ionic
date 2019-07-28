angular.module('app.controllers', [])
     
.controller('homeCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
    $http.get('http://localhost:1337/').then(function (response){
        $scope.events = response.data;
    });

}])
   
.controller('detailsCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', '$state', 'UserState', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $ionicPopup, $state, UserState) {
    $scope.$on("$ionicView.beforeEnter", function() {
        $http.get('http://127.0.0.1:1337/Event/Details/' + $stateParams.id).then(function (response){
            $scope.event = response.data;
        });
    });
    $scope.book = function(eventId){
        if(UserState.username == null){ //未登陆，跳转到登陆页面
            $state.go('tabsController.login');
            return;
        }
        var confirmPopup = $ionicPopup.confirm({title: 'Confirm', template: 'Are you sure you want to join this Event?'});
        confirmPopup.then(function(res){
            if(res) {
                $http.post('http://127.0.0.1:1337/Event/book/' + eventId).then(function(response){
                    $ionicPopup.alert({title: 'Success!', template: 'Success!'});
                    $state.go($state.current, {}, { reload: true }); //重新加载页面
                },function(response){
                    $ionicPopup.alert({title: 'Error!', template: response.data});
                });
            }
        });
    };
    $scope.cancel = function(eventId){
        if(UserState.username == null){ //未登陆，跳转到登陆页面
            $state.go('tabsController.login');
            return;
        }
        var confirmPopup = $ionicPopup.confirm({title: 'Confirm', template: 'Are you sure you want to cancel this Event?'});
        confirmPopup.then(function(res){
            if(res) {
                $http.delete('http://127.0.0.1:1337/Event/book/' + eventId).then(function(response){
                    $ionicPopup.alert({title: 'Success!', template: 'Success!'});
                    $state.go($state.current, {}, { reload: true }); //重新加载页面
                },function(response){
                    $ionicPopup.alert({title: 'Error!', template: response.data});
                });
            }
        });
    };

}])
   
.controller('organizersCtrl', ['$scope', '$stateParams', 'Organizers', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Organizers) {
    $scope.organizers = Organizers.getOrganizers();
}])
   
.controller('venuesCtrl', ['$scope', '$stateParams', 'Venues', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Venues) {
    $scope.venues = Venues.getAllVenues();

}])
   
.controller('mapCtrl', ['$scope', '$stateParams', 'Venues', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Venues) {
    var venue = Venues.getVenue($stateParams.name);
    var map = L.map('map').setView([venue.Latitude, venue.Longitude], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
    L.marker([venue.Latitude, venue.Longitude]).addTo(map).bindPopup(venue.name);
}])
   
.controller('eventsCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
    //重用页面
    switch($stateParams.type){
        case 'Organizer':
            //根据Organizer查询Events
            $http.get('http://127.0.0.1:1337/Event/search?organizer=' + $stateParams.keyword).then(function (response){
                $scope.events = response.data;
            });
            break;
        case 'Venue':
                $http.get('http://127.0.0.1:1337/Event/search?venue=' + $stateParams.keyword).then(function (response){
                    $scope.events = response.data;
                });
            break;
        case 'MyEvents':
                $http.get('http://127.0.0.1:1337/Event/myEvents').then(function (response){
                    $scope.events = response.data;
                });
            break;
    }

}])
   
.controller('accountCtrl', ['$scope', '$stateParams', 'UserState', '$ionicPopup', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, UserState, $ionicPopup, $http, $state) {
    $scope.$on("$ionicView.beforeEnter", function() {
        $scope.username = UserState.username; //更新用户名
    });
    $scope.logout = function(){
        var confirmPopup = $ionicPopup.confirm({title: 'Confirm', template: 'Are you sure you want to log out?'});
        confirmPopup.then(function(res){
            if(res) {
                $http.get('http://127.0.0.1:1337/User/logout');
                UserState.username = null; //清空保存的用户名
                $state.go($state.current, {}, { reload: true }); //重新加载页面
            }
        });
    };
        
}])
   
.controller('loginCtrl', ['$scope', '$stateParams', 'UserState', '$http', '$ionicPopup', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, UserState, $http, $ionicPopup, $ionicHistory) {
    $scope.loginForm = {};
    $scope.login = function(){
        $http.post('http://127.0.0.1:1337/User/login', $scope.loginForm).then(function(response){
            UserState.username = $scope.loginForm.username;
            var confirmPopup = $ionicPopup.confirm({title: 'Welcome back!', template: 'Go back to previous page?'});
            confirmPopup.then(function(res){
                if(res) $ionicHistory.goBack();
            }); 
        },function(response){
            $ionicPopup.alert({title: 'Error!', template: 'Username or password incorrect!'});
        });
    };
}])
   
.controller('myRegisteredEventsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 