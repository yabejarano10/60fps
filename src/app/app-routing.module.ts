import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewDetailComponent } from './components/review-detail/review-detail.component';


const routes: Routes = [{path: '',component: HomeComponent},
                        {path: 'reviews',component: ReviewsComponent},
                        {path: 'reviews/:id',component:ReviewDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
