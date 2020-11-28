import { UtilityService } from 'src/app/services/utility/utility.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

    public toolbarLinks: { icon: string, label: string, func: any }[] = [
        {
            label: 'Home',
            icon: 'home',
            func: (() => {
                this.router.navigate(['/home']);
            }).bind(this)
        },
        {
            label: 'Search',
            icon: 'search',
            func: (() => {
                this.router.navigate(['/search']);
            }).bind(this)
        },
        {
            label: 'Reports',
            icon: 'assignment',
            func: (() => {
                this.router.navigate(['/report']);
            }).bind(this)
        },
        {
            label: 'Sign out',
            icon: 'exit_to_app',
            func: (() => {
                this.utilityService.deleteToken();
                this.router.navigate(['/login']);
            }).bind(this)
        },
    ];
    public sidenavLinks: { label: string }[] = [
        { label: 'Item 1' },
        { label: 'Item 2' },
        { label: 'Item 3' },
        { label: 'Item 4' },
    ];

    constructor(
        private utilityService: UtilityService,
        private router: Router,
    ) { }

    public ngOnInit(): void {
    }

    public isOnLogin(): boolean {
        return this.router.url === '/login';
    }

    public btnSidenav(value): void {
        console.log(value);
    }
}
