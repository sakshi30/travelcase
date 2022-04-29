import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-budget-select',
  templateUrl: './budget-select.component.html',
  styleUrls: ['./budget-select.component.less']
})
export class BudgetSelectComponent implements OnInit {

  loading = false;
  users: User[];
  moods = new FormControl();
  selectedMood: string;
  moodList: any[] = [{
      id: '1',
      emotion: 'Less than 10,000 per person'
  },{
      id: '2',
      emotion: 'Between 10,000 to 20,000'
  }, {
      id: '3',
      emotion: 'Slurge!!'
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
