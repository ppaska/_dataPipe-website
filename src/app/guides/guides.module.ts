import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {GuidesRoutingModule} from './guides-routing.module';
import {GuidesComponent} from './guides.component';

@NgModule({
  declarations: [GuidesComponent],
  imports: [CommonModule, GuidesRoutingModule, ScullyLibModule],
})
export class GuidesModule {}
