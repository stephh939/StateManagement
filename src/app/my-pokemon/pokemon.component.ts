import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {PokemonData} from "../shared/PokemonData";
import {Store} from "@ngrx/store";
import {addPokemon} from "../shared/actions/seenPokemon.actions";


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class MyPokemonComponent{
  seenPokemon$: Observable<PokemonData>;

  constructor(private store: Store<{seenPokemon: PokemonData}>) {
    this.seenPokemon$ = store.select('seenPokemon');
    // this.seenPokemon$.subscribe((value:any) => console.log(value));
  }

  addPokemon(pokemonName: string, pokemonTotalStats: number){
    this.store.dispatch(addPokemon({pokemonName, pokemonTotalStats}));
  }

}
