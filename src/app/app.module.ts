import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';

import { SetupComponent } from './components/setup/setup.component';
import { SetupJailComponent } from './components/setup-jail/setup-jail.component';
import { SetupQrComponent } from './components/setup-qr/setup-qr.component';
import { SetupQrCardComponent } from './components/setup-qr-card/setup-qr-card.component';

import { JailService } from './services/jail/jail.service';
import { LootService } from './services/loot/loot.service';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GameComponent } from './components/game/game.component';
import { GameOutOfBoundsMessageComponent } from './components/game-out-of-bounds-message/game-out-of-bounds-message.component';


@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    SetupJailComponent,
    SetupQrComponent,
    SetupQrCardComponent,
    GameComponent,
    GameOutOfBoundsMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,

    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,

  ],
  providers: [
    JailService,
    LootService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
