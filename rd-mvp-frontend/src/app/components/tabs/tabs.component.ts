import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
    currentRoute: string;
    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map((event) => event as NavigationEnd),
            )
            .subscribe((event) => {
                this.currentRoute = event.url.substr(1).split('/')[0];
            });
    }
}
