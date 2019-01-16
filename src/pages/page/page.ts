import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { ProveedoresPage } from '../proveedores/proveedores';
import { ClientesPage } from '../clientes/clientes';
import { CalificarPage } from '../calificar/calificar';
import { PBuscadoPage } from '../p-buscado/p-buscado';

/**
 * Generated class for the Page tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page',
  templateUrl: 'page.html'
})
export class Page {
  tab1:any;
  tab2:any;
  tab3:any;
  tab4:any;

  clientesRoot = 'ClientesPage'
  proveedoresRoot = 'ProveedoresPage'
  calificarRoot = 'CalificarPage'
  pBuscadoRoot = 'PBuscadoPage'


  constructor(public navCtrl: NavController,public menuCtrl: MenuController) {
                this.tab1 = ClientesPage;
                this.tab2 = ProveedoresPage;
                this.tab3 = CalificarPage;
                this.tab4 = PBuscadoPage;
  } 
  abrirpagina( pagina: any ){
    this.navCtrl.setRoot = pagina;
    this.menuCtrl.close();
  }
}
