import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule} from '@angular/material/card';
import axios from 'axios';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  card: any[] = [
    {title: 'Pokedex', image: '../../../assets/pokedex.png', route: '/pokedex'}
  ];

  getAxiosData(){
    const api = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    axios.get(api).then(function(response){
      console.log(response);
    })
  }

}
