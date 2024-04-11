import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { pokemonReducer } from "./shared/reducers/seenPokemon.reducer";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCard, MatCardContent} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableModule
} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MyPokemonComponent} from "./my-pokemon/pokemon.component";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    MyPokemonComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: counterReducer}, {initialState: {}}),
    // StoreModule.forRoot({seenPokemon: pokemonReducer}, {initialState: {}}),
    MatCardContent,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    HttpClientModule,
    MatTableModule,
    NgOptimizedImage,
    MatCard
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
