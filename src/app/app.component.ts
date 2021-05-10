import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Staff Checkout App';

  isAuthenticated = false;

  async logout(): Promise<void> {
    // todo
  }
}
