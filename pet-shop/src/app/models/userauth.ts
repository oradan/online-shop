export class UserAuth {
    id:number=null;
    userFullName:string="";
    userName: string="";
    password:string="";
    authToken: string="";
    
    isAuthenticated: boolean=false;
    canAddProducts: boolean=false;
    canDeleteProducts:boolean=false;
    canUpdateProducts:boolean=false;
}
