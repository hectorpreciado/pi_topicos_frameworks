import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MoveDetails, Pokemon, PokemonType } from '../../models/pokemon.model';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AbilitiesdetailsComponent } from '../abilitiesdetails/abilitiesdetails.component';
import { PokeService } from '../../services/poke.service';
import { PokeHelperService } from '../../services/poke-helper.service';
import { MovesComponent } from "../moves/moves.component";

@Component({
    selector: 'app-pokemon-details',
    standalone: true,
    templateUrl: './pokemon-details.component.html',
    styleUrl: './pokemon-details.component.css',
    imports: [
        MatCardModule,
        CommonModule,
        MatProgressBarModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatPaginatorModule,
        MovesComponent
    ]
})
export default class PokemonDetailsComponent implements OnInit {

  pokemon!:Pokemon;
  total!:number;
  moves:MoveDetails[];
  displayedColumns=['name','type','power','accuracy'];
  dataSource = new MatTableDataSource<MoveDetails>();
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private pokeService: PokeService, private pokeHelperService: PokeHelperService) {
    this.pokemon = data.pokemon;
    this.moves = [];
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.calculateTotalStats();
  }

  getColorForType(type: string): string {
    return PokemonType[type as keyof typeof PokemonType];
  }

  upperFirstLetter(word: string): string {
    return this.pokeHelperService.upperFirstLetter(word);
  }

  getTypeDetailImageUrl(type: string): string {
    return this.pokeHelperService.getTypeDetailImageUrl(type);
  }

  calculateTotalStats(): void {
    this.total = 0;
    this.pokemon.stats.forEach(stat => {
      this.total = this.total + stat.base_stat;
    });
  }

  abilitiesModal(abilities: any): void {
    this.dialog.open(AbilitiesdetailsComponent, {
      data: {
        abilities,
        pokemon: this.pokemon
      },
    });
  }

}
