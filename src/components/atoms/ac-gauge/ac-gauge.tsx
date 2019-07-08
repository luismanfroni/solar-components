import { Component, Prop } from '@stencil/core';

import { AcNeogridOverlaySvg } from '../../utils/ac-neogrid-overlay-svg';

@Component({
  tag: 'ac-gauge',
  styleUrl: 'ac-gauge.scss',
  shadow: false
})

export class AcGauge {

  @Prop({ reflectToAttr: true }) theme = 'primary';

  @Prop({ reflectToAttr: true, mutable: true }) percent: number;

  hostData() {
    return {
      class: {
        [`ac-gauge--${this.theme}`]: this.theme !== undefined,
        'ac-gauge--void': !this.percent || this.percent === 0
      }
    };
  }

  render() {
    const offset = 272 - (this.percent / 100) * 272;
    return [
      <AcNeogridOverlaySvg
        class="ac-gauge__meter"
        style={{
          strokeDashoffset: offset + '%',
          width: '100px',
        }}
      />,
      <AcNeogridOverlaySvg
        class="ac-gauge__bg"
        style={{ width: '100px' }}
      />,
      <div class="ac-gauge__inner">
        <slot name="icon" />
      </div>
    ];
  }
}
