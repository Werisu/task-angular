import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'painel', loadChildren: () => import('./modules/dashboad/dashboad.module').then(m => m.DashboadModule) },
  { path: 'kanban', loadChildren: () => import('./modules/kanban/kanban.module').then(m => m.KanbanModule) },
  { path: '', redirectTo: 'painel', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
