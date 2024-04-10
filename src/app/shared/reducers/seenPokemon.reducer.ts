import {createReducer, on, State} from '@ngrx/store';
import {addPokemon} from "../actions/seenPokemon.actions";
import {PokemonData} from "../PokemonData";

export const initialState=
  {
    pokemonName: "",
    pokemonTotalStats: 0
  };

export const pokemonReducer = createReducer(
  initialState,
  on(addPokemon, (state) => ({pokemonName: "testingggg", pokemonTotalStats: 100})),
  // on(removePokemon, (state) => state),
  // on(clearPokemon, (state) => (state = []))
);
