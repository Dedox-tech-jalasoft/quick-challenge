import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users.service';
import { UserLocation } from '../core/models/userLocation.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private readonly userService: UsersService) {}

  userLocationData: UserLocation[] | null = null;

  ngOnInit(): void {
    this.userService.getUserData().subscribe((data: UserLocation[]) => {
      this.userLocationData = data;
    });
  }
}
