import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-destination-select',
  templateUrl: './destination-select.component.html',
  styleUrls: ['./destination-select.component.less']
})
export class DestinationSelectComponent implements OnInit {

  loading = false;
  users: User[];
  moods = new FormControl();
  selectedMood: string;
  moodList: any[] = [ {
    id: '1', 
    destination: 'Shillong, Meghalaya',
  },
  {
    id: '2', 
    destination: 'Shimla, Himachal Pradesh',
  },
  {
    id: '3', 
    destination: 'Chitrakoot Falls, Jagdalpur'  
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
