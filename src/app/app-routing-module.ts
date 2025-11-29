import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { AboutUs } from './components/pages/about-us/about-us';

const routes: Routes = [
  { path: '', component: Home },           // Home page
  { path: 'about-us', component: AboutUs }, // About Us page
  { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
