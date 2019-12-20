import { Component, Prop, h, Host } from '@stencil/core';

import { AcNeogridShape } from '../../utils/ac-neogrid-shape';

@Component({
  tag: 'ac-brand-button'
})

export class AcBrandButton {

  @Prop({ mutable: true }) theme: string;

  render() {
    return (
      <Host
        class={{
          [`ac-brand-button--${this.theme}`]: this.theme !== undefined,
        }}
      >
        <AcNeogridShape
          class="ac-brand-button__bg"
          style={{ width: '30px' }}
        />
        <div class="ac-brand-button__inner">
          <slot name="icon"/>
        </div>
      </Host>
    )
  }
}
