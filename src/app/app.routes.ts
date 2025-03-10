import { Routes } from '@angular/router';
import { authenticationGuard } from './guards/authentication.guard';

export const routes: Routes = [
    {
        path: "login",
        loadComponent: () => import("./pages/login/login.component").then(c => c.LoginComponent),
    },
    {
        path: "movies",
        loadComponent: () => import("./pages/movies/movies.component").then(c => c.MoviesComponent),
        canActivate: [authenticationGuard],
    },
    {
        path: "movies/:id",
        loadComponent: () => import("./pages/movies/movies.component").then(c => c.MoviesComponent),
        canActivate: [authenticationGuard]
    },
    {
        path: "watchMovie",
        loadComponent: () => import("./pages/watch-movie/watch-movie.component").then(c => c.WatchMovieComponent),
        canActivate: [authenticationGuard]
    },
    {
        path: "watchMovie/:id",
        loadComponent: () => import("./pages/watch-movie/watch-movie.component").then(c => c.WatchMovieComponent),
        canActivate: [authenticationGuard]
    },
    {
        path: "**",
        redirectTo: "movies",
        pathMatch: "full"
    },
];
