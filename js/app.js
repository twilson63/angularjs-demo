// function CountryCtrl($scope, $http) {
//   $scope.foo = "Where are you now? ";
//   $scope.mylocation = { country: 'USA', state: 'South Carolina', city: 'Charleston'}
// 
//   $scope.states = ['Georgia', 'South Carolina', 'New Jersey'];
//   $scope.cities = ['Atlanta', 'Charleston', 'Moorestown'];
//   $scope.change = function(){
//     // http request....
//     $scope.results = [{value: "Foo"}, {value: "bar"}]
//     if($scope.mylocation.country === 'UK') {
//       $scope.states = ['Scotland', 'England', 'Wales'];
//       $scope.cities = ['London', 'York', 'Jersey'];        
//     } else {
//       $scope.states = ['Georgia', 'South Carolina', 'New Jersey'];
//       $scope.cities = ['Atlanta', 'Charleston', 'Moorestown'];
//     }
//   }
//   $scope.stateChanged = function(){
//     console.log('State Changed...');
//     if($scope.mylocation.state === 'Scotland') {
//       $scope.cities = ['Jersey'];
//     } else if ($scope.mylocation.country === 'USA') {
//       $scope.cities = ['Atlanta', 'Charleston', 'Moorestown'];
//     } else {
//       $scope.cities = ['London', 'York', 'Jersey'];  
//     }
//   }
//   $scope.cityChanged = function(){
//     console.log('City Changed...')
//   }
//   $scope.clickFoo = function(){
//     $scope.foo = "Bar..."
//   }
// }