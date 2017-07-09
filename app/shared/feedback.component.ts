import { Component, OnChanges, Input, Output, EventEmitter }  from '@angular/core';

@Component({
  selector: 'fd-back',
  moduleId: module.id,
  templateUrl: 'feedback.component.html',
  styleUrls: ['feedback.component.css']
})

export class FeedbackComponent {
  @Input() rating: number = 5;
  starWidth: number;

  @Output() reviewClicked: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 86/5;
  }

  onClick() {
    this.reviewClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
