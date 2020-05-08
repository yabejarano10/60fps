import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewDetailComponent } from './components/review-detail/review-detail.component';
import { RecomendationComponent } from './components/recomendation/recomendation.component';


const routes: Routes = [{path: '',component: HomeComponent},
                        {path: 'reviews',component: ReviewsComponent},
                        {path: 'reviews/:id',component:ReviewDetailComponent},
                        {path: 'recomendation',component: RecomendationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
