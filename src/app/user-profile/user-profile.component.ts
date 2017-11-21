import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  getProfile(): void {
    this.profileService.getUserProfile();
  }
  login(): void {
    this.profileService.login();
  }
  constructor(private profileService: UserProfileService) {
  }
  ngOnInit() {
    // this.getProfile();
  }
}
