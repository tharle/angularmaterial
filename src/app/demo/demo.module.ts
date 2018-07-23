import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  imports: [
    SharedModule,
    DemoRoutingModule
  ],
  declarations: [ButtonsComponent]
})
export class DemoModule { }
