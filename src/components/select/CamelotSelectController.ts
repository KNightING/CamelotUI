import { ReactiveController, ReactiveControllerHost } from 'lit';

export interface SelectOption {
  label: string;
  value: string;
}

/**
 * CamelotSelectController
 * 下拉選單邏輯控制器 (Reactive Controller)。
 * 封裝了狀態管理、視窗點擊偵測、選項過濾與事件分發。
 * 讓不同繼承體系的元件 (如 ScifiSelect) 都能共用同一套邏輯。
 */
export class CamelotSelectController implements ReactiveController {
  private host: ReactiveControllerHost & HTMLElement;

  public isOpen = false;
  public searchTerm = '';
  public options: SelectOption[] = [];
  public value = '';

  constructor(host: ReactiveControllerHost & HTMLElement) {
    this.host = host;
    this.host.addController(this);
    this._onWindowClick = this._onWindowClick.bind(this);
  }

  hostConnected() {
    window.addEventListener('click', this._onWindowClick);
  }

  hostDisconnected() {
    window.removeEventListener('click', this._onWindowClick);
  }

  private _onWindowClick(e: MouseEvent) {
    if (this.isOpen && !e.composedPath().includes(this.host)) {
      this.close();
    }
  }

  public toggle() {
    // 如果宿主元件有 disabled 屬性則不執行
    if ((this.host as any).disabled) return;
    
    if (this.isOpen) this.close();
    else this.open();
  }

  public open() {
    this.isOpen = true;
    this.host.requestUpdate();
  }

  public close() {
    this.isOpen = false;
    this.searchTerm = '';
    this.host.requestUpdate();
  }

  public select(val: string) {
    this.value = val;
    this.close();
    this.host.dispatchEvent(new CustomEvent('change', {
      detail: { value: val },
      bubbles: true,
      composed: true
    }));
  }

  public handleSearch(val: string) {
    this.searchTerm = val;
    this.host.requestUpdate();
    this.host.dispatchEvent(new CustomEvent('search', {
      detail: { value: val },
      bubbles: true,
      composed: true
    }));
  }

  get filteredOptions() {
    if (!this.searchTerm) return this.options;
    const term = this.searchTerm.toLowerCase();
    return this.options.filter(opt => 
      opt.label.toLowerCase().includes(term) || 
      opt.value.toLowerCase().includes(term)
    );
  }

  get selectedLabel() {
    return this.options.find(o => o.value === this.value)?.label || '';
  }
}
