import { Routes, RouterModule } from '@angular/router';
import { ActivitySelectComponent } from './activity-select/activity-select.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { BudgetSelectComponent } from './budget-select/budget-select.component';
import { DestinationSelectComponent } from './destination-select/destination-select.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { MoodSelectComponent } from './mood-select/mood-select.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'details/:id', component: PlaceDetailsComponent, canActivate: [AuthGuard] },
    { path: 'book/:id', component: BookTicketsComponent, canActivate: [AuthGuard] },
    { path: 'mood', component: MoodSelectComponent, canActivate: [AuthGuard] },

    { path: 'budget', component: BudgetSelectComponent, canActivate: [AuthGuard] },
    { path: 'activity', component: ActivitySelectComponent, canActivate: [AuthGuard] },
    { path: 'destination', component: DestinationSelectComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);