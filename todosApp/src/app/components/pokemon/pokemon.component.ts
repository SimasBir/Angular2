import { Component, OnInit } from '@angular/core';
import Pokemon from 'src/app/models/pokemon/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  public pokemon?: Pokemon
  public id?: number;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    const max = 900;
    
    for (let i = 0; i < 10; i++) {
      let id = Math.floor(Math.random() * (max - 1) + 1);
      this.pokemonService.getPokemon(id).subscribe((pokemon: Pokemon) => {
        this.pokemons.push(pokemon);
      })
    }
  }

}
