import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Pokemon from '../models/pokemon/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  public getPokemon(id:number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${environment.pokemonAPI}/${id}`);
  }

}
