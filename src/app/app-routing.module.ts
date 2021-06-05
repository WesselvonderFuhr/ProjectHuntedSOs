import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupComponent } from './components/setup/setup.component';
import { GameComponent } from './components/game/game.component';

import { AuthGuard } from './helpers/auth-guard/auth.guard'
import { LoginComponent } from './components/login/login.component';
import { HelpComponent } from './components/help/help.component';
import { AppComponent } from './app.component';
import { PrintComponent } from './components/print/print.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const appRoutes: Routes = [
  { path : '', component: LoginComponent, canActivate: [AuthGuard] },
  { path : 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path : 'print', component: PrintComponent, canActivate: [AuthGuard] },
  { path: '', component: SidenavComponent, canActivate: [AuthGuard],
    children: [
      { path : 'setup', component: SetupComponent, canActivate: [AuthGuard] },
      { path : 'game', component: GameComponent, canActivate: [AuthGuard] },
      { path : 'help', component: HelpComponent, canActivate: [AuthGuard] },
]}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
