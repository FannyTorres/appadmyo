import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonafisicaPage } from './personafisica';

@NgModule({
  declarations: [
    PersonafisicaPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonafisicaPage),
  ],
})
export class PersonafisicaPageModule {}
