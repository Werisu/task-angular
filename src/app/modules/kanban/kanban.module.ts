import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanComponent } from './kanban.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@NgModule({
  declarations: [
    KanbanComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    ReactiveFormsModule,
    AngularFirestoreModule
  ]
})
export class KanbanModule { }
