import {createAction, props} from "@ngrx/store";


export const addPokemon = createAction('[Pokemon Component] Add Pokemon', props<{pokemonName: string, pokemonTotalStats: number}>());
// export const removePokémon = createAction('[Pokemon Component] Remove Pokemon');
// export const clearPokemon = createAction('[Pokemon Component] Clear');



