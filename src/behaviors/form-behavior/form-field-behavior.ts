import { ComponentBehavior } from '../../utils/stencil/component-behavior';
import { ValidationError } from '../../utils/validations/validations';
import { isRequired } from '../../utils/validations/isRequired';

import { FormLogic } from './form-logic';
import { FormFieldComponent } from './form-field-component';
import { HTMLCustomFormElement } from './html-custom-form-element';

import debug from 'debug/src/browser';
const log = debug('solar:FormFieldBehavior');

/**
 * Adds form field features to a component, such as validations.
 */
export class FormFieldBehavior extends ComponentBehavior<FormFieldComponent> {

  /**
   * The form that this field is attached
   */
  private formAttached?: HTMLCustomFormElement;

  /**
   * The name of the field to use in the form.
   */
  name: string;

  /**
   * True if the value of this field is valid.
   * Note that needs to call `validate` to ensure it.
   */
  isValid: boolean;

  /**
   * True if the user has interacted with this field before.
   */
  isTouched: boolean;

  /**
   * True if the user has changed this field's value before.
   */
  isDirty: boolean;

  /**
   * If this field is in a form, attach to it and initialize the FormLogic.
   */
  attach() {
    this.name = this.component.name;
    this.formAttached = this.component.host.closest('form') as HTMLCustomFormElement;

    if (this.formAttached) {
      log('Attaching', this.name, this.formAttached);
      if (!this.formAttached.form) {
        this.formAttached.form = new FormLogic(this.formAttached);
      }
      this.formAttached.form.addField(this);
    }
  }

  /**
   * Removes this field from FormLogic, to ignore it validations.
   */
  detach() {
    if (this.formAttached) {
      log('Detaching', this.name, this.formAttached);
      this.formAttached.form.removeField(this);
    }
  }

  /**
   * Set the field in the dirty state.
   */
  setDirty() {
    log('Set dirty', this.name, this.formAttached);
    this.component.host.classList.add('field--dirty');
    this.isDirty = true;

    if (this.formAttached) this.formAttached.form.setUnchecked();
  }

  /**
   * Set the field in the touched state.
   */
  setTouched() {
    log('Set touched', this.name);
    this.component.host.classList.add('field--touched');
    this.isTouched = true;
  }

  /**
   * Set the field in the valid state.
   */
  setValid() {
    log('Set valid', this.name);
    this.component.host.classList.add('field--valid');
    this.component.host.classList.remove('field--invalid');

    this.isValid = true;
  }

  /**
   * Set the field in the invalid state
   */
  setInvalid() {
    log('Set invalid', this.name);
    this.component.host.classList.add('field--invalid');
    this.component.host.classList.remove('field--valid');

    this.isValid = false;
  }

  /**
   * Cleans all the states, error and value of the field.
   */
  cleanup() {
    log('Cleaning up', this.name);
    this.component.host.classList.remove(
      'field--invalid', 'field--valid', 'field--touched', 'field--dirty'
    );
    this.component.value = undefined;
    this.component.error = undefined;
    this.isValid = undefined;
    this.isTouched = undefined;
    this.isDirty = undefined;
  }

  /**
   * Runs the all the validations of the field and sets the error.
   * The Required Field validation runs if the `required` prop of the component is present.
   */
  async validate(): Promise<ValidationError> {
    log('Validating', this.name);

    const { validateFn } = this.component;

    // Converting to Array
    let validateFns = [];
    if (validateFn instanceof Array) validateFns = validateFn;
    else if (validateFn) validateFns = [ validateFn ];

    if (this.component.required) {
      validateFns.unshift(isRequired(this.component.required));
    }

    // Running all validator functions
    for (const fn of validateFns) {
      if (fn) {
        const exec = fn(this.component.value, this.formAttached);
        let res;
        if (exec instanceof Promise) res = await exec;
        else res = exec;

        if (res) {
          this.component.error = res.message || res;
          log('Validation error', this.name, res);
          return res.message ? res : {message: res};
        }
      }
    }

    this.component.error = null;
  }
}
