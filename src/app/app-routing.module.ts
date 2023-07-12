import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './authentication/guard/auth-guard.service';

const routes: Routes = [
  { path: 'todoapp', loadChildren: () => import('./modules/dashboad/dashboad.module').then(m => m.DashboadModule), canActivate: [AuthGuardService] },
  { path: '', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
