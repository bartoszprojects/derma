import {Component} from '@angular/core';
import 'hammerjs';
import {Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private _router: Router,
  ) {
    this._subscribeRouteEvents();
  }

  private _subscribeRouteEvents(): void {
    this._router.events.subscribe(e => {
      if (!(e instanceof NavigationEnd)) return;
      window.scrollTo(0, 0);
    });
  }
}
