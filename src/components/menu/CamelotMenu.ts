import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import { MenuOption } from './MenuOption';
import './CamelotMaterialMenu';
import './CamelotSoftMenu';
import './CamelotScifiMenu';

/**
 * <camelot-menu>
 * 複合式選單組件，支援多種預設風格與數據驅動渲染。
 */
@customElement('camelot-menu')
export class CamelotMenu extends CamelotBaseElement {
  @property({ type: Array }) options: MenuOption[] = [];
  @property({ type: String }) value: string = '';
  @property({ type: Boolean }) collapsed = false;
  @property({ type: String }) mode: 'vertical' | 'horizontal' = 'vertical';
  @property({ type: Number }) indent = 24;
  @property({ type: String, attribute: 'style-type' }) styleType?: 'material' | 'cupertino' | 'soft' | 'scifi';

  connectedCallback() {
    super.connectedCallback();
    this._updateStyle();
  }

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('styleType')) {
      this._updateStyle();
    }
  }

  private _updateStyle() {
    if (this.styleType) {
      this._activeStyle = this.styleType;
    }
  }

  private _handleSelect(e: CustomEvent) {
    this.value = e.detail;
    this.dispatchEvent(new CustomEvent('select', { detail: e.detail }));
  }

  private _handleValueUpdate(e: CustomEvent) {
    this.value = e.detail;
  }

  render() {
    switch (this._activeStyle) {
      case 'scifi':
        return html`
          <camelot-scifi-menu
            .options="${this.options}"
            .value="${this.value}"
            .collapsed="${this.collapsed}"
            .mode="${this.mode}"
            .indent="${this.indent}"
            @select="${this._handleSelect}"
            @update:value="${this._handleValueUpdate}"
          ></camelot-scifi-menu>
        `;
      case 'soft':
        return html`
          <camelot-soft-menu
            .options="${this.options}"
            .value="${this.value}"
            .collapsed="${this.collapsed}"
            .mode="${this.mode}"
            .indent="${this.indent}"
            @select="${this._handleSelect}"
            @update:value="${this._handleValueUpdate}"
          ></camelot-soft-menu>
        `;
      case 'material':
      case 'cupertino':
      default:
        // Cupertino is now handled by Material 3 per user request
        return html`
          <camelot-material-menu
            .options="${this.options}"
            .value="${this.value}"
            .collapsed="${this.collapsed}"
            .mode="${this.mode}"
            .indent="${this.indent}"
            @select="${this._handleSelect}"
            @update:value="${this._handleValueUpdate}"
          ></camelot-material-menu>
        `;
    }
  }
}
