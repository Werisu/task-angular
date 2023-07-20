import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboadRoutingModule } from './dashboad-routing.module';
import { DashboadComponent } from './dashboad.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { PainelModule } from './painel/painel.module';


@NgModule({
  declarations: [
    DashboadComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    DashboadRoutingModule,
    PainelModule
  ]
})
export class DashboadModule { }
