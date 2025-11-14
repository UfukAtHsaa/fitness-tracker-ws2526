import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-tab-navigation',
  standalone: true,
  imports: [MatTabsModule, RouterModule],
  templateUrl: './tab-navigation.html',
  styleUrl: './tab-navigation.scss'
})
export class TabNavigationComponent implements OnInit, OnDestroy {
  activeTabIndex: number = 0;
  private routerSubscription: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      if (currentUrl.includes('management')) {
        this.activeTabIndex = 0;
      } else if (currentUrl.includes('list')) {
        this.activeTabIndex = 1;
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  onTabChange(event: any): void {
    switch (event.index) {
      case 0:
        this.router.navigate(['./management'], { relativeTo: this.activatedRoute });
        break;
      case 1:
        this.router.navigate(['./list'], { relativeTo: this.activatedRoute });
        break;
      default:
        break;
    }
  }
}