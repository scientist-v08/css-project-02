import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <header class="header">

      <section class="header__section section">
        <h1 class="header__h1">Little Taco Shop</h1>
        <button class="section__button">
          <div class="section__icon"></div>
        </button>
      </section>

      <nav class="header__nav">
        <ul class="header__ul">
          <li class="header__li">
            <a href="/">Home</a>
          </li>
          <li class="header__li">
            <a href="#menu">Menu</a>
          </li>
          <li class="header__li">
            <a href="hours">Hours</a>
          </li>
          <li class="header__li">
            <a href="contact">Contact</a>
          </li>
          <li class="header__li">
            <a href="about">About</a>
          </li>
        </ul>
      </nav>

    </header>

    <div class="body">
      <router-outlet></router-outlet>
    </div>

    <footer class="footer">
      <p><span class="nowrap">Copyright &copy;</span><span class="nowrap"> Little Taco Shop</span></p>
    </footer>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'css-project-02';
}
