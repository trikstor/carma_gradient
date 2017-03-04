angular.module('zotovscript', [])
.controller('MyController', ['$scope', function($scope) {
   $scope.retran = function() {
     if($scope.name.length > 3 && $scope.name.length > 3) {
       let color_1 = new color_1($scope.name);
       var st1 = color_1.value_name();
       let color_2 = new color_2($scope.date);
       var st2 = color_2.value_date_of_brith();
     } else {
       $scope.result = "Заполните все поля.";
   }
}]);
