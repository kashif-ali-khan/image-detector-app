import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeedDetectPage } from './weed-detect';

@NgModule({
  declarations: [
    WeedDetectPage,
  ],
  imports: [
    IonicPageModule.forChild(WeedDetectPage),
  ],
})
export class WeedDetectPageModule {}
