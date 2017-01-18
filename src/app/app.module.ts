import { NgModule, ErrorHandler } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/* import providers */
  import { Api } from '../providers/api';
  import { Data } from '../providers/storage';

/* import pages */
  import { HomePage } from '../pages/home/home';
  import { LoginPage } from '../pages/login/login';
  import { DashboardPage } from '../pages/dashboard/dashboard';
  import { OrganisationPage } from '../pages/organisation/organisation';
  import { GymPage } from '../pages/gym/gym';
  import { AddGymPage } from '../pages/add-gym/add-gym';
  import { PerfilPage } from '../pages/perfil/perfil';
  import { TimerComponent } from '../pages/timer/timer';
  import { ShowPage } from '../pages/show/show';
  import { ClasesPage } from '../pages/clases/clases';
  import { EntrenadoresPage } from '../pages/entrenadores/entrenadores';
import { AparatosPage } from '../pages/aparatos/aparatos';
import { LogoutPage } from '../pages/logout/logout';
import { WorkoutdetailsPage } from '../pages/workoutdetails/workoutdetails';
import { LessonsdetailsPage } from '../pages/lessonsdetails/lessonsdetails';
import { BackButtonComponent } from '../components/back-button/back-button';
import { NavHeaderComponent } from '../components/nav-header/nav-header';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    OrganisationPage,
    GymPage,
    AddGymPage,
    PerfilPage,
    TimerComponent,
    ShowPage,
    ClasesPage,
    EntrenadoresPage,
    AparatosPage,
    LogoutPage,
    WorkoutdetailsPage,
    LessonsdetailsPage,
    NavHeaderComponent,
    BackButtonComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, { mode: "md" })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    OrganisationPage,
    GymPage,
    AddGymPage,
    PerfilPage,
    TimerComponent,
    ShowPage,
    ClasesPage,
    EntrenadoresPage,
    AparatosPage,
    LogoutPage,
    WorkoutdetailsPage,
    LessonsdetailsPage,
    NavHeaderComponent,
    BackButtonComponent
  ],
  providers: [Api, Storage, Data, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
