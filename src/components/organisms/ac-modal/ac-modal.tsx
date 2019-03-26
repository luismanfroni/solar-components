import { Component, Prop, Element, Method, Event, EventEmitter } from '@stencil/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TransitionBehavior, TransitionComponent } from '../../../behaviors/transition-behavior';
import { Bind } from '../../../utils/lang/bind';

/**
 * Accera's full-featured modal webcomponent.
 */
@Component({
  tag: 'ac-modal',
  styleUrl: 'ac-modal.scss',
})
export class AcModal implements TransitionComponent {
  /**
   * The instance of the transition behavior used to animate this component.
   */
  transitionBehavior = new TransitionBehavior(this);

  @Element() host: HTMLAcModalElement;

  /**
   * The title that will be displayed on the modal.
   */
  @Prop() title: string;

  /**
   * Dispatched when the modal closes.
   */
  @Event({ eventName: 'close' }) closeEv: EventEmitter<void>;

  componentWillLoad() {}
  componentDidUnload() {}

  /**
   * Close the modal programmatically and dispatch the close event.
   */
  @Method()
  @Bind
  close() {
    this.closeEv.emit();
    return this.host.remove();
  }

  render() {

    return (
      <div class="ac-modal__panel">
        <header class="ac-modal__header">
          <h1>{this.title}</h1>
          <ac-button fill="clear" theme="primary" icon-only onClick={this.close}>
            <ac-fa-icon icon={faTimes} />
          </ac-button>
        </header>
        <section class="ac-modal__content">
          <slot />
        </section>
        <footer class="ac-modal__footer">
          <slot name="modal-actions" />
        </footer>
      </div>
    );
  }
}
