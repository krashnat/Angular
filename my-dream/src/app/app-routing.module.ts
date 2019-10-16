import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';
import { UpdateComponent } from './update/update.component';
import { InformUserComponent } from './inform-user/inform-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteComponent } from './components/note/note.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';



const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verification', component: ConfirmationComponent },
  { path: 'sendmail', component: PasswordUpdateComponent },
  { path: 'updatePassword/:token', component: UpdateComponent },
  { path: 'informUser', component: InformUserComponent },
  { path: 'dashboard', component: DashboardComponent,
  children: [
    { path: '', component: NoteComponent }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
