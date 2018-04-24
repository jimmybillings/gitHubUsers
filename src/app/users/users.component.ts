import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UsersService } from './services/users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Users } from './users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersComponent implements OnInit {
  public userForm: FormGroup;
  public users: BehaviorSubject<Users> = new BehaviorSubject(this.intialUsersState());

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.userForm = new FormGroup({userName: new FormControl()});
    this.getUsers();
  }

  public getUsers(): void {
    this.userForm.controls['userName'].valueChanges
      .debounceTime(300)
      .filter((value: string) => {
        if (value.length < 1) {
          this.users.next(this.intialUsersState());
        }
        return value.length > 0;
      })
      .switchMap((value) => this.usersService.searchBy(value))
      .map((users: Users) => {
        if (users.errors) {
          return this.intialUsersState(users.errors);
        }
        if (users.items) {
          const size = (users.items.length > 10) ? 10 : users.items.length;
          users.items = users.items.slice(0, size);
          return users;
        } else {
          return this.intialUsersState();
        }
      }).subscribe((user: Users) => {
        this.users.next(user);
      });
  }

  private intialUsersState(newError = null): Users {
    const user = {
      total_count: 0,
      items: null
    };
    return (newError) ? { ...user, ...{ errors: newError} } : user;
  }

}
