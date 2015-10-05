/**
 * Created by sheldonbarnes on 10/5/15.
 */


module OneAmerica.OnePlatform.Api.MSafe {

    import IHttpService = angular.IHttpService;
    export class MSafeService implements IMSafeService {

        $http: ng.IHttpService;
        $scope: ng.IScope;

        constructor ($http: ng.IHttpService, $scope: ng.IScope){
            this.$http = $http;
        }

        IsLocked (id: number) : boolean {

            var isLocked: boolean;
            this.$http.get("http://localhost/CreateAccount" + id).then (function onIsAccountLocked(response) {
                this.isLocked =  response.data;
            });

            return isLocked;

        }





    }


    angular
        .module("MSafe")
        .controller("MSafeController",
            MSafeService);
}

