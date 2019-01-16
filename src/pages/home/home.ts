import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonafisicaPage } from '../personafisica/personafisica';
import { PersonamoralPage } from '../personamoral/personamoral';
import { ImagenPage } from '../imagen/imagen';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  slides:any[] = [
    {
      title: "Exige a tus clientes y proveedores que te valoren para mejorar tu reputación.",
      image: "../../assets/imgs/logo_admyo.svg",
    }
  ];

  constructor(public navCtrl: NavController) {

  }
  pfisica(){
    this.navCtrl.push(PersonafisicaPage)
  }
  pmoral(){
    this.navCtrl.push(PersonamoralPage)
  }
  imagen(){
    this.navCtrl.push(ImagenPage)
  }

}
