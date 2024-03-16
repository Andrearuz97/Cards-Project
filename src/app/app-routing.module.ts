import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { OurServicesComponent } from './components/ourServices/ourServices.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
{path: '', redirectTo: 'home',pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'contactus', component: ContactusComponent},
{path: 'ourService', component:OurServicesComponent},
{path: 'profile', component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
