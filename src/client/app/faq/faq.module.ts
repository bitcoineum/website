import { NgModule } from '@angular/core';

import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq.routing.module';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [FaqRoutingModule, SharedModule],
    exports: [],
    declarations: [FaqComponent],
    providers: [],
})
export class FaqModule { }
