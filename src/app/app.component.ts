import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from './components/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet,
      HeaderComponent,
      HomeComponent,
      LoadingComponent,
      PokeListComponent,
      RouterLink,
      RouterLinkActive,

    ]
})
export class AppComponent {
  title = 'poke_api';
}
