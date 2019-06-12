import { Component, OnInit } from '@angular/core'
import { IPaginatedData, IUser, UsersService } from '../services/users.service'

import { Observable } from 'rxjs'

@Component({
  selector: 'app-users',
  template: `
    <h2>All Users</h2>
    <div *ngIf="users$ | async as users">
    <div>Found {{users.total}} user(s)</div>
    <mat-list>
      <mat-list-item *ngFor="let user of users.data">
        <span>{{user.fullName}}</span>
      </mat-list-item>
    </mat-list>
    </div>
  `,
})
export class UsersComponent {
  users$: Observable<IPaginatedData<IUser>>

  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.getUsers()
  }
}
