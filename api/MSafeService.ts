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
            this.$http.get("http://localhost/IsAccountLocked/" + id).then (function onIsAccountLocked(response) {
                this.isLocked =  response.data;
            });

            return isLocked;

        }

        CreateAccount (account: any) : any {
            throw ('not implemented yet');
        }

        GetAccountByPlanCode(planCode: string) : any {
            throw ('not implemented yet');
        }

        GetAccount(id: number) : any {
            throw ('not implemented yet');
        }

        SearchUsers (searchString: string): any[] {
            throw ('not implemented yet');
        }
        GetUser (id: number): any {
            throw ('not implemented yet');
        }
        GetUserByEmail (email: string) : any {
            throw ('not implemented yet');
        }
        UnlockUser (id: number): any {
            throw ('not implemented yet');
        }

        UnlockUserByEmail (email: string): any {
            throw ('not implemented yet');
        }

        GetAccountFiles (id: number): any[] {
            throw ('not implemented yet');
        }
        GetAccountFolders (id: number): any[] {
            throw ('not implemented yet');
        }
        DeleteFile (id: number): any {
            throw ('not implemented yet');
        }
        GetAccounts() : any[] {
            throw ('not implemented yet');
        }
    }


    angular
        .module("MSafe")
        .controller("MSafeController",
            MSafeService);
}

