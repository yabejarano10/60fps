import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GamesService } from 'src/app/services/games.service';
import { ReviewsService } from 'src/app/services/reviews.service';
import { Router } from '@angular/router';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games:Game[];
  review:Review[];
  

  constructor(private _gamesService: GamesService,
              private _revService:ReviewsService,
              private router: Router) { }

  ngOnInit() {
    this.games = this._gamesService.getGames();
  }
  openDetail(game:Game){
    let id = this._revService.getReviewDetailbyName(game.name);
    this.router.navigate([`/reviews/${id}`]);
  }
}
