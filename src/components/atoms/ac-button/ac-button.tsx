import { Component, Prop, Element, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'ac-button',
  styleUrl: 'ac-button.scss',
  shadow: true
})
export class AcButton implements ComponentInterface {
  @Element() host: HTMLAcButtonElement;

  /**
   * The HTML5 button type.
   * See https://mdn.io/button
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * The native HTML5 title attribute.
   */
  @Prop() tooltip?: string;

  /**
   * The theme color. The default is white.
   */
  @Prop() theme?: string;

  /**
   * The size of the button:
   * * small - height: 36px
   * * big - height: 50px
   * * default - 44px
   */
  @Prop() size?: 'small' | 'big';

  /**
   * Fill mode:
   * * flat - No borders and no raising
   * * solid - Default raised button
   * * clear - No background and no borders
   */
  @Prop() fill: 'clear' | 'solid' | 'flat' = 'solid';

  /**
   * An optional link to open when click on it.
   * Turns the button into a anchor element.
   */
  @Prop() href?: string;

  /**
   * The HTML5 native anchor target to handle the href property.
   */
  @Prop() target?: '_blank' | '_self' | '_parent' | '_top' | string;

  /**
   * Icon only mode, with a square button, centered icon.
   */
  @Prop() iconOnly: boolean;

  /**
   * The HTML5 native disable prop.
   */
  @Prop() disabled?: boolean;


  hostData() {
    return {
      attribute: 'button',
      'data-type': this.type,
      class: {
        [`ac-button--${this.theme}`]: this.theme !== undefined,
        [`ac-button--${this.size}`]: this.size !== undefined,
        [`ac-button--${this.fill}`]: this.fill !== undefined,
        [`ac-button--icon-only`]: this.iconOnly,
        [`ac-button--disabled`]: this.disabled
      }
    };
  }

  render() {
    const TagType = this.href ? 'a' : 'button';
    const attrs = (TagType === 'button')
      ? { type: this.type }
      : { href: this.href, target: this.target };

    return (
      <TagType
        {...attrs}
        disabled={this.disabled}
      >
        <slot name="icon-start" />
        <span class="ac-button__text">
          <slot />
        </span>
        <slot name="icon-end" />
      </TagType>
    );
  }
}