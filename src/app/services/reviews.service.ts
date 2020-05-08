import { Injectable } from '@angular/core';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  allReviews =[];
  constructor() { 
    this.allReviews= [{
      title: "Valiant hearts",
      genre:"Plataformas",
      game:"valiant hearts",
      fullReview: "TEST TEST TES TES TES S ET S ETTS"
    },
    {
      title: "Hellblade",
      genre:"Aventuras",
      game:"Hellblade",
      fullReview: "TEST TEST TES TES TES S ET S ETTS"
    },
    {
      title: "Gears 5",
      genre:"Accion",
      game:"Gears 5",
      fullReview: "TEST TEST TES TES TES S ET S ETTS"
    },
    {
      title: "Mass effect 2",
      genre:"Accion",
      game:"Mass effect 2",
      fullReview: "TEST TEST TES TES TES S ET S ETTS"
    }]
  }

  getAllReviews(){
    
    return this.allReviews;
  }
  getReviewDetail(id:number){
    return this.allReviews[id];
  }
  getReviewDetailbyName(name:string){
    for(let i = 0; i<this.allReviews.length;i++){
      if(this.allReviews[i].game === name){
        return i;
      }
    }
  }
}
