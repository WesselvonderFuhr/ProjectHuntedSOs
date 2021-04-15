import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupComponent } from './components/setup/setup.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  { path : 'setup', component: SetupComponent },
  { path : 'game', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
