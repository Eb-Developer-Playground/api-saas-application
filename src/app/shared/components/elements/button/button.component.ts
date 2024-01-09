import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
/**
 * Reusable button component with configurable states and behaviors.
 */

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  /**
   * Indicates the button text.
   */
    @Input() btnText: string = 'default';

  /**
   * The state of the button: 'default', 'primary', 'warning', 'danger'.
   */
  @Input() state: 'default' | 'primary' | 'warning' | 'danger' = 'default';

  /**
   * Indicates whether the button is disabled.
   */
  @Input() disabled: boolean = false;

  /**
   * The label for the arial-label attribute
   */
  @Input() ariaLabel: string = ''

  /**
   * The type of the button: 'button' or 'submit'.
   */
  @Input() type: 'button' | 'submit' = 'button';

  /**
   * Event emitted when the button is clicked.
   */
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    // Perform initialization tasks if needed
  }

  ngOnInit(): void {

  }


  /**
   * Generates CSS classes based on the button's state.
   * @returns A string of CSS classes.
   */
  getButtonColor(): string {
    switch (this.state) {
      case 'primary':
        return 'primary';
      case 'warning':
        return 'warn';
      case 'danger':
        return 'accent';
      default:
        return '';
    }
  }

  /**
   * Handles button click event.
   * Emits 'buttonClick' event if the button is not disabled.
   */
  handleClick(): void {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }
}