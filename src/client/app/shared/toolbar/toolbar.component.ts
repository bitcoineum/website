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
  langs: string = localStorage.getItem('lang');
  public constructor() {
    if(!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'EN');
      
    }
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


  changeLang(event: any) {
    console.log(event.target.value);
    if(localStorage.getItem('lang') !== event.target.value) {
      localStorage.setItem('lang', event.target.value);
      window.location.href = '/';
    }

  }
}

