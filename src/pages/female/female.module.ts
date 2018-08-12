import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FemalePage } from './female';

@NgModule({
  declarations: [
    FemalePage,
  ],
  imports: [
    IonicPageModule.forChild(FemalePage),
  ],
})
export class FemalePageModule {}
