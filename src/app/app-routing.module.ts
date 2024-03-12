import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';

const routes: Routes = [
{path: '', redirectTo: 'home',pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'contactus', component: ContactusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
