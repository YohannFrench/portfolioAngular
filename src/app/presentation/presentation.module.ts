import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PresentationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PresentationComponent
  ]
})
export class PresentationModule { }
