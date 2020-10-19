import { LoginComponent } from './components/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({ template: '' })
class NotFoundComponent {
    constructor(router: Router) {
        router.navigate(['/']);
    }
}

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: NotFoundComponent }
].map(route => {
    if (route.path !== '') {
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
