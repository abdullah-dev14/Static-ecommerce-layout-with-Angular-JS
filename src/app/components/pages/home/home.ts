<<<<<<< HEAD
import { Banner } from './banner/banner';
import { Footer } from './../../footer/footer';
import { Navbar } from './../../navbar/navbar';
import { Cards } from './cards/cards';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, Banner, Cards],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
=======
import { Component } from '@angular/core';
import { Navbar } from './../../navbar/navbar';
import { Footer } from './../../footer/footer';
import { Banner } from './banner/banner';
import { Cards } from './cards/cards';
import { SubscriptionBanner } from './subscription-banner/subscription-banner';
import { Testimonial } from './testimonial/testimonial'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Navbar,
    Footer,
    Banner,
    Cards,
    SubscriptionBanner,
    Testimonial  
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
>>>>>>> c9ec29d (update data)
})
export class Home {}
