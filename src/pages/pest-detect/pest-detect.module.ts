import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PestDetectPage } from './pest-detect';

@NgModule({
  declarations: [
    PestDetectPage,
  ],
  imports: [
    IonicPageModule.forChild(PestDetectPage),
  ],
})
export class PestDetectPageModule {}
