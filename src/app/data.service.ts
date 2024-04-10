import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  private randomPokemonId = 1;
  private totalPokemon = 1025;

  getData(): Observable<any> {
    this.randomPokemonId = Math.round(Math.random() * this.totalPokemon);
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.randomPokemonId);
  }
}
