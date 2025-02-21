import { Routes } from '@angular/router';
import { authenticationGuard } from './guards/authentication.guard';

export const routes: Routes = [
    {
        path: "**",
        redirectTo: "login/",
        pathMatch: "full"
    },
    {
        path: "login/",
        loadComponent: () => import("./pages/login/login.component").then(c => c.LoginComponent),
    },
    {
        path: "movies/",
        loadComponent: () => import("./pages/movies/movies.component").then(c => c.MoviesComponent),
        canActivate: [authenticationGuard]
    }
];
