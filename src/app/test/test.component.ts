import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'pip-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  @Input() text = 'This is a test component';
  @Output() event = new EventEmitter();

  @HostBinding('class.pip-test') klass = true;

  onClick(): void {
    this.event.emit(this.text);
  }
}
