angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('UserState', [function(){
    this.username = null;
    return this;
}])

.service('BlankService', [function(){

}])

.service('Organizers', [function(){
    var organizers = [
        {
            name: 'Government and International Stuides'
        },
        {
            name: 'Student Organization'
        },
        {
            name: 'School Departments'
        },
    ];
    this.getOrganizers = function(){
        return organizers;
    };
}])

.service('Venues', [function(){
    var venues = [
        {
            name: 'SWT 501',
            Latitude: 22.338867,
            Longitude: 114.181909, 
        },
        {
            name: 'SWT 502',
            Latitude: 22.340778,
            Longitude: 114.179943, 
        },
        {
            name: 'OEE 605',
            Latitude: 22.338867,
            Longitude: 114.181909,  
        },
        {
            name: 'YSS 805',
            Latitude: 22.337639,
            Longitude: 114.181986,  
        },
        {
            name: 'RRS 308',
            Latitude: 22.338376,
            Longitude: 114.182043,  
        },
    ];

    this.getAllVenues = function(){
        return venues;
    };
    this.getVenue = function(venueName){
        for(var i=0; i< venues.length; i++){
            if(venueName == venues[i].name){
                return venues[i];
            }
        }
    };
}]);
