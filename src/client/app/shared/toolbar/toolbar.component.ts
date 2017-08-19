import { Component } from '@angular/core';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent {
  public lang: string;
  langArray: any = ['EN', '中文'];
  public constructor() {
    try {
      this.lang = localStorage.getItem('lang') || 'en-US';
    } catch (e) {
      // Handle any errors (e.g. "SecurityError: The operation is insecure." if client blocks cookies.)
      this.lang = 'en-US';
    }
  }

  public selectLanguage = (lang: string) => {
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {
      // Handle any errors (e.g. "SecurityError: The operation is insecure." if client blocks cookies.)
    }
    window.location.href = '/';
  }
}

