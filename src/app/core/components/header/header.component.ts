import { Component, HostListener, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Output() sidenavToggle = new EventEmitter<string[]>();

  mobileSize: boolean = false;
  buttons!:string []

  constructor(){}

  ngOnInit(): void {
    this.buttons = [
      'About',
      'Projects',
      'Contact'
    ]
  }

  onToggleSidenav() {
    this.sidenavToggle.emit(this.buttons);
  }

  onScroll(){
    
  }

  @HostListener('window:resize') onResize(){
    screen.width <= 480 ? this.mobileSize = true : this.mobileSize = false;
  }

}
