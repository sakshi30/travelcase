import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import {MatSelectModule} from '@angular/material/select';
import { MatButton, MatButtonModule, MatCardModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;
import { PlacesComponent } from './places/places.component'
import {MatGridListModule} from '@angular/material/grid-list';;
import { PlaceDetailsComponent } from './place-details/place-details.component'
;
import { BookTicketsComponent } from './book-tickets/book-tickets.component'
;
import { MoodSelectComponent } from './mood-select/mood-select.component'
;
import { BudgetSelectComponent } from './budget-select/budget-select.component'
import { ActivitySelectComponent } from './activity-select/activity-select.component'
import { DestinationSelectComponent } from './destination-select/destination-select.component';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        MatSelectModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
,
        PlacesComponent ,
        PlaceDetailsComponent ,
        BookTicketsComponent ,
        MoodSelectComponent ,
        BudgetSelectComponent,
        DestinationSelectComponent,
        ActivitySelectComponent],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }