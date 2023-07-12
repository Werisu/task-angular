import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboadComponent } from './dashboad.component';
import { PainelComponent } from './painel/painel.component';

const routes: Routes = [
  { path: '', component: DashboadComponent, children: [
    { path: 'home', component: PainelComponent },
    { path: 'kanban', loadChildren: () => import('../kanban/kanban.module').then(m => m.KanbanModule) },
    { path: 'perfil', loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilModule) },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboadRoutingModule { }
