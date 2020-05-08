import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games:Game[];

  constructor(private _gamesService: GamesService) { }

  ngOnInit() {
    this.games = this._gamesService.getGames();
  }

}
