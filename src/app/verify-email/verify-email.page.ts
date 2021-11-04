import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.intreface';


@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class VerifyEmailPage implements OnInit {
   user$:Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc:AuthService) {}

  ngOnInit() {}
 
async onSendEmail():Promise<void>{
  try{
   await this.authSvc.sendVerificationEmail();
  }catch(error){
console.log("Error",error);

  }
}

ngOnDestroy():void{
  this.authSvc.logout(); 
}

}
