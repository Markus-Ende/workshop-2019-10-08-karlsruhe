import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'me-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent {
  @Output() titleClick = new EventEmitter<string>();
  @Input() title = 'No Title';

  onTitleClick() {
    this.titleClick.emit(this.title);
  }
}
