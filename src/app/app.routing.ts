import { Routes, RouterModule } from '@angular/router';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'details/:id', component: PlaceDetailsComponent, canActivate: [AuthGuard] },
    { path: 'book/:id', component: BookTicketsComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);