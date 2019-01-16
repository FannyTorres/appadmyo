import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage} from '../pages/login/login';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { PersonafisicaPage} from '../pages/personafisica/personafisica';
import { PersonamoralPage } from '../pages/personamoral/personamoral';
import { TerminosycondicionesPage } from '../pages/terminosycondiciones/terminosycondiciones';
import { AvisodeprivacidadPage} from '../pages/avisodeprivacidad/avisodeprivacidad';
import { ImagenPage } from '../pages/imagen/imagen';
import { RiesgoPage } from '../pages/riesgo/riesgo';
import { EmpresaPage } from '../pages/empresa/empresa';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { ClientesPage } from '../pages/clientes/clientes';
import { ProveedoresPage } from '../pages/proveedores/proveedores';
import { CalificarPage } from '../pages/calificar/calificar';
import { PBuscadoPage } from '../pages/p-buscado/p-buscado';
import { Page } from '../pages/page/page';
import { ImgdetclientPage } from '../pages/imgdetclient/imgdetclient';
import { ServiceProvider } from '../providers/service/service';
import { ListadeusuariosPage } from '../pages/listadeusuarios/listadeusuarios';
import { AgregarusuarioPage } from '../pages/agregarusuario/agregarusuario';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    PersonafisicaPage,
    PersonamoralPage,
    TerminosycondicionesPage,
    AvisodeprivacidadPage,
    ImagenPage,
    RiesgoPage,
    EmpresaPage,
    UsuariosPage,
    ClientesPage,
    ProveedoresPage,
    CalificarPage,
    PBuscadoPage,
    ImgdetclientPage,
    ListadeusuariosPage,
    AgregarusuarioPage,
    Page

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    PersonafisicaPage,
    PersonamoralPage,
    TerminosycondicionesPage,
    AvisodeprivacidadPage,
    ImagenPage,
    RiesgoPage,
    EmpresaPage,
    UsuariosPage,
    ClientesPage,
    ProveedoresPage,
    CalificarPage,
    PBuscadoPage,
    ImgdetclientPage,
    ListadeusuariosPage,
    AgregarusuarioPage,
    Page
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
