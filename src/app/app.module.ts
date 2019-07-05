import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {BooksService} from "./services/books.service";
import {IdService} from "./services/id.service";
import { FormsModule } from "@angular/forms";
import { FlashMessagesModule } from "angular2-flash-messages";
import { LoginComponent } from './components/login/login.component';
import { AuthService } from "./services/auth.service";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from "../environments/environment";
import { RegisterComponent } from './components/register/register.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { CurrencyComponent } from './components/currency/currency.component';
import { CurrencyService} from "./services/currency.service";

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    AddBookComponent,
    EditBookComponent,
    AboutComponent,
    NotFoundComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CustomDatePipe,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase, "forWeb")
  ],
  providers: [BooksService, IdService, AuthService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
