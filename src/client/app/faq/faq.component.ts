import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-faq',
    templateUrl: 'faq.component.html',
    styleUrls: ['faq.component.css']
})

export class FaqComponent implements OnInit {
    lang: string = localStorage.getItem('lang');
    
    constructor() { }

    ngOnInit() { }
}