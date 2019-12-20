import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessBarComponent } from './process-bar/process-bar.component';

const routes: Routes = [
  {
   path: 'process-bar',
   component: ProcessBarComponent,
   data: { title: 'Process Bar' }
 },
 { path: '',
   redirectTo: '/process-bar',
   pathMatch: 'full'
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
