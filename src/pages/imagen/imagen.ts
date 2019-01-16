import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,Tabs,Tab } from 'ionic-angular';
import { ClientesPage } from '../clientes/clientes';
import { ProveedoresPage } from '../proveedores/proveedores';
import { CalificarPage } from '../calificar/calificar';
import { PBuscadoPage } from '../p-buscado/p-buscado';
import { ImgdetclientPage } from '../imgdetclient/imgdetclient';


/**
 * Generated class for the ImagenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imagen',
  templateUrl: 'imagen.html',
})
export class ImagenPage {
  showTab: boolean = false;
  @ViewChild('myTabs') tabRef: Tabs;
  Imagen: string = "icliente";
  isAndroid: boolean = false;
  tab1:any;
  tab2:any;
  tab3:any;
  tab4:any;
  tab5:any;
  clientesRoot = 'ClientesPage'
  proveedoresRoot = 'ProveedoresPage'
  calificarRoot = 'CalificarPage'
  pBuscadoRoot = 'PBuscadoPage'
  imagenRoot = 'ImagenPage'

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private menuCtrl: MenuController ) {
                this.tab1 = ClientesPage;
                this.tab2 = ProveedoresPage;
                this.tab3 = CalificarPage;
                this.tab4 = PBuscadoPage;
                this.tab5 = ImagenPage;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagenPage');
  }
  menu(){
    this.menuCtrl.toggle();
  }
  onTabChange(tab: Tab) {
    this.showTab = tab.index !== 1;

    // wired up through the template
    // <ion-tabs (ionChange)="onTabChange()">
    console.log('onTabChange',this.showTab);
  }
  verdetalles(){
    this.navCtrl.push(ImgdetclientPage)
  }
  
}
