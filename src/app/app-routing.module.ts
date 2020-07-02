import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'blog',
  loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
}, {
  path: 'guide',
  loadChildren: () => import('./guides/guides.module').then(m => m.GuidesModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
