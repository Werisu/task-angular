import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PainelComponent
  ]
})
export class PainelModule { }
