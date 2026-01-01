import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
<<<<<<< HEAD
=======
import { Footer } from './components/footer/footer';
>>>>>>> c9ec29d (update data)

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, Navbar],
=======
  imports: [RouterOutlet, Navbar,Footer],
>>>>>>> c9ec29d (update data)
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('ParryStore');
}
