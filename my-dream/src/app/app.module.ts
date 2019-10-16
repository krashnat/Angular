import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';
import { UpdateComponent } from './update/update.component';
import { InformUserComponent } from './inform-user/inform-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NoteComponent } from './components/note/note.component';
import { FullcomponentComponent } from './components/fullcomponent/fullcomponent.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { EditnoteComponent } from './components/editnote/editnote.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmationComponent,
    PasswordUpdateComponent,
    UpdateComponent,
    InformUserComponent,
    DashboardComponent,
    NoteComponent,
    FullcomponentComponent,
    DisplayNotesComponent,
    EditnoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule


  ],
  entryComponents: [EditnoteComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
