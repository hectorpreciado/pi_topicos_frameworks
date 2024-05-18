import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'pokedex',component:PokeListComponent}
];
