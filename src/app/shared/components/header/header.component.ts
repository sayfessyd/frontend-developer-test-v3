import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  url: any;

  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((data: any) => {
      this.url = data.url;
    })
  }

}
