import { 
  CanActivate,
  ActivatedRouteSnapshot, 
  RouterStateSnapshot,
  Router
  } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import{ AuthService } from '../app/auth.service';
@Injectable()

export class Authguard implements CanActivate{

 constructor(private AuthService: AuthService, private Router: Router ){}

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
   return this.AuthService.isAuthenticated()
    .then((authenticated: boolean)=>{
     if (authenticated){
      return true;
     }else{
      this.Router.navigate(['/']);
      
      return false;
     }
    })
    .catch((err) =>{
     console.log(err);
     return err;
    });
    
 }
}