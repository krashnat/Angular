import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';
import { UpdateComponent } from './update/update.component';
import { InformUserComponent } from './inform-user/inform-user.component';



const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verification', component: ConfirmationComponent },
  { path: 'sendmail', component: PasswordUpdateComponent },
  { path: 'updatePassword/:token', component: UpdateComponent },
  { path: 'informUser', component: InformUserComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
