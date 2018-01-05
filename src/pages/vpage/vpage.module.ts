import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VpagePage } from './vpage';

@NgModule({
  declarations: [
    VpagePage,
  ],
  imports: [
    IonicPageModule.forChild(VpagePage),
  ],
})
export class VpagePageModule {}
