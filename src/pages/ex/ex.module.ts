import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExPage } from './ex';

@NgModule({
  declarations: [
    ExPage,
  ],
  imports: [
    IonicPageModule.forChild(ExPage),
  ],
})
export class ExPageModule {}
