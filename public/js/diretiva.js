/**
 * Created by Michel on 13/10/2016.
 */

app.directive("descricao",[function(){
    return{
        restrict:'AE',
        transclude:true,
        // controller:'controlerInternoDiretiva',
        scope:{
            titulo:"@",
            texto:"@",
            dados:"@",
            
        },
        link:function(scope,element,attrs){
            espaco = angular.lowercase(scope.titulo)  ;


            scope.imagem = espaco;
          
        },
        templateUrl: 'diretivaDescricao.html'
    }
}])

