import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { AboutUs } from './components/pages/about-us/about-us';
<<<<<<< HEAD

const routes: Routes = [
  { path: '', component: Home },           // Home page
  { path: 'about-us', component: AboutUs }, // About Us page
  { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback for unknown routes
=======
import { Categories } from './components/pages/categories/categories';
import { Testimonial } from './components/pages/home/testimonial/testimonial';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'categories', component: Categories },
  { path: 'testimonial', component: Testimonial },
  { path: '**', redirectTo: '', pathMatch: 'full' }
>>>>>>> c9ec29d (update data)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
<<<<<<< HEAD
=======
 
>>>>>>> c9ec29d (update data)
