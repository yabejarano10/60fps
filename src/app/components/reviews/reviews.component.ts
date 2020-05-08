import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews.service';
import { Review } from 'src/app/models/review';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  idSelected:number;

  allReviews:Review[] = [];

  actionRevs:Review[] = [];
  terrorRevs:Review[] = [];
  rolRevs:Review[] = [];
  adventureRevs:Review[] = [];
  platformRevs:Review[] = [];
  metroidvaniaRevs:Review[] = [];
  carsRevs:Review[] =[];
  simulationRevs:Review[] =[];
  survivalRevs:Review[] = [];

  constructor(private _reviewsService: ReviewsService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.allReviews = this._reviewsService.getAllReviews();
    this.allReviews.forEach(rev => {
      switch(rev.genre){
        case "Accion":{
          this.actionRevs.push(rev);
          break;
        }
        case "Terror":{
          this.terrorRevs.push(rev);
          break;
        }
        case "Rol":{
          this.rolRevs.push(rev);
          break;
        }
        case "Aventuras":{
          this.adventureRevs.push(rev);
          break;
        }
        case "Plataformas":{
          this.platformRevs.push(rev);
          break;
        }
        case "Metroidvania":{
          this.metroidvaniaRevs.push(rev);
          break;
        }
        case "Autos":{
          this.carsRevs.push(rev);
          break;
        }
        case "Simulador":{
          this.simulationRevs.push(rev);
          break;
        }
        case "Survival":{
          this.survivalRevs.push(rev);
          break;
        }
      }
    });
  }
  getIndex(title:string){
   for(let i = 0;i<this.allReviews.length;i++)
   {
     if(this.allReviews[i].title === title){
       this.idSelected = i;
       this.openDetail(this.idSelected);
       break;
     }
   }
  }
  openDetail(id){
    this.router.navigate([`/reviews/${id}`]);
  }

}
