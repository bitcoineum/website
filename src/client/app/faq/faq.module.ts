import { NgModule } from '@angular/core';

import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq.routing.module';

@NgModule({
    imports: [FaqRoutingModule],
    exports: [],
    declarations: [FaqComponent],
    providers: [],
})
export class FaqModule { }
