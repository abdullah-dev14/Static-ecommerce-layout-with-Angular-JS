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
})
export class Home {}
