import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarriageComponent } from './marriage/marriage.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { ErrorpageComponent } from './error/errorpage/errorpage.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule),
},
  { path: 'Birthday', component: BirthdayComponent },
   { path: 'Marriage', component: MarriageComponent },
  { path: 'no_access', component: ErrorpageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
