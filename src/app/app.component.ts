import {Component, OnInit} from '@angular/core';
import { DataService } from "./data.service";
import {
  MatTableDataSource
} from "@angular/material/table";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  data: any;
  displayedColumnStats: string[] = ['pokemonBaseStatName', 'pokemonBaseStat'];
  dataSource: any;
  totalBaseStats = 0;
  seenPokemon:Array<any> =[];
  pokemonImage:any;


  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadPokemon();
  }

  addSeenPokemon(pokemonName: string, pokemonTotalStats: number){
    this.seenPokemon.push({pokemonName, pokemonTotalStats});
  }

  loadPokemon(){
    this.dataService.getData().subscribe(response => {
      this.totalBaseStats = 0;
      this.data = response;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.data.stats.forEach((el:any) => this.totalBaseStats += el.base_stat);
      console.log(this.totalBaseStats);
      this.pokemonImage = this.data.sprites.front_default;
      this.addSeenPokemon(this.data.name, this.totalBaseStats);
    });

    if(this.seenPokemon.length+1 > 1){
      console.log(this.seenPokemon);
      const value = this.seenPokemon.slice(-1);
      console.log("Sliced Value: ");
      console.log(value);
      this.totalBaseStats = value.values().next().value;
    }

  }



}
