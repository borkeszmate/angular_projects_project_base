export class AuthService{
 loggedIn:boolean = true;
 
 login(){
  this.loggedIn = true;
 }
 logout(){
  this.loggedIn = false;
 }
 isAuthenticated(){
  const promise = new Promise((resolve,reject)=>{
   setTimeout(()=>{
   resolve(this.loggedIn);
   },800) 
  });
  return promise;
 }

}