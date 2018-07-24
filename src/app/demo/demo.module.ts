import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';

@NgModule({
  imports: [
    SharedModule,
    DemoRoutingModule
  ],
  declarations: [ButtonsComponent, FlexboxComponent]
})
export class DemoModule { }
