import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './components/portfolio.component';



@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
