import { Home } from './components/pages/home/home';
import { AboutUs } from './components/pages/about-us/about-us';
import { Contact } from './components/pages/contact/contact';

export const routes = [
  { path: '', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'contacts', component: Contact }
];
