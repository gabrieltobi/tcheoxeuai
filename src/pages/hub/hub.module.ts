import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HubPage } from './hub';

@NgModule({
  declarations: [
    HubPage,
  ],
  imports: [
    IonicPageModule.forChild(HubPage),
  ],
})
export class HubPageModule {}
