import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImagenPage } from '../pages/imagen/imagen';
import { RiesgoPage } from '../pages/riesgo/riesgo';
import { EmpresaPage } from '../pages/empresa/empresa';
import { UsuariosPage } from '../pages/usuarios/usuarios';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ImagenPage;
  imagen = ImagenPage;
  riesgo = RiesgoPage;
  empresa= EmpresaPage;
  usuarios= UsuariosPage

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrirpagina( pagina: any ){
    this.rootPage = pagina;
    this.menuCtrl.close();
  }
}

