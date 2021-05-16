import { Component } from '@angular/core';
import { AuthService } from '../app/services/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Hunted';

  constructor(public authService: AuthService) {
  }

}
