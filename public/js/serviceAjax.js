/**
 * Created by Michel on 13/10/2016.
 */
app.service("ajax",["$http",function($http){
    return {
        consulta: function (urlConsulta ) {
         return   $http.get(urlConsulta ).then(function (response) {
                return response.data
            })

        }
  
    }
}])