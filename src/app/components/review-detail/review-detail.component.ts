import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from 'src/app/services/reviews.service';
import { Review } from 'src/app/models/review';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  review:Review;
  game:Game;
  constructor(private route: ActivatedRoute,
              private _revService:ReviewsService,
              private _gameService:GamesService) { }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.review = this._revService.getReviewDetail(id);
    this.game = this._gameService.getGamebyName(this.review.game);
  }

}
