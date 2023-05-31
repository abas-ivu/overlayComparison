import { Component, ElementRef } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-popper-js',
  templateUrl: './popper-js.component.html',
  styleUrls: ['./popper-js.component.css']
})
export class PopperJsComponent {
  private popperInstance: any;

  constructor(private elementRef: ElementRef) {}

  create() {
    const button = this.elementRef.nativeElement.querySelector('#button');
    const tooltip = this.elementRef.nativeElement.querySelector('#tooltip');

    this.popperInstance = createPopper(button, tooltip, {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        }
      ],
    });
  }

  destroy() {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  show() {
    const tooltip = this.elementRef.nativeElement.querySelector('#tooltip');
    tooltip.setAttribute('data-show', '');
    this.create();
  }

  hide() {
    const tooltip = this.elementRef.nativeElement.querySelector('#tooltip');
    tooltip.removeAttribute('data-show');
    this.destroy();
  }
}
