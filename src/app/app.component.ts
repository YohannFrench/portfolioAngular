import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  buttonsMenu!: string[]

  toggleSideNav(buttons: string[]) {
    this.sidenav.toggle();
    this.buttonsMenu = buttons;
  }
}
