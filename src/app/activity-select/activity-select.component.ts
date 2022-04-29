import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-activity-select',
  templateUrl: './activity-select.component.html',
  styleUrls: ['./activity-select.component.less']
})
export class ActivitySelectComponent implements OnInit {

  loading = false;
  users: User[];
  moods = new FormControl();
  selectedMood: string;
  moodList: any[] = [{
      id: '1',
      emotion: 'Trekking'
  },{
      id: '2',
      emotion: 'Entertainment'
  }, {
      id: '3',
      emotion: 'Relaxing'
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
