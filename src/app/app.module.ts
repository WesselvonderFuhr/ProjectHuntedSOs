import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { LayoutModule } from '@angular/cdk/layout';

//Shared Components
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './helpers/authconfig.interceptor';

import { LoginComponent } from './components/login/login.component';


//Setup Components
import { SetupComponent } from './components/setup/setup.component';
import { SetupJailComponent } from './components/setup-jail/setup-jail.component';
import { SetupQrComponent } from './components/setup-qr/setup-qr.component';
import { SetupQrCardComponent } from './components/setup-qr-card/setup-qr-card.component';
import { SetupZoneComponent } from './components/setup-zone/setup-zone.component';
import { SetupAccesscodeComponent } from './components/setup-accesscode/setup-accesscode.component';
import { SetupAccesscodeCardComponent } from './components/setup-accesscode-card/setup-accesscode-card.component';

//Game Components
import { GameComponent } from './components/game/game.component';
import { GameOutOfBoundsMessageComponent } from './components/game-out-of-bounds-message/game-out-of-bounds-message.component';

//Service Components
import { ZoneService } from './services/zone/zone.service';
import { JailService } from './services/jail/jail.service';
import { LootService } from './services/loot/loot.service';
import { AccessCodeService } from './services/access-code/accesscode.service'

//Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'
import { MatSelectModule } from '@angular/material/select'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    SetupJailComponent,
    SetupQrComponent,
    SetupQrCardComponent,
    SetupAccesscodeComponent,
    SetupAccesscodeCardComponent,
    GameComponent,
    GameOutOfBoundsMessageComponent,
    SetupZoneComponent,
    SidenavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [
    ZoneService,
    JailService,
    LootService,
    AccessCodeService,
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
