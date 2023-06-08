import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private readonly userService: UsersService) {}

  userLocationData: any[] | null = null;

  ngOnInit(): void {
    this.userService.getUserData().subscribe((data) => {
      this.userLocationData = data.results.map((user: any) => user.location);
      console.log(this.userLocationData);
    });
  }
}
