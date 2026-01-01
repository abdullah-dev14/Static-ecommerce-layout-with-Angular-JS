import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  template: `
    <div class="container mt-5 parrot-theme">
      <h1 class="title">Categories</h1>
      <p class="text">Here you can explore all our parrot categories.</p>
    </div>
  `,
  styles: [`
    .parrot-theme {
      background-color: #e6f5e6;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,128,0,0.2);
    }
    .title {
      color: #28a745;
      font-family: 'Comic Sans MS', cursive, sans-serif;
    }
    .text {
      font-size: 16px;
      color: #155724;
    }
  `]
})
export class Categories {}
 