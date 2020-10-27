import { UtilityService } from 'src/app/services/utility/utility.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

    public toolbarLinks: { icon: string, label: string }[] = [
        { icon: 'exit_to_app', label: 'Sign out' },
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
        const result = this.router.url === '/';
        return result;
    }

    public btnToolbar(value): void {
        switch (value.label) {
            case 'Sign out':
                this.utilityService.deleteToken();
                this.router.navigate(['/']);
                break;
        }
    }

    public btnSidenav(value): void {
        console.log(value);
    }
}
