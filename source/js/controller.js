/**
 * Created by Michel on 13/10/2016.
 */
    app.controller("consultaApi",["ajax","$scope",function(ajax,$scope){
       var urlConsulta = "http://www.mocky.io/v2/57dfec211000009020598073.json";
       ajax.consulta(urlConsulta ).then(function(data) {
           $scope.dados = data;
         
       })
    
    }])