import { AuthenticationGuard } from './guards/authentication.guard';
import { Route, Routes, RouterModule, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import {
    LoginComponent,
    HomeComponent,
    SearchComponent,
    ReportComponent,
} from './components';

@Component({ template: '', standalone: false, changeDetection: ChangeDetectionStrategy.Eager })
class NotFoundComponent {
    constructor(router: Router) {
        router.navigate(['/home']);
    }
}

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'report', component: ReportComponent },
    { path: '**', component: NotFoundComponent }
].map(route => {
    if (route.path !== 'login') {
        return {
            path: route.path,
            component: route.component,
            canActivate: [AuthenticationGuard]
        } as Route;
    }
    return route;
});

@NgModule({
    declarations: [
        NotFoundComponent,
    ],
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        AuthenticationGuard,
    ]
})
export class AppRoutingModule { }
