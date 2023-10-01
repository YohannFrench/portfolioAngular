import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  @Output() scrollingToComponent = new EventEmitter<boolean>(false);

  scrollToProjects(){
    this.scrollingToComponent.emit(true);
  }
}
