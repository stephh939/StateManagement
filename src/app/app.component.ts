import {Component, OnInit} from '@angular/core';
import { DataService } from "./data.service";
import {
  MatTableDataSource
} from "@angular/material/table";
import {createConsoleLogger} from "@angular-devkit/core/node";

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
      console.log(this.seenPokemon);
      this.pokemonImage = this.data.sprites.front_default;
      this.addSeenPokemon(this.data.name, this.totalBaseStats);


      console.log("current pokemon: " + this.seenPokemon.at(this.seenPokemon.length-1).pokemonName);
      console.log("total base stats: " + this.totalBaseStats);
      console.log("length of seen pokemon list " + this.seenPokemon.length);
      console.log("______________________________")


    });
  }

}
