import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { FormControl } from '@angular/forms';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];
    moods = new FormControl();
    selectedMood: string;
    moodList: any[] = [{
        id: '1',
        emotion: 'Happiness'
    },{
        id: '2',
        emotion: 'Sadness'
    }, {
        id: '3',
        emotion: 'Fear'
    }];
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}