// AngularJS контроллер
angular.module('zotovscript', [])
.controller('MyController', ['$scope', function($scope) {
   $scope.retran = function() {
     if($scope.name.length > 3 && $scope.name.length > 3) {
       let color_1 = new color_1($scope.name);
       var st1 = color_1.value_name();
       let color_2 = new color_2($scope.date);
       var st2 = color_2.value_date_of_brith();
        let convert_color =  new convert_color(st1, st2);
        
        var ch_gr = angular.element(document.querySelector(".gr_square"));
        ch_gr.css("background_image", "convert_color.hsl_color");
        $scope.result ="Число вашего имени:"+st1+" Число вашей даты рождения:"+st2;
     } else {
       $scope.result = "Заполните все поля.";
   }
}]);
   
// JqueryUI
$( function() {
    $( "#data" ).datepicker();
  } );
   
