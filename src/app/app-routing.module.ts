import { StyleGuideComponent } from './components/style-guide/style-guide.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'styleguide',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: StyleGuideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
