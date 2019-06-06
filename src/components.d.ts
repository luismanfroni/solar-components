/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  CustomValidityState,
  ValidatorFn,
} from './utils/validations/validations';
import {
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {
  SelectOption,
} from './components/molecules/ac-select/ac-select';
import {
  ControllerComponentOptions,
} from './behaviors/controller-behavior/controller-behavior';
import {
  AcModal,
} from './components/organisms/ac-modal/ac-modal';
import {
  AcOverlay,
} from './components/portals/ac-overlay/ac-overlay';
import {
  AcPanel,
} from './components/organisms/ac-panel/ac-panel';
import {
  AcPopper,
} from './components/portals/ac-popper/ac-popper';
import {
  Placement,
  PopperOptions,
} from 'popper.js';


export namespace Components {

  interface AcButton {
    /**
    * The HTML5 native disable prop.
    */
    'disabled'?: boolean;
    /**
    * Button in width mode.
    */
    'expand': 'block' | 'circle';
    /**
    * Fill mode: * flat - No borders and no raising * solid - Raised button, default * clear - No background and no borders
    */
    'fill': 'clear' | 'solid' | 'flat';
    /**
    * An optional link to open when click on it. Turns the button into a anchor element.
    */
    'href'?: string;
    /**
    * Icon only mode, with a square button, centered icon.
    */
    'iconOnly': boolean;
    /**
    * Set the loading mode, showing a loading icon.
    */
    'loading': boolean;
    /**
    * The size of the button: * small - height: 36px * big - height: 50px * default - 44px
    */
    'size'?: 'small' | 'big';
    /**
    * The HTML5 native anchor target to handle the href property.
    */
    'target'?: '_blank' | '_self' | '_parent' | '_top' | string;
    /**
    * The theme color defined in the color palette. The default is white.
    */
    'theme'?: string;
    /**
    * When hover this button, present a tooltip text.
    */
    'tooltip'?: string;
    /**
    * The HTML5 button type. See https://mdn.io/button
    */
    'type': 'button' | 'submit' | 'reset';
  }
  interface AcButtonAttributes extends StencilHTMLAttributes {
    /**
    * The HTML5 native disable prop.
    */
    'disabled'?: boolean;
    /**
    * Button in width mode.
    */
    'expand'?: 'block' | 'circle';
    /**
    * Fill mode: * flat - No borders and no raising * solid - Raised button, default * clear - No background and no borders
    */
    'fill'?: 'clear' | 'solid' | 'flat';
    /**
    * An optional link to open when click on it. Turns the button into a anchor element.
    */
    'href'?: string;
    /**
    * Icon only mode, with a square button, centered icon.
    */
    'iconOnly'?: boolean;
    /**
    * Set the loading mode, showing a loading icon.
    */
    'loading'?: boolean;
    /**
    * The size of the button: * small - height: 36px * big - height: 50px * default - 44px
    */
    'size'?: 'small' | 'big';
    /**
    * The HTML5 native anchor target to handle the href property.
    */
    'target'?: '_blank' | '_self' | '_parent' | '_top' | string;
    /**
    * The theme color defined in the color palette. The default is white.
    */
    'theme'?: string;
    /**
    * When hover this button, present a tooltip text.
    */
    'tooltip'?: string;
    /**
    * The HTML5 button type. See https://mdn.io/button
    */
    'type'?: 'button' | 'submit' | 'reset';
  }

  interface AcCard {}
  interface AcCardAttributes extends StencilHTMLAttributes {}

  interface AcCheck {
    /**
    * The actual checked state.
    */
    'checked': boolean;
    /**
    * Set the label direction.
    */
    'direction': 'left' | 'right';
    /**
    * The native disabled mode.
    */
    'disabled': boolean;
    /**
    * Error state and message of this field.
    */
    'error': string;
    /**
    * The helper text to guide the user.
    */
    'helperText': string;
    /**
    * The textual label of this field.
    */
    'label': string;
    /**
    * The HTML field name.
    */
    'name': string;
    /**
    * Mark this field as required.
    */
    'required': string | boolean;
    /**
    * The type of this field.
    */
    'type': 'radio' | 'checkbox';
    /**
    * Validation pipeline for this field.
    */
    'validator': ValidatorFn | ValidatorFn[];
    /**
    * The validity state.
    */
    'validity': CustomValidityState;
    /**
    * The HTML field value.
    */
    'value': string;
  }
  interface AcCheckAttributes extends StencilHTMLAttributes {
    /**
    * The actual checked state.
    */
    'checked'?: boolean;
    /**
    * Set the label direction.
    */
    'direction'?: 'left' | 'right';
    /**
    * The native disabled mode.
    */
    'disabled'?: boolean;
    /**
    * Error state and message of this field.
    */
    'error'?: string;
    /**
    * The helper text to guide the user.
    */
    'helperText'?: string;
    /**
    * The textual label of this field.
    */
    'label'?: string;
    /**
    * The HTML field name.
    */
    'name'?: string;
    /**
    * Mark this field as required.
    */
    'required'?: string | boolean;
    /**
    * The type of this field.
    */
    'type'?: 'radio' | 'checkbox';
    /**
    * Validation pipeline for this field.
    */
    'validator'?: ValidatorFn | ValidatorFn[];
    /**
    * The validity state.
    */
    'validity'?: CustomValidityState;
    /**
    * The HTML field value.
    */
    'value'?: string;
  }

  interface AcFaIcon {
    /**
    * Set an animation defined in the ac-fa-icon.scss
    */
    'anim': string;
    /**
    * The icon imported from @fortawesome/free-solid-svg-icons.
    */
    'icon': IconDefinition;
    /**
    * The size of the icon in px.
    */
    'size': number;
  }
  interface AcFaIconAttributes extends StencilHTMLAttributes {
    /**
    * Set an animation defined in the ac-fa-icon.scss
    */
    'anim'?: string;
    /**
    * The icon imported from @fortawesome/free-solid-svg-icons.
    */
    'icon'?: IconDefinition;
    /**
    * The size of the icon in px.
    */
    'size'?: number;
  }

  interface AcHeader {
    'scrolled': boolean;
  }
  interface AcHeaderAttributes extends StencilHTMLAttributes {
    'scrolled'?: boolean;
  }

  interface AcInputBase {
    /**
    * The native HTMLInputElement autocapitalize attribute.
    */
    'autocapitalize': string;
    /**
    * The native HTMLInputElement autocomplete attribute.
    */
    'autocomplete': string;
    /**
    * The native HTMLInputElement autofocus attribute.
    */
    'autofocus': boolean;
    /**
    * The HTMLInputElement disabled attribute.
    */
    'disabled': boolean;
    'getNativeInput': () => Promise<HTMLInputElement>;
    /**
    * The label text of the this input group.
    */
    'label': string;
    /**
    * The native HTMLInputElement max attribute.
    */
    'max': number;
    /**
    * The native HTMLInputElement maxlength attribute.
    */
    'maxlength': number;
    /**
    * The native HTMLInputElement min attribute.
    */
    'min': number;
    /**
    * The native HTMLInputElement min attribute.
    */
    'minlength': number;
    /**
    * The render mode of the input.
    */
    'mode': 'compact';
    /**
    * The native HTMLInputElement name attribute.
    */
    'name': string;
    /**
    * The native HTMLInputElement pattern attribute.
    */
    'pattern': string;
    /**
    * Enable readonly.
    */
    'readonly': boolean;
    /**
    * The native HTMLInputElement required attribute.
    */
    'required': boolean;
    /**
    * Set focus state in the native input.
    */
    'setFocus': () => void;
    /**
    * The type of the internal input.
    */
    'type': string;
    /**
    * The value of the internal input.
    */
    'value': any;
  }
  interface AcInputBaseAttributes extends StencilHTMLAttributes {
    /**
    * The native HTMLInputElement autocapitalize attribute.
    */
    'autocapitalize'?: string;
    /**
    * The native HTMLInputElement autocomplete attribute.
    */
    'autocomplete'?: string;
    /**
    * The native HTMLInputElement autofocus attribute.
    */
    'autofocus'?: boolean;
    /**
    * The HTMLInputElement disabled attribute.
    */
    'disabled'?: boolean;
    /**
    * The label text of the this input group.
    */
    'label'?: string;
    /**
    * The native HTMLInputElement max attribute.
    */
    'max'?: number;
    /**
    * The native HTMLInputElement maxlength attribute.
    */
    'maxlength'?: number;
    /**
    * The native HTMLInputElement min attribute.
    */
    'min'?: number;
    /**
    * The native HTMLInputElement min attribute.
    */
    'minlength'?: number;
    /**
    * The render mode of the input.
    */
    'mode'?: 'compact';
    /**
    * The native HTMLInputElement name attribute.
    */
    'name'?: string;
    /**
    * The native HTMLInputElement pattern attribute.
    */
    'pattern'?: string;
    /**
    * Enable readonly.
    */
    'readonly'?: boolean;
    /**
    * The native HTMLInputElement required attribute.
    */
    'required'?: boolean;
    /**
    * The type of the internal input.
    */
    'type'?: string;
    /**
    * The value of the internal input.
    */
    'value'?: any;
  }

  interface AcNavdrawer {
    /**
    * The navdrawer mode.
    */
    'compact': boolean;
    /**
    * The color theme.
    */
    'theme': string;
  }
  interface AcNavdrawerAttributes extends StencilHTMLAttributes {
    /**
    * The navdrawer mode.
    */
    'compact'?: boolean;
    /**
    * The color theme.
    */
    'theme'?: string;
  }

  interface AcStepper {
    /**
    * The number of concluded steps.
    */
    'done': number;
    /**
    * Increments the count of concluded steps.
    */
    'next': () => void;
    /**
    * Decrement the count of concluded steps.
    */
    'previous': () => void;
    /**
    * The count of steps to be displayed. TODO: It mighty support an array of steps in the future.
    */
    'steps': number;
  }
  interface AcStepperAttributes extends StencilHTMLAttributes {
    /**
    * The number of concluded steps.
    */
    'done'?: number;
    /**
    * Dispatched when the steps state changes.
    */
    'onChange'?: (event: CustomEvent<{ index: number }>) => void;
    /**
    * The count of steps to be displayed. TODO: It mighty support an array of steps in the future.
    */
    'steps'?: number;
  }

  interface AcInput {
    /**
    * The native HTMLInputElement autocapitalize attribute.
    */
    'autocapitalize': string;
    /**
    * The native HTMLInputElement autocomplete attribute.
    */
    'autocomplete': string;
    /**
    * The native HTMLInputElement autofocus attribute.
    */
    'autofocus': boolean;
    /**
    * The disabled mode.
    */
    'disabled': boolean;
    /**
    * Set the component in the error state with a message.
    */
    'error': string | boolean;
    /**
    * The FormFieldBehavior instance.
    */
    'formFieldBehavior': any;
    'getNativeFormField': () => any;
    /**
    * Get the unmasked value.
    */
    'getRawValue': (type?: string) => Promise<any>;
    /**
    * The helper text to guide the user.
    */
    'helperText': string;
    /**
    * The label text of the this input group.
    */
    'label': string;
    /**
    * The mask of the input.
    */
    'mask': string;
    /**
    * The native HTMLInputElement max attribute.
    */
    'max': number;
    /**
    * The native HTMLInputElement maxlength attribute.
    */
    'maxlength': number;
    /**
    * The native HTMLInputElement min attribute.
    */
    'min': number;
    /**
    * The native HTMLInputElement min attribute.
    */
    'minlength': number;
    /**
    * The HTML input field's name.
    */
    'name': string;
    /**
    * The native HTMLInputElement pattern attribute.
    */
    'pattern': string;
    /**
    * The native HTMLInputElement required attribute.
    */
    'required': boolean;
    /**
    * Set focus state in the native input.
    */
    'setFocus': () => any;
    /**
    * Update the value and run validations as if the user change it manually. When to use each: input.value will only update the value, useful to set the initial value of the input. input.setValue is useful to use values that are automatically set by an user's action, setting the unchecked state to the form.
    */
    'setValue': (value: any) => void;
    /**
    * The type of the internal input.
    */
    'type': string;
    /**
    * Request check validation on each input key event.
    */
    'validateOnKeyup': boolean;
    /**
    * The validations that this field need. This validations are checked on: - Blur event - Form submit event - Each keyUp event ONLY IF the validateOnKeyup property is present.
    */
    'validator': ValidatorFn | ValidatorFn[];
    /**
    * Get the last validity state from the checkValidity.
    */
    'validity': CustomValidityState;
    /**
    * The value of the internal input.
    */
    'value': any;
  }
  interface AcInputAttributes extends StencilHTMLAttributes {
    /**
    * The native HTMLInputElement autocapitalize attribute.
    */
    'autocapitalize'?: string;
    /**
    * The native HTMLInputElement autocomplete attribute.
    */
    'autocomplete'?: string;
    /**
    * The native HTMLInputElement autofocus attribute.
    */
    'autofocus'?: boolean;
    /**
    * The disabled mode.
    */
    'disabled'?: boolean;
    /**
    * Set the component in the error state with a message.
    */
    'error'?: string | boolean;
    /**
    * The FormFieldBehavior instance.
    */
    'formFieldBehavior'?: any;
    /**
    * The helper text to guide the user.
    */
    'helperText'?: string;
    /**
    * The label text of the this input group.
    */
    'label'?: string;
    /**
    * The mask of the input.
    */
    'mask'?: string;
    /**
    * The native HTMLInputElement max attribute.
    */
    'max'?: number;
    /**
    * The native HTMLInputElement maxlength attribute.
    */
    'maxlength'?: number;
    /**
    * The native HTMLInputElement min attribute.
    */
    'min'?: number;
    /**
    * The native HTMLInputElement min attribute.
    */
    'minlength'?: number;
    /**
    * The HTML input field's name.
    */
    'name'?: string;
    /**
    * The native HTMLInputElement pattern attribute.
    */
    'pattern'?: string;
    /**
    * The native HTMLInputElement required attribute.
    */
    'required'?: boolean;
    /**
    * The type of the internal input.
    */
    'type'?: string;
    /**
    * Request check validation on each input key event.
    */
    'validateOnKeyup'?: boolean;
    /**
    * The validations that this field need. This validations are checked on: - Blur event - Form submit event - Each keyUp event ONLY IF the validateOnKeyup property is present.
    */
    'validator'?: ValidatorFn | ValidatorFn[];
    /**
    * Get the last validity state from the checkValidity.
    */
    'validity'?: CustomValidityState;
    /**
    * The value of the internal input.
    */
    'value'?: any;
  }

  interface AcMenuItem {
    'href': string;
    'iconOnly': boolean;
  }
  interface AcMenuItemAttributes extends StencilHTMLAttributes {
    'href'?: string;
    'iconOnly'?: boolean;
  }

  interface AcMenu {
    'iconOnly': boolean;
  }
  interface AcMenuAttributes extends StencilHTMLAttributes {
    'iconOnly'?: boolean;
  }

  interface AcSelect {
    /**
    * Set the disabled mode.
    */
    'disabled': boolean;
    /**
    * Set the field in the error state with a message.
    */
    'error': string | boolean;
    /**
    * The instance of the FormFieldBehavior.
    */
    'formFieldBehavior': any;
    'getNativeFormField': () => Promise<HTMLInputElement>;
    /**
    * The helper text to guide the user.
    */
    'helperText': string;
    /**
    * The label text of the this input group.
    */
    'label': string;
    /**
    * Set the loading mode, showing a loading icon.
    */
    'loading': boolean;
    /**
    * If true, the component will handle multiple selected items.
    */
    'multiple': boolean;
    /**
    * The name of the internal input.
    */
    'name': string;
    /**
    * The options that will be displayed in the panel.
    */
    'options': SelectOption[];
    /**
    * The native required attribute.
    */
    'required': boolean;
    /**
    * The validator functions.
    */
    'validator': ValidatorFn | ValidatorFn[];
    /**
    * The validity state.
    */
    'validity': CustomValidityState;
    /**
    * The value of the internal input.
    */
    'value': any[] | any;
  }
  interface AcSelectAttributes extends StencilHTMLAttributes {
    /**
    * Set the disabled mode.
    */
    'disabled'?: boolean;
    /**
    * Set the field in the error state with a message.
    */
    'error'?: string | boolean;
    /**
    * The instance of the FormFieldBehavior.
    */
    'formFieldBehavior'?: any;
    /**
    * The helper text to guide the user.
    */
    'helperText'?: string;
    /**
    * The label text of the this input group.
    */
    'label'?: string;
    /**
    * Set the loading mode, showing a loading icon.
    */
    'loading'?: boolean;
    /**
    * If true, the component will handle multiple selected items.
    */
    'multiple'?: boolean;
    /**
    * The name of the internal input.
    */
    'name'?: string;
    /**
    * Fired when the user select/deselect an option.
    */
    'onChange'?: (event: CustomEvent<any>) => void;
    /**
    * The options that will be displayed in the panel.
    */
    'options'?: SelectOption[];
    /**
    * The native required attribute.
    */
    'required'?: boolean;
    /**
    * The validator functions.
    */
    'validator'?: ValidatorFn | ValidatorFn[];
    /**
    * The validity state.
    */
    'validity'?: CustomValidityState;
    /**
    * The value of the internal input.
    */
    'value'?: any[] | any;
  }

  interface AcTab {
    /**
    * If true, mark this tab as a selected tab.
    */
    'active': boolean;
  }
  interface AcTabAttributes extends StencilHTMLAttributes {
    /**
    * If true, mark this tab as a selected tab.
    */
    'active'?: boolean;
  }

  interface AcTabs {
    /**
    * The theme color defined in the color palette. The default is primary.
    */
    'theme': string;
  }
  interface AcTabsAttributes extends StencilHTMLAttributes {
    'onTabChange'?: (event: CustomEvent<string>) => void;
    /**
    * The theme color defined in the color palette. The default is primary.
    */
    'theme'?: string;
  }

  interface AcModalController {
    /**
    * An optional property used to refer the parent element that the component will be attached to.
    */
    'bound': string;
    /**
    * Setup a new modal on the screen.
    */
    'create': (props: ControllerComponentOptions<AcModal & AcOverlay>) => Promise<any>;
    /**
    * Clear all modals that are displayed.
    */
    'dismiss': (data: any) => Promise<any>;
  }
  interface AcModalControllerAttributes extends StencilHTMLAttributes {
    /**
    * An optional property used to refer the parent element that the component will be attached to.
    */
    'bound'?: string;
  }

  interface AcModal {
    /**
    * The title that will be displayed on the modal.
    */
    'title': string;
  }
  interface AcModalAttributes extends StencilHTMLAttributes {
    /**
    * Dispatched when the modal closes.
    */
    'onClose'?: (event: CustomEvent<void>) => void;
    /**
    * The title that will be displayed on the modal.
    */
    'title'?: string;
  }

  interface AcPanelController {
    /**
    * An optional property used to refer the parent element that the component will be attached to.
    */
    'bound': string;
    /**
    * Setup a new modal on the screen.
    */
    'create': (props: ControllerComponentOptions<AcPanel & AcPopper>) => Promise<any>;
    /**
    * Clear all modals that are displayed.
    */
    'dismiss': (elt?: any) => Promise<any>;
  }
  interface AcPanelControllerAttributes extends StencilHTMLAttributes {
    /**
    * An optional property used to refer the parent element that the component will be attached to.
    */
    'bound'?: string;
  }

  interface AcPanel {}
  interface AcPanelAttributes extends StencilHTMLAttributes {
    /**
    * Dispatched when the modal closes.
    */
    'onClose'?: (event: CustomEvent<void>) => void;
  }

  interface AcOverlay {
    /**
    * The backdrop theme.
    */
    'backdrop': 'dark' | 'light';
    'disableClose': boolean;
    'handleBackDropClick': () => void;
    /**
    * Content position based on flex layout.
    */
    'position': 'start start' | 'start center' | 'start end' |
    'center start' | 'center center' | 'center end' |
    'end start' | 'end center' | 'end end';
    /**
    * Used to pass the custom children to the portal.
    */
    'vchildren': any;
  }
  interface AcOverlayAttributes extends StencilHTMLAttributes {
    /**
    * The backdrop theme.
    */
    'backdrop'?: 'dark' | 'light';
    'disableClose'?: boolean;
    'onBackDropClick'?: (event: CustomEvent<void>) => void;
    /**
    * Content position based on flex layout.
    */
    'position'?: 'start start' | 'start center' | 'start end' |
    'center start' | 'center center' | 'center end' |
    'end start' | 'end center' | 'end end';
    /**
    * Used to pass the custom children to the portal.
    */
    'vchildren'?: any;
  }

  interface AcPopper {
    /**
    * Popper.js's options.
    */
    'popperOptions': PopperOptions;
    /**
    * Pivot element used to place the popper.
    */
    'popperPivot': string | HTMLElement;
    /**
    * Popper.js's placement.
    */
    'popperPlacement': Placement;
    /**
    * Used to pass the custom children to the portal.
    */
    'vchildren': any;
  }
  interface AcPopperAttributes extends StencilHTMLAttributes {
    /**
    * Popper.js's options.
    */
    'popperOptions'?: PopperOptions;
    /**
    * Pivot element used to place the popper.
    */
    'popperPivot'?: string | HTMLElement;
    /**
    * Popper.js's placement.
    */
    'popperPlacement'?: Placement;
    /**
    * Used to pass the custom children to the portal.
    */
    'vchildren'?: any;
  }

  interface AcPortal {
    /**
    * Used to pass the custom children to the portal.
    */
    'vchildren': any;
  }
  interface AcPortalAttributes extends StencilHTMLAttributes {
    /**
    * Used to pass the custom children to the portal.
    */
    'vchildren'?: any;
  }

  interface AcLayout {
    /**
    * Collapse a nav drawer.
    */
    'collapsed': 'nav-left';
  }
  interface AcLayoutAttributes extends StencilHTMLAttributes {
    /**
    * Collapse a nav drawer.
    */
    'collapsed'?: 'nav-left';
    'onContentScroll'?: (event: CustomEvent<{top: number, left: number}>) => void;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AcButton': Components.AcButton;
    'AcCard': Components.AcCard;
    'AcCheck': Components.AcCheck;
    'AcFaIcon': Components.AcFaIcon;
    'AcHeader': Components.AcHeader;
    'AcInputBase': Components.AcInputBase;
    'AcNavdrawer': Components.AcNavdrawer;
    'AcStepper': Components.AcStepper;
    'AcInput': Components.AcInput;
    'AcMenuItem': Components.AcMenuItem;
    'AcMenu': Components.AcMenu;
    'AcSelect': Components.AcSelect;
    'AcTab': Components.AcTab;
    'AcTabs': Components.AcTabs;
    'AcModalController': Components.AcModalController;
    'AcModal': Components.AcModal;
    'AcPanelController': Components.AcPanelController;
    'AcPanel': Components.AcPanel;
    'AcOverlay': Components.AcOverlay;
    'AcPopper': Components.AcPopper;
    'AcPortal': Components.AcPortal;
    'AcLayout': Components.AcLayout;
  }

  interface StencilIntrinsicElements {
    'ac-button': Components.AcButtonAttributes;
    'ac-card': Components.AcCardAttributes;
    'ac-check': Components.AcCheckAttributes;
    'ac-fa-icon': Components.AcFaIconAttributes;
    'ac-header': Components.AcHeaderAttributes;
    'ac-input-base': Components.AcInputBaseAttributes;
    'ac-navdrawer': Components.AcNavdrawerAttributes;
    'ac-stepper': Components.AcStepperAttributes;
    'ac-input': Components.AcInputAttributes;
    'ac-menu-item': Components.AcMenuItemAttributes;
    'ac-menu': Components.AcMenuAttributes;
    'ac-select': Components.AcSelectAttributes;
    'ac-tab': Components.AcTabAttributes;
    'ac-tabs': Components.AcTabsAttributes;
    'ac-modal-controller': Components.AcModalControllerAttributes;
    'ac-modal': Components.AcModalAttributes;
    'ac-panel-controller': Components.AcPanelControllerAttributes;
    'ac-panel': Components.AcPanelAttributes;
    'ac-overlay': Components.AcOverlayAttributes;
    'ac-popper': Components.AcPopperAttributes;
    'ac-portal': Components.AcPortalAttributes;
    'ac-layout': Components.AcLayoutAttributes;
  }


  interface HTMLAcButtonElement extends Components.AcButton, HTMLStencilElement {}
  var HTMLAcButtonElement: {
    prototype: HTMLAcButtonElement;
    new (): HTMLAcButtonElement;
  };

  interface HTMLAcCardElement extends Components.AcCard, HTMLStencilElement {}
  var HTMLAcCardElement: {
    prototype: HTMLAcCardElement;
    new (): HTMLAcCardElement;
  };

  interface HTMLAcCheckElement extends Components.AcCheck, HTMLStencilElement {}
  var HTMLAcCheckElement: {
    prototype: HTMLAcCheckElement;
    new (): HTMLAcCheckElement;
  };

  interface HTMLAcFaIconElement extends Components.AcFaIcon, HTMLStencilElement {}
  var HTMLAcFaIconElement: {
    prototype: HTMLAcFaIconElement;
    new (): HTMLAcFaIconElement;
  };

  interface HTMLAcHeaderElement extends Components.AcHeader, HTMLStencilElement {}
  var HTMLAcHeaderElement: {
    prototype: HTMLAcHeaderElement;
    new (): HTMLAcHeaderElement;
  };

  interface HTMLAcInputBaseElement extends Components.AcInputBase, HTMLStencilElement {}
  var HTMLAcInputBaseElement: {
    prototype: HTMLAcInputBaseElement;
    new (): HTMLAcInputBaseElement;
  };

  interface HTMLAcNavdrawerElement extends Components.AcNavdrawer, HTMLStencilElement {}
  var HTMLAcNavdrawerElement: {
    prototype: HTMLAcNavdrawerElement;
    new (): HTMLAcNavdrawerElement;
  };

  interface HTMLAcStepperElement extends Components.AcStepper, HTMLStencilElement {}
  var HTMLAcStepperElement: {
    prototype: HTMLAcStepperElement;
    new (): HTMLAcStepperElement;
  };

  interface HTMLAcInputElement extends Components.AcInput, HTMLStencilElement {}
  var HTMLAcInputElement: {
    prototype: HTMLAcInputElement;
    new (): HTMLAcInputElement;
  };

  interface HTMLAcMenuItemElement extends Components.AcMenuItem, HTMLStencilElement {}
  var HTMLAcMenuItemElement: {
    prototype: HTMLAcMenuItemElement;
    new (): HTMLAcMenuItemElement;
  };

  interface HTMLAcMenuElement extends Components.AcMenu, HTMLStencilElement {}
  var HTMLAcMenuElement: {
    prototype: HTMLAcMenuElement;
    new (): HTMLAcMenuElement;
  };

  interface HTMLAcSelectElement extends Components.AcSelect, HTMLStencilElement {}
  var HTMLAcSelectElement: {
    prototype: HTMLAcSelectElement;
    new (): HTMLAcSelectElement;
  };

  interface HTMLAcTabElement extends Components.AcTab, HTMLStencilElement {}
  var HTMLAcTabElement: {
    prototype: HTMLAcTabElement;
    new (): HTMLAcTabElement;
  };

  interface HTMLAcTabsElement extends Components.AcTabs, HTMLStencilElement {}
  var HTMLAcTabsElement: {
    prototype: HTMLAcTabsElement;
    new (): HTMLAcTabsElement;
  };

  interface HTMLAcModalControllerElement extends Components.AcModalController, HTMLStencilElement {}
  var HTMLAcModalControllerElement: {
    prototype: HTMLAcModalControllerElement;
    new (): HTMLAcModalControllerElement;
  };

  interface HTMLAcModalElement extends Components.AcModal, HTMLStencilElement {}
  var HTMLAcModalElement: {
    prototype: HTMLAcModalElement;
    new (): HTMLAcModalElement;
  };

  interface HTMLAcPanelControllerElement extends Components.AcPanelController, HTMLStencilElement {}
  var HTMLAcPanelControllerElement: {
    prototype: HTMLAcPanelControllerElement;
    new (): HTMLAcPanelControllerElement;
  };

  interface HTMLAcPanelElement extends Components.AcPanel, HTMLStencilElement {}
  var HTMLAcPanelElement: {
    prototype: HTMLAcPanelElement;
    new (): HTMLAcPanelElement;
  };

  interface HTMLAcOverlayElement extends Components.AcOverlay, HTMLStencilElement {}
  var HTMLAcOverlayElement: {
    prototype: HTMLAcOverlayElement;
    new (): HTMLAcOverlayElement;
  };

  interface HTMLAcPopperElement extends Components.AcPopper, HTMLStencilElement {}
  var HTMLAcPopperElement: {
    prototype: HTMLAcPopperElement;
    new (): HTMLAcPopperElement;
  };

  interface HTMLAcPortalElement extends Components.AcPortal, HTMLStencilElement {}
  var HTMLAcPortalElement: {
    prototype: HTMLAcPortalElement;
    new (): HTMLAcPortalElement;
  };

  interface HTMLAcLayoutElement extends Components.AcLayout, HTMLStencilElement {}
  var HTMLAcLayoutElement: {
    prototype: HTMLAcLayoutElement;
    new (): HTMLAcLayoutElement;
  };

  interface HTMLElementTagNameMap {
    'ac-button': HTMLAcButtonElement
    'ac-card': HTMLAcCardElement
    'ac-check': HTMLAcCheckElement
    'ac-fa-icon': HTMLAcFaIconElement
    'ac-header': HTMLAcHeaderElement
    'ac-input-base': HTMLAcInputBaseElement
    'ac-navdrawer': HTMLAcNavdrawerElement
    'ac-stepper': HTMLAcStepperElement
    'ac-input': HTMLAcInputElement
    'ac-menu-item': HTMLAcMenuItemElement
    'ac-menu': HTMLAcMenuElement
    'ac-select': HTMLAcSelectElement
    'ac-tab': HTMLAcTabElement
    'ac-tabs': HTMLAcTabsElement
    'ac-modal-controller': HTMLAcModalControllerElement
    'ac-modal': HTMLAcModalElement
    'ac-panel-controller': HTMLAcPanelControllerElement
    'ac-panel': HTMLAcPanelElement
    'ac-overlay': HTMLAcOverlayElement
    'ac-popper': HTMLAcPopperElement
    'ac-portal': HTMLAcPortalElement
    'ac-layout': HTMLAcLayoutElement
  }

  interface ElementTagNameMap {
    'ac-button': HTMLAcButtonElement;
    'ac-card': HTMLAcCardElement;
    'ac-check': HTMLAcCheckElement;
    'ac-fa-icon': HTMLAcFaIconElement;
    'ac-header': HTMLAcHeaderElement;
    'ac-input-base': HTMLAcInputBaseElement;
    'ac-navdrawer': HTMLAcNavdrawerElement;
    'ac-stepper': HTMLAcStepperElement;
    'ac-input': HTMLAcInputElement;
    'ac-menu-item': HTMLAcMenuItemElement;
    'ac-menu': HTMLAcMenuElement;
    'ac-select': HTMLAcSelectElement;
    'ac-tab': HTMLAcTabElement;
    'ac-tabs': HTMLAcTabsElement;
    'ac-modal-controller': HTMLAcModalControllerElement;
    'ac-modal': HTMLAcModalElement;
    'ac-panel-controller': HTMLAcPanelControllerElement;
    'ac-panel': HTMLAcPanelElement;
    'ac-overlay': HTMLAcOverlayElement;
    'ac-popper': HTMLAcPopperElement;
    'ac-portal': HTMLAcPortalElement;
    'ac-layout': HTMLAcLayoutElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
