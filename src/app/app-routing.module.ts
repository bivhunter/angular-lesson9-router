import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PanelComponent} from "./components/panel/panel.component";
import { AboutComponent } from "./components/about/about.component";
import { AddBookComponent } from "./components/add-book/add-book.component";
import { EditBookComponent } from "./components/edit-book/edit-book.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'panel', pathMatch: "full", canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'panel', component: PanelComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: "addbook", component: AddBookComponent, canActivate: [AuthGuard]},
  { path: 'books/:id', component: EditBookComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent},
  { path: '**', component: NotFoundComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
