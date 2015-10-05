/**
 * Created by sheldonbarnes on 10/5/15.
 */


module OneAmerica.OnePlatform.Api.MSafe {


    export interface IMSafeService {

        CreateAccount (account: any) : any;
        GetAccount (id: number) : any;
        SearchUsers (searchString: string): any[];
        GetAccounts() : any[];
        GetAccount (planCode: string): any;
        GetUser (id: number): any;
        GetUser (email: string) : any;
        UnlockUser (id: number): any;
        UnlockUser (email: string): any;
        IsLocked (id: number): boolean;
        GetAccountFiles (id: number): any[];
        GetAccountFolders (id: number): any[];
        DeleteFile (id: number): any;


    }
}