import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupComponent } from './components/setup/setup.component';
import { GameComponent } from './components/game/game.component';

import { AuthGuard } from './helpers/auth-guard/auth.guard'
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path : 'setup', component: SetupComponent, canActivate: [AuthGuard] },
  { path : 'game', component: GameComponent, canActivate: [AuthGuard] },
  { path : 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
