import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadeusuariosPage } from './listadeusuarios';

@NgModule({
  declarations: [
    ListadeusuariosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadeusuariosPage),
  ],
})
export class ListadeusuariosPageModule {}
