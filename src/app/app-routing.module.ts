import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  { path: 'main-component', component: MainComponent },
  { path: 'profile-component', component: ProfileComponent },
  { path: '', redirectTo: 'main-component', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
