import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AbilitiesDetails, BaseClass, Pokemon, PokemonType } from '../../models/pokemon.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokeService } from '../../services/poke.service';
import { PokeHelperService } from '../../services/poke-helper.service';


@Component({
  selector: 'app-abilitiesdetails',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './abilitiesdetails.component.html',
  styleUrl: './abilitiesdetails.component.css'
})
export class AbilitiesdetailsComponent implements OnInit {

  abilities: BaseClass;
  pokemon: Pokemon;
  ability: AbilitiesDetails[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private pokeService: PokeService, private pokeHelperService: PokeHelperService) {
    this.abilities = data.abilities;
    this.pokemon = data.pokemon;
    this.ability = [];
  }

  ngOnInit(): void {
    this.getAbility(this.abilities.url);
  }

  upperFirstLetter(word: string, gen?: boolean): string {
    return this.pokeHelperService.upperFirstLetter(word, gen);
  }

  getAbility(abilityUrl: string): void {
    this.pokeService.getAbility(abilityUrl).subscribe((data: any) => {
      this.ability.push(data);
    });
  }

  getColorForType(type: string): string {
    return PokemonType[type as keyof typeof PokemonType];
  }


}
