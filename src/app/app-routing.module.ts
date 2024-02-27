import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { IniciativasComponent } from './pages/iniciativas/iniciativas.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent

  },
  {
    path:'content',
    component:ContentComponent

  },
  {
    path:'explore',
    component:ExploreComponent
  },
  {
    path:'iniciativas',
    component:IniciativasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
